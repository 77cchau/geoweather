import json
import urllib.parse
import urllib.request

WEATHER_URL_BASE = "https://api.weather.gov/"
NOMINATIM_URL_BASE =  "https://nominatim.openstreetmap.org/search?"

'''
Builds a URL for the Nominatim API to get a search
'''
def build_map_url(city_name, state_name):
    query_params = [("city", city_name), ("state", state_name),("format","json")]
    return f"{NOMINATIM_URL_BASE}{urllib.parse.urlencode(query_params)}"

'''
Uses a generated API URL and returns the JSON data in the form of a python dictionary
'''
def access_data(url):
    response = None
    try:
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        #Decode the url to get a json response
        json_text = response.read().decode(encoding = "utf-8")

        #Convert json into a python dict
        return json.loads(json_text)[0]
    finally:
        #Close the response
        if response != None:
            response.close()

#Returns (lat,lon) for coordinates in the form of a tuple
def get_city_coords(city, state):
    url = build_map_url(city,state)
    data = access_data(url)

    return (data["lat"],data["lon"])


print(get_city_coords("whittier","California"))