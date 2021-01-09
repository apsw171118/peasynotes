from flask import Flask, url_for, render_template

app = Flask(__name__)

@app.route("/")
def _index():
    return render_template("index.html")

@app.route("/<name>")
def _name(name):
    return f"Hello {name}"
