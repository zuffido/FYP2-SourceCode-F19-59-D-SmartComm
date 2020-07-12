import warnings
import itertools
import numpy as np
import matplotlib.pyplot as plt
warnings.filterwarnings("ignore")
plt.style.use('fivethirtyeight')
import pandas as pd
import statsmodels.api as sm
import matplotlib
matplotlib.rcParams['axes.labelsize'] = 14
matplotlib.rcParams['xtick.labelsize'] = 12
matplotlib.rcParams['ytick.labelsize'] = 12
matplotlib.rcParams['text.color'] = 'G'

df = pd.read_excel('dataS.xls')

# For kids category
kids = df.loc[df['Category'] == 'Kids']
kids['Order Date'].min(), kids['Order Date'].max()

print(kids['Order Date'].min())
print(kids['Order Date'].max())

# Drop unwanted cols ,order by date & reset index..
cols = ['Order Number',	'Order Status', 'First Name (Billing)',	'Last Name (Billing)', 'Company (Billing)', 'Address 1&2 (Billing)', 'City (Billing)',	'State Code (Billing)',	'Postcode (Billing)',	'Country Code (Billing)',	'Email (Billing)',	'First Name (Shipping)',	'Last Name (Shipping)',	'Address 1&2 (Shipping)',	'City (Shipping)',	'State Code (Shipping)',	'Postcode (Shipping)',	'Country Code (Shipping)',	'Shipping Method Title',	'Payment Method Title',	'Cart Discount Amount','Order Subtotal Amount','Order Shipping Amount', 'Order Refund Amount',	'Order Total Tax Amount',	'Category',	'Item # #1',	'SKU #1',	'Item Name #1',	'Quantity #1',	'Item Cost #1',	'Coupon Code',	'Discount Amount',	'Discount Amount Tax','Profit']
kids.drop(cols, axis=1, inplace=True)
kids = kids.sort_values('Order Date')
kids.isnull().sum()

kids1 = kids.groupby('Order Date')['Order Total Amount'].sum().reset_index()

# Index with time series.
kids = kids.set_index('Order Date')

kids.index
# Using average daily order amount for a month.
y = kids['Order Total Amount'].resample('MS').mean()
# print(y['2019':])
y.plot(figsize=(15, 6))
# plt.show()

decomposition = sm.tsa.seasonal_decompose(y, model='additive')
# fig = decomposition.plot()
# plt.show()

# ARIMA model
errVal=1
p = d = q = range(0, 2)
pdq = list(itertools.product(p, d, q))
seasonal_pdq = [(x[0], x[1], x[2], 12) for x in list(itertools.product(p, d, q))]
print('ARIMAX: {} x {}'.format(pdq[1], seasonal_pdq[1]))
print('ARIMAX: {} x {}'.format(pdq[1], seasonal_pdq[2]))
print('ARIMAX: {} x {}'.format(pdq[2], seasonal_pdq[3]))
print('ARIMAX: {} x {}'.format(pdq[2], seasonal_pdq[4]))
minAic = 10000000000000

for param in pdq:
    for param_seasonal in seasonal_pdq:
        try:
            mod = sm.tsa.statespace.SARIMAX(y,
            order=param,
            seasonal_order=param_seasonal,
            enforce_stationarity=False,
            enforce_invertibility=False)
            results = mod.fit()
            print('ARIMA{}x{}12 - AIC:{}'.format(param, param_seasonal, results.aic))
            if results.aic < minAic:
                minAic = results.aic
        except:
            continue



# Fitting the model.

mod = sm.tsa.statespace.SARIMAX(y,
                                order=(1, 1, 1),
                                seasonal_order=(1, 1, 0, 12),
                                enforce_stationarity=False,
                                enforce_invertibility=False)
results = mod.fit()
print(results.summary().tables[1])

# Model Diagnostics

# results.plot_diagnostics()
plt.show()

