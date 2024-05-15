from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app) 

@app.route("/members")
def members():
  return {"members": ["Melody", "Marlee", "Mohammed"] }


if __name__ == "__main__":
  app.run(debug=True, port = 1000, host= '127.0.0.1' )

# FLASK_RUN_PORT=8000
# export FLASK_RUN_HOST="127.0.0.1"
