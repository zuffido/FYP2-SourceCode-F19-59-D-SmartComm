from flask import (Flask, render_template, jsonify, send_file)
from flask_cors import CORS, cross_origin
import psycopg2




app = Flask("__main__")
import topCustomers
import revenuePerMonth
import totalDiscounts
import productsList
import lastMonthRevenue
import forecastingGraphs
import lastMonthUnitsSold
import unitsPerMonth
import customerList
import transactionsDetails
import salesPerMonth
import orderDetails
import salesRevenue
import salesVolume
import COGS
@app.route("/", methods=['GET'])
@cross_origin(supports_credentials=True)
def my_index():
    return jsonify("server is running")


app.run(host='0.0.0.0',debug=True)
CORS(app)