pred = results.get_prediction(start=pd.to_datetime('2016-06-01'), dynamic=False)
pred_ci = pred.conf_int()
ax = y['2014':].plot(label='observed')
pred.predicted_mean.plot(ax=ax, label='One-step ahead Forecast', alpha=.7)
ax.fill_between(pred_ci.index,
                pred_ci.iloc[:, 0],
                pred_ci.iloc[:, 1], color='k', alpha=.2)
ax.set_xlabel('Date')
ax.set_ylabel('Men Category Sales')
plt.legend()
plt.show()

y_forecasted = pred.predicted_mean
y_truth = y['2016-06-01':]
mse = (((y_forecasted - y_truth) ** 2).mean())/errVal
print('The Root Mean Squared Error of our forecasts is {}'.format(round(np.sqrt(mse), 2)))

pred_uc = results.get_forecast(steps=30)
pred_ci = pred_uc.conf_int()
ax = y.plot(label='observed', figsize=(14, 7))
pred_uc.predicted_mean.plot(ax=ax, label='Forecast')
ax.fill_between(pred_ci.index,
                pred_ci.iloc[:, 0],
                pred_ci.iloc[:, 1], color='k', alpha=.25)
ax.set_xlabel('Date')
ax.set_ylabel('Kids Category Sales')
plt.legend()
plt.show()

kids = df.loc[df['Category'] == 'Kids']
ladies = df.loc[df['Category'] == 'Ladies']
kids.shape, ladies.shape

cols = ['Order Number',	'Order Status', 'First Name (Billing)',	'Last Name (Billing)', 'Company (Billing)', 'Address 1&2 (Billing)', 'City (Billing)',	'State Code (Billing)',	'Postcode (Billing)',	'Country Code (Billing)',	'Email (Billing)',	'First Name (Shipping)',	'Last Name (Shipping)',	'Address 1&2 (Shipping)',	'City (Shipping)',	'State Code (Shipping)',	'Postcode (Shipping)',	'Country Code (Shipping)',	'Shipping Method Title',	'Payment Method Title',	'Cart Discount Amount','Order Subtotal Amount','Order Shipping Amount', 'Order Refund Amount',	'Order Total Tax Amount',	'Category',	'Item # #1',	'SKU #1',	'Item Name #1',	'Quantity #1',	'Item Cost #1',	'Coupon Code',	'Discount Amount',	'Discount Amount Tax','Profit']
kids.drop(cols, axis=1, inplace=True)
ladies.drop(cols, axis=1, inplace=True)

kids = kids.sort_values('Order Date')
ladies = ladies.sort_values('Order Date')

kids = kids.groupby('Order Date')['Order Total Amount'].sum().reset_index()
ladies = ladies.groupby('Order Date')['Order Total Amount'].sum().reset_index()

kids = kids.set_index('Order Date')
ladies = ladies.set_index('Order Date')

y_kids = kids['Order Total Amount'].resample('MS').mean()
y_ladies = ladies['Order Total Amount'].resample('MS').mean()

kids = pd.DataFrame({'Order Date':y_kids.index, 'Order Total Amount':y_kids.values})
ladies = pd.DataFrame({'Order Date': y_ladies.index, 'Order Total Amount': y_ladies.values})

store = kids.merge(ladies, how='inner', on='Order Date')
store.rename(columns={'Order Total Amount_x': 'kids_Order Total Amount', 'Order Total Amount_y': 'ladies_Order Total Amount'}, inplace=True)
store.head()

plt.figure(figsize=(20, 8))
plt.plot(store['Order Date'], store['kids_Order Total Amount'], 'b-', label = 'kids')
plt.plot(store['Order Date'], store['ladies_Order Total Amount'], 'r-', label = 'ladies')
plt.xlabel('Date'); plt.ylabel('Order Total Amount'); plt.title('Sales of kids and ladies')
plt.legend()
plt.savefig('foo.png')
plt.show()