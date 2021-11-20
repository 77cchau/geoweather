from flask import Flask
import json
import urllib.parse
import urllib.request

APP = Flask(__name__)
BASE_API = "https://api.weather.gov/"

print("Hello world!")