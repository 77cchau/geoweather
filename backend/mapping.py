import json
import urllib.parse
import urllib.request

APP = Flask(__name__)
WEATHER_URL_BASE = "https://api.weather.gov/"
NOMINATIM_URL_BASE =  "https://nominatim.openstreetmap.org/search?"

'''
Builds a URL for the Nominatim API to get a search
'''
def build_map_url(city_name, state_name):
    query_params = [("city", city_name), ("state", state_name),("format","json")]
    return f"{NOMINATIM_URL_BASE}{urllib.parse.urlencode(query_params)}"

'''
Uses a generated API URL and returns a tuple with the latitude and
longitude of a location
'''
def access_coords(url):
    response = None
    try:
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        #Decode the url to get a json response
        json_text = response.read().decode(encoding = "utf-8")

        #Convert json into a python dict
        return json.loads(json_text)
    finally:
        #Close the response
        if response != None:
            response.close()

test_map_url = build_map_url("Whittier","California")
test_dict = access_coords(test_map_url)
print(test_dict)