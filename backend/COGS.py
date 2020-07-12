from flask import (Flask, render_template, jsonify, send_file)
from flask_cors import CORS, cross_origin
import psycopg2

try:
   connection = psycopg2.connect(user="postgres",
                                  password="1234",
                                  host="localhost",
                                  port="5432",
                                  database="postgres")
   cursor = connection.cursor()
   postgreSQL_select_Query = "SELECT sum(item_cost_1) FROM inventory_1 WHERE order_date BETWEEN '2017-01-01' AND '2017-12-30';"

   cursor.execute(postgreSQL_select_Query)
   COGS = cursor.fetchall() 
   recordInString = str(COGS)
   recordInString = recordInString.replace(',', '')
   recordInString = recordInString.replace('[(', '')
   recordInString = recordInString.replace(')]', '')
   
#    for row in mobile_records:
#        print("Id = ", row[0], )
#        print("Model = ", row[1])
#        print("Price  = ", row[2], "\n")

except (Exception, psycopg2.Error) as error :
    print ("Error while fetching data from PostgreSQL", error)

finally:
    #closing database connection.
    if(connection):
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")

# app = Flask("__main__")
# import top_customers
# import RevenuePerMonth
# @app.route("/", methods=['GET'])
# @cross_origin(supports_credentials=True)
# def my_index():
#     return jsonify("server is running")

from __main__ import app

@app.route("/COGS", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_COGS():
    return jsonify(recordInString)

