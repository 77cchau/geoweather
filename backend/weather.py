from flask import Flask
from flask import request
from flask import url_for


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/verify", methods=["POST"])
def verify():
    if request.form["state"] != None and request.form["city"] != None:
        return "200"
    return "403"

@app.route("/search", methods=["POST"])
def search():
    pass

