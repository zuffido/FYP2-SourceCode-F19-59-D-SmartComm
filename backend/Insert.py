import csv
import psycopg2
conn = psycopg2.connect("host=localhost dbname=postgres user=postgres password=1234  port= 5432")
cur = conn.cursor()
with open('dataS.csv', 'r') as f:
    reader = csv.reader(f)
    next(reader) # Skip the header row.
    for row in reader:
        cur.execute(""" INSERT INTO INVENTORY_1 (ID,
                   Order_Number,	
                   Order_Status,
                   Order_Date, 
                   First_Name_Billing,	
                   Last_Name_Billing, 
                   Company_Billing, 
                   Address_1_2_Billing, 
                   City_Billing,	
                   State_Code_Billing,	
                   Postcode_Billing,	
                   Country_Code_Billing,	
                   Email_Billing,	
                   First_Name_Shipping,	
                   Last_Name_Shipping,	
                   Address_1_2_Shipping,	
                   City_Shipping,	
                   State_Code_Shipping,	
                   Postcode_Shipping,	
                   Country_Code_Shipping,	
                   Shipping_Method_Title,	
                   Payment_Method_Title,	
                   Cart_Discount_Amount,
                   Order_Subtotal_Amount,
                   Order_Shipping_Amount, 
                   Order_Refund_Amount,	
                   Order_Total_Amount,
                   Order_Total_Tax_Amount,	
                   Category,	
                   Item_1,	
                   SKU_1,	
                   Item_Name_1,	
                   Quantity_1,	
                   Item_Cost_1,	
                   Coupon_Code,	
                   Discount_Amount,	
                   Discount_Amount_Tax,
                   Profit ) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)""" ,row    
    )
    print( "Record inserted successfully into Inventory table")

conn.commit()