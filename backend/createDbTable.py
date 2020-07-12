



import psycopg2

conn = psycopg2.connect(
   database="postgres", user='postgres', password='1234', host='localhost', port= '5432'
)
#Creating a cursor object using the cursor() method
cursor = conn.cursor()

#Doping EMPLOYEE table if already exists.
cursor.execute("DROP TABLE IF EXISTS INVENTORY_1")

#Creating table as per requirement
sql ='''CREATE TABLE INVENTORY_1 (
               ID INT PRIMARY KEY,
               Order_Number CHAR(20),	
               Order_Status CHAR(20),
               Order_Date DATE, 
               First_Name_Billing CHAR(150),	
               Last_Name_Billing CHAR(150), 
               Company_Billing CHAR(150), 
               Address_1_2_Billing CHAR(150), 
               City_Billing CHAR(150),	
               State_Code_Billing CHAR(150),	
               Postcode_Billing CHAR(150),	
               Country_Code_Billing CHAR(150),	
               Email_Billing CHAR(150),	
               First_Name_Shipping CHAR(150),	
               Last_Name_Shipping CHAR(150),	
               Address_1_2_Shipping CHAR(150),	
               City_Shipping CHAR(150),	
               State_Code_Shipping CHAR(150),	
               Postcode_Shipping CHAR(150),	
               Country_Code_Shipping CHAR(150),	
               Shipping_Method_Title CHAR(150),	
               Payment_Method_Title CHAR(150),	
               Cart_Discount_Amount FLOAT,
               Order_Subtotal_Amount FLOAT,
               Order_Shipping_Amount FLOAT, 
               Order_Refund_Amount FLOAT,	
               Order_Total_Amount FLOAT,
               Order_Total_Tax_Amount FLOAT,	
               Category CHAR(150),	
               Item_1 INTEGER,	
               SKU_1 CHAR(50),	
               Item_Name_1 CHAR(150),	
               Quantity_1 INTEGER,	
               Item_Cost_1 FLOAT,	
               Coupon_Code CHAR(150),	
               Discount_Amount FLOAT,	
               Discount_Amount_Tax CHAR(150),
               Profit FLOAT
)'''
cursor.execute(sql)
print("Table created successfully........")


conn.commit()
conn.close()
cursor.close()