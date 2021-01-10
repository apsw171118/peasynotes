from flask import Flask, url_for, render_template

app = Flask(__name__)

@app.route("/")
def _index():
    return render_template("index.html")

@app.route("/note")
def _take_note():
    return render_template("note.html")


