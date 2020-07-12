from flask import (Flask, render_template, jsonify)
from flask_cors import CORS, cross_origin
import psycopg2
import json

try:
   connection = psycopg2.connect(user="postgres",
                                  password="1234",
                                  host="localhost",
                                  port="5432",
                                  database="postgres")
   cursor = connection.cursor()
   postgreSQL_select_Query = "SELECT  DISTINCT  first_name_billing, email_billing, last_name_billing, city_billing  FROM inventory_1 Order by first_name_billing ASC;"

   cursor.execute(postgreSQL_select_Query)
   customerList = cursor.fetchall() 
#    print(top50)
   customerList = json.dumps(customerList, default=str)
#    print(top50)

   


except (Exception, psycopg2.Error) as error :
    print ("Error while fetching data from PostgreSQL", error)

finally:
    #closing database connection.
    if(connection):
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")

from __main__ import app
@app.route("/customer_list", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_customer_list():
    return customerList

