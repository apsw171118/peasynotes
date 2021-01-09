from flask import Flask

app = Flask(__name__)

@app.route("/")
def _index():
    return "Hello world"

@app.route("/<name>")
def _name(name):
    return f"Hello {name}"
