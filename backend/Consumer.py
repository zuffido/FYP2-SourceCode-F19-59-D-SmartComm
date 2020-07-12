from kafka import KafkaConsumer
# from pymongo import MongoClient
from json import loads
import psycopg2

consumer = KafkaConsumer(
    'testTopic',
    bootstrap_servers=['localhost:9092'],
    auto_offset_reset='earliest',
    enable_auto_commit=True,
    group_id=None,
    value_deserializer=lambda x: loads(x.decode('utf-8')))

for message in consumer:
    message = message.value
    # collection.insert_one(message)
    # print('{} added to {}'.format(message, collection))
    print(message)
    print(type(message))
    print(message['Order Number'])
    print(message['Order Status'])
    print(message['Order Date'])

    connection = psycopg2.connect(user="postgres",
                                  password="1234",
                                  host="localhost",
                                  port="5432",
                                  database="postgres")
    try:

        cursor = connection.cursor()
        postgres_insert_query = """ INSERT INTO INVENTORY_1 (ID,
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
                   Profit ) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""
        record_to_insert = (
        message['ID'],message['Order Number'], message['Order Status'], message['Order Date'], message['First Name (Billing)'],
        message['Last Name (Billing)'], message['Company (Billing)'], message['Address 1&2 (Billing)'],
        message['City (Billing)'], message['State Code (Billing)'], message['Postcode (Billing)'],
        message['Country Code (Billing)'], message['Email (Billing)'], message['First Name (Shipping)'],
        message['Last Name (Shipping)'], message['Address 1&2 (Shipping)'], message['City (Shipping)'],
        message['State Code (Shipping)'], message['Postcode (Shipping)'], message['Country Code (Shipping)'],
        message['Shipping Method Title'], message['Payment Method Title'], message['Cart Discount Amount'],
        message['Order Subtotal Amount'], message['Order Shipping Amount'], message['Order Refund Amount'],
        message['Order Total Amount'], message['Order Total Tax Amount'], message['Category'], message['Item # #1'],
        message['SKU #1'], message['Item Name #1'], message['Quantity #1'], message['Item Cost #1'],
        message['Coupon Code'], message['Discount Amount'], message['Discount Amount Tax'], message['Profit'])
        cursor.execute(postgres_insert_query, record_to_insert)
        connection.commit()
        count = cursor.rowcount
        print(count, "Record inserted successfully into Inventory table")
    except (Exception, psycopg2.Error) as error:
        if (connection):
            print("Failed to insert record into Inventory table", error)
    finally:
        # closing database connection.
        if (connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")



