from flask import Flask

app = Flask(__name__)


@app.route("/")
def members():
  return {"members": ["Melody", "Marlee", "Mohammed"] }


if __name__ == "__main__":
  app.run(debug=True)
  # app.run(port=3000)
