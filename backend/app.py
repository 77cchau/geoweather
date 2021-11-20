from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/verify", methods=["POST"])
def signup():
    if (request.form["state"] and request.form["city"]):
        return "200"
    else:
        return "400"
