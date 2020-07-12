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
   postgreSQL_select_Query = "SELECT to_char(order_date,'MM') as mon, sum(quantity_1) FROM inventory_1 WHERE order_date BETWEEN '2017-01-01' AND '2017-12-30' GROUP BY mon ORDER BY 1;"

   cursor.execute(postgreSQL_select_Query)
   monthly_units_sold = cursor.fetchall() 
#    print(top50)
   monthly_units_sold = json.dumps(monthly_units_sold, default=str)
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
@app.route("/monthly_units", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_monthly_units_sold():
    return monthly_units_sold

