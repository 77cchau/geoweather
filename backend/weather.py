import json
import urllib.parse
import urllib.request

WEATHER_URL_BASE = "https://api.weather.gov/points/"

def build_weather_url(lat,lon):
    return f"{WEATHER_URL_BASE}{lat},{lon}"

'''
Uses link to give back the forecast data for a location
'''
def build_weather_data(url):
    response = None
    try:
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        #Get a JSON response
        json_text = response.read().decode(encoding = "utf-8")

        return json.loads(json_text)
    finally:
        #close
        if response != None:
            response.close()

print(build_weather_data(build_weather_url("36.1672559","-115.148516")))