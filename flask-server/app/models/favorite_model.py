from .db import db
from enum import Enum

class FavoriteType(Enum):
    CLUB = 'club',
    PLAYER = 'player'
    LEAGUE = 'league'

# Favorites class. Users can save favorite leagues and clubs to help tailor their experience
class Favorite(db.Model):
  __tablename__ = 'favorites'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), index=True, nullable=False)
  name = db.Column(db.String, nullable=False)
#   icon = db.Column(db.String, nullable=False)
  target_id = db.Column(db.Integer, nullable=False)
  target_type = db.Column(db.Enum(FavoriteType), nullable=False)
  user = db.relationship('User', back_populates='favorites')
  
  def add_favorite(user_id, name, target_type, target_id):
    new_fave = Favorite(user_id=user_id, name=name, target_type=target_type, target_id=target_id)
    if new_fave:
        db.session.add(new_fave)
        db.session.commit()  
        return True
    else:
        return False
    
  def delete_favorite(self):
      db.session.delete(self)
      db.session.commit()
      return True
      
  def to_dict(self):
      return {
          'id': self.id,
          'name': self.name,
          'target_id': self.target_id,
          'target_type': self.target_type,
      }
  

  def __repr__(self):
      return f"Favorite('{self.club}', '{self.user_id}')"
