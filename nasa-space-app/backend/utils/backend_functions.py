# MODIS API Documentation: https://modis.ornl.gov/rst/ui/

#Longitude/Latitude Declarations for testing
latitude = 39.174272
longitude = -116.937615
product = "MOD13Q1"

#Request most recent available calendar and NDVI data from MODIS API
def fetch_most_recent_data(latitude, longitude, product):
    base_url = "https://modis.ornl.gov/rst/api/v1/MOD13Q1/dates"
    product = product
    latitude = latitude
    longitude = longitude
    PARAMS = {
        "longitude" : longitude,
        "latitude" : latitude
    }
    response = requests.get(base_url, params=PARAMS)
    recent_data = (response.json())

    return recent_data

#Process MODIS API to return modis_date and calendar_date
def format_MODIS_data(recent_data):
    dates = (recent_data['dates'][len(recent_data['dates'])-1])
    modis_date = (dates['modis_date'])
    calendar_date = (dates['calendar_date'])
    
    return modis_date, calendar_date

#Request NDVI Data from MODIS API
def fetch_ndvi_data(latitude, longitude, product, modis_date):
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
    response = requests.get(base_url, params=PARAMS)
    ndvi_data = (response.json())

    return ndvi_data

#Process NDVI Data to provide scaled NDVI value from 250m_16_days_NDVI dataset
def format_NDVI_data(ndvi_data):

    sum = 0
    the_average = 0
    the_product = '250m_16_days_NDVI'
    
    
    for i in range(0, len(data["subset"])):
        if data['subset'][i]['band'] == the_product:
            the_modis_data = (data['subset'][i]['data'])
            for u in range(0, len(the_modis_data)):
                sum += the_modis_data[u]
            the_average = round(((sum/(len(the_modis_data)))*0.0001),2)
            break