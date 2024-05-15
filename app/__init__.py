import os
from flask import request, jsonify
from config import app, db
from models import Contact

# Requests
# GET

@app.route("/Contacts", methods=["GET"])
def get_contacts():
  contacts = Contact.query.all()
  json_contacts = list(map(lambda x: x.to_json(), contacts))
  return jsonify({"contacts": json_contacts})

if __name__ == "__main__":
  with app.app_context():
    db.create_all()

  app.run(debug=True)

#POST

@app.route("create_contact", methods=["POST"])
def create_contacts():
  pass


# PUT









# DELETE
