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

# For men category
men = df.loc[df['Category'] == 'Men']
men['Order Date'].min(), men['Order Date'].max()

print(men['Order Date'].min())
print(men['Order Date'].max())

# Drop unwanted cols ,order by date & reset index..
cols = ['Order Number',	'Order Status', 'First Name (Billing)',	'Last Name (Billing)', 'Company (Billing)', 'Address 1&2 (Billing)', 'City (Billing)',	'State Code (Billing)',	'Postcode (Billing)',	'Country Code (Billing)',	'Email (Billing)',	'First Name (Shipping)',	'Last Name (Shipping)',	'Address 1&2 (Shipping)',	'City (Shipping)',	'State Code (Shipping)',	'Postcode (Shipping)',	'Country Code (Shipping)',	'Shipping Method Title',	'Payment Method Title',	'Cart Discount Amount','Order Subtotal Amount','Order Shipping Amount', 'Order Refund Amount',	'Order Total Tax Amount',	'Category',	'Item # #1',	'SKU #1',	'Item Name #1',	'Quantity #1',	'Item Cost #1',	'Coupon Code',	'Discount Amount',	'Discount Amount Tax','Profit']
men.drop(cols, axis=1, inplace=True)
men = men.sort_values('Order Date')
men.isnull().sum()

men1 = men.groupby('Order Date')['Order Total Amount'].sum().reset_index()

# Index with time series.
men = men.set_index('Order Date')

men.index
# Using average daily order amount for a month.
y = men['Order Total Amount'].resample('MS').mean()
# print(y['2019':])
y.plot(figsize=(15, 6))
# plt.show()

decomposition = sm.tsa.seasonal_decompose(y, model='additive')
# fig = decomposition.plot()
# plt.show()

# ARIMA model
errVal=20
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
ax.set_ylabel('Men Category Sales')
plt.legend()
plt.show()

men = df.loc[df['Category'] == 'Men']
kids = df.loc[df['Category'] == 'Kids']
men.shape, kids.shape

cols = ['Order Number',	'Order Status', 'First Name (Billing)',	'Last Name (Billing)', 'Company (Billing)', 'Address 1&2 (Billing)', 'City (Billing)',	'State Code (Billing)',	'Postcode (Billing)',	'Country Code (Billing)',	'Email (Billing)',	'First Name (Shipping)',	'Last Name (Shipping)',	'Address 1&2 (Shipping)',	'City (Shipping)',	'State Code (Shipping)',	'Postcode (Shipping)',	'Country Code (Shipping)',	'Shipping Method Title',	'Payment Method Title',	'Cart Discount Amount','Order Subtotal Amount','Order Shipping Amount', 'Order Refund Amount',	'Order Total Tax Amount',	'Category',	'Item # #1',	'SKU #1',	'Item Name #1',	'Quantity #1',	'Item Cost #1',	'Coupon Code',	'Discount Amount',	'Discount Amount Tax','Profit']
men.drop(cols, axis=1, inplace=True)
kids.drop(cols, axis=1, inplace=True)

men = men.sort_values('Order Date')
kids = kids.sort_values('Order Date')

men = men.groupby('Order Date')['Order Total Amount'].sum().reset_index()
kids = kids.groupby('Order Date')['Order Total Amount'].sum().reset_index()

men = men.set_index('Order Date')
kids = kids.set_index('Order Date')

y_men = men['Order Total Amount'].resample('MS').mean()
y_kids = kids['Order Total Amount'].resample('MS').mean()

men = pd.DataFrame({'Order Date':y_men.index, 'Order Total Amount':y_men.values})
kids = pd.DataFrame({'Order Date': y_kids.index, 'Order Total Amount': y_kids.values})

store = men.merge(kids, how='inner', on='Order Date')
store.rename(columns={'Order Total Amount_x': 'men_Order Total Amount', 'Order Total Amount_y': 'kids_Order Total Amount'}, inplace=True)
store.head()

plt.figure(figsize=(20, 8))
plt.plot(store['Order Date'], store['men_Order Total Amount'], 'b-', label = 'men')
plt.plot(store['Order Date'], store['kids_Order Total Amount'], 'r-', label = 'kids')
plt.xlabel('Date'); plt.ylabel('Order Total Amount'); plt.title('Sales of men and kids')
plt.legend();
plt.show()