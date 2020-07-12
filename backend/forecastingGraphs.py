from flask import (Flask, render_template, jsonify, send_file)
from flask_cors import CORS, cross_origin
import psycopg2


from __main__ import app


@app.route("/kids_and_ladies", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_kids_ladies():
    filename = 'KidsAndLadies.png'
    return send_file(filename, mimetype='image/gif')

@app.route("/ladies_and_men", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_ladies_men():
    filename = 'LadiesAndMen.png'
    return send_file(filename, mimetype='image/gif')

@app.route("/men_and_kids", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_men_kids():
    filename = 'MenAndKids.png'
    return send_file(filename, mimetype='image/gif')

@app.route("/kids_category", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_kids_category():
    filename = 'KidsCategory.png'
    return send_file(filename, mimetype='image/gif')

@app.route("/kids_forecast", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_kids_forecast():
    filename = 'KidsForecast.png'
    return send_file(filename, mimetype='image/gif')

@app.route("/ladies_category", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_ladies_category():
    filename = 'LadiesCategory.png'
    return send_file(filename, mimetype='image/gif')

@app.route("/men_category", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_men_category():
    filename = 'MenCategory.png'
    return send_file(filename, mimetype='image/gif')

@app.route("/ladies_forecast", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_ladies_forecast():
    filename = 'LadiesForecast.png'
    return send_file(filename, mimetype='image/gif')

@app.route("/men_forecast", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_men_forecast():
    filename = 'MenForecast.png'
    return send_file(filename, mimetype='image/gif')



