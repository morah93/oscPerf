from flask import Flask

app = Flask(__name__)


@app.route("/members")
def members():
  return {"members": ["Melody", "Marlee", "Mohammed"] }


if __name__ == "__main__":
  app.run(debug=True, port = 1000, host= '127.0.0.1' )

# FLASK_RUN_PORT=8000
# export FLASK_RUN_HOST="127.0.0.1"
