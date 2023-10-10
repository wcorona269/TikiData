from .db import db

# Favorites class. Users can save favorite leagues and clubs to help tailor their experience
class Favorite(db.Model):
  __tablename__ = 'favorites'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(
      'users.id'), index=True, nullable=False)
  club = db.Column(db.String(64), nullable=False)
  user = db.relationship('User', back_populates='favorites')

  def __repr__(self):
      return f"Favorite('{self.club}', '{self.user_id}')"
