# MODIS API Documentation: https://modis.ornl.gov/rst/ui/

#Request most recent available calendar and NDVI data from MODIS API
def fetch_most_recent_data(latitude, longitude):
    base_url = "https://modis.ornl.gov/rst/api/v1/MOD13Q1/dates"
    product = "MOD13Q1"
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
def format_MODIS_data(recent_data)
    dates = (recent_data['dates'][len(recent_data['dates'])-1])
    modis_date = (dates['modis_date'])
    calendar_date = (dates['calendar_date'])
    
    return modis_date, calendar_date

