from dotenv import load_dotenv
load_dotenv(".flaskenv")

from app import app, db
from  app.models import User

with app.app_context():
  db.drop_all()
  db.create_all()
  
  will = User(username='willyc', email='wcorona269@gmail.com')
  will.set_password('Loyola301!')
  
  spencer = User(username='spennybluntz', email='spencer@gmail.com')
  spencer.set_password('courts')
  
  db.session.add(will)
  db.session.add(spencer)
  db.session.commit()