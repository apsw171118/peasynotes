from flask import Flask, url_for, render_template
from ncrypt import decode
from werkzeug.exceptions import HTTPException


app = Flask(__name__)

@app.route("/")
def _index():
    return render_template("index.html")

@app.route("/note")
def _take_note():
    return render_template("note.html")

@app.route("/notes")
def _get_saved_notes():
    return render_template("notes.html")

@app.route("/<msg>")
def _decode_note(msg):
    text = decode(msg)
    return render_template("snote.html", text=text)

@app.errorhandler(HTTPException)
@app.errorhandler(500)
def _handle_server_or_client_error(e):
    return render_template("error.html")
