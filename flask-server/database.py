from dotenv import load_dotenv
load_dotenv(".flaskenv")

from app import app, db
from  app.models import User, Favorite

with app.app_context():
  db.drop_all()
  db.create_all()
  
  will = User(username='willyc', email='wcorona269@gmail.com')
  will.set_password('Loyola301!')
  
  spencer = User(username='spennybluntz', email='spencer@gmail.com')
  spencer.set_password('courts')
  
  db.session.add(will)
  db.session.add(spencer)
  
  # create favorites
  favorite = Favorite(club='Barcelona', user=will)
  favorite2 = Favorite(club='Manchester City', user=will)
  favorite3 = Favorite(club='Chelsea', user=spencer)
  db.session.add(favorite)
  db.session.add(favorite2)
  db.session.add(favorite3)
  db.session.commit()
  