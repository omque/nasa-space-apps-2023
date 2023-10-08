from crypt import methods
import datetime
from numpy import average
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import Flask-CORS

#In order to run Backend:
# pip install Flask
#pip install -U flask-cors


#Request Function to get the most recent calendar date and modis date

def date_data(latitude, longitude):
    base_url = "https://modis.ornl.gov/rst/api/v1/MOD13Q1/dates"
    product = "MOD13Q1"
    latitude = latitude
    longitude = longitude
    PARAMS = {
        "longitude" : longitude,
        "latitude" : latitude
    }

    response = requests.get(base_url, params=PARAMS)
    data = (response.json())


    #Most recent Modis date is stored in variable modis_date, and Most Recent Calendar Date is stored in calendar_date: 
    dates = (data['dates'][len(data['dates'])-1])
    modis_date = (dates['modis_date'])
    calendar_date = (dates['calendar_date'])
    #---------------------------------------

    #Calling Request Function Again in order to get Average of modis
    base_url = "https://modis.ornl.gov/rst/api/v1/MOD13Q1/subset?"
    PARAMS={
        "longitude" : longitude,
        "latitude" : latitude,
        "kmAboveBelow" : 1,
        "kmLeftRight" : 1,
        "product" : product,
        "startDate" : modis_date,
        "endDate" : modis_date,
    }

    sum = 0
    the_average = 0
    the_product = '250m_16_days_NDVI'
    response = requests.get(base_url, params=PARAMS)
    data = (response.json())

    for i in range(0, len(data["subset"])):
        if data['subset'][i]['band'] == the_product:
            the_modis_data = (data['subset'][i]['data'])
            for u in range(0, len(the_modis_data)):
                sum += the_modis_data[u]
            the_average = (sum/(len(the_modis_data)))/10000
            break


    #For Backend, This is the data averaged from the most recent modis date associated with the most recent month
    the_average_of_modis_date_data = the_average
    return([the_average_of_modis_date_data, calendar_date])
    #Note: This will return the modis_date_data's average and the calendar_date for the most recent date associated with the data
    #------------------------------------------


#Instructions to use code:
#Call the function, date_data and assign it to a variable, then input the latitude then longitude separated by a comma.
#Example:
    # x = date_data(37.98059,-120.55938)
    # print(x)


#Back-End
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


@app.route("/api/<longitude>/<latitude>", methods=['GET', 'POST'])
def get_average_data(longitude, latitude):
    x = float(longitude)
    y = float(latitude)
    result = date_data(y, x)
    return jsonify({
        'average' : result[0],
        'calendar_date' : result[1],
    })


if __name__ == '__main__':
    app.run(debug=True)
