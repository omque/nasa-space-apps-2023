# MODIS API Documentation: https://modis.ornl.gov/rst/ui/

#Longitude/Latitude Declarations for testing
latitude = 39.174272
longitude = -116.937615
product = "MOD13Q1"
band = "250m_16_days_NDVI"

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
def fetch_ndvi_data(latitude, longitude, band, product, modis_date):
    base_url = "https://modis.ornl.gov/rst/api/v1/MOD13Q1/subset?"
    PARAMS={
        "longitude" : longitude,
        "latitude" : latitude,
        "band": band,
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
    average_ndvi = 0
    
    for value in ndvi_data["subset"][0]["data"]:
        sum += value

    average_ndvi = ((sum)/(len(ndvi_data["subset"][0]["data"]))*0.0001)
    scaled_ndvi = round(average_ndvi,2)

    return scaled_ndvi
