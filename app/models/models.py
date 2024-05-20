from app.config import db

class Contact(db.model):
  id = db.Column(db.Integer, primary_key=True)

  def to_json(self):
    return{
      "id": self.id
    }
