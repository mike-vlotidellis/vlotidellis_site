from flask import render_template
from flaskblog import app



@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/map")
def map():
    return render_template('map.html')

