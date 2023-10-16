from flask_login import UserMixin, login_user, login_required
from sqlalchemy import CheckConstraint
from datetime import timedelta
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from .db import db, bcrypt
from flask import jsonify

class User(UserMixin, db.Model):
	__tablename__ = 'users'

	# table columns
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(64), index=True, unique=True, nullable=False)
	email = db.Column(db.String(120), unique=True, nullable=False)
	password_hash = db.Column(db.String(255), nullable=False)
 
	# table relationships
	favorites = db.relationship('Favorite', back_populates='user')
	posts = db.relationship('Post', back_populates='user')
	likes = db.relationship('PostLike', back_populates='user')
	comments = db.relationship('Comment', back_populates='user')
 
	# database constraints
	__table_args__ = (
			CheckConstraint("length(password_hash) >= 8", name="password_length_check"),
	)
	
	# getter methods
	def get_id(self):
		return str(self.id)
 
	def user_info(self, user_id):
		user = User.query.filter_by(id=user_id).first()
		
		if user:
			return user.username
		else:
			return None
		
	# Authentication functions
	def set_password(self, password):
		pwhash = bcrypt.generate_password_hash(password)
		self.password_hash = pwhash.decode('utf-8')

	def check_password(self, password):
		return bcrypt.check_password_hash(self.password_hash, password)

	@staticmethod
	def find_user_by_email(email):
		user = User.query.filter_by(email=email).first();
		if user:
			return user['username']
		else:
			return 'User not found'

	@staticmethod
	def login_user(email, password):
		if not email or not password:
			return False

		user = User.query.filter_by(email=email).first()
    
		if not user or not user.check_password(password):
			return False, {'message': 'Invalid Credentials'}
		else:
			user_data = {
				'id': user.id,
				'email': user.email,
				'username': user.username
			}
			return True, user_data

  # Register User
	@staticmethod
	def register_user(email, username, password):
		if not username or not email or not password:
			return False
		
		if User.query.filter_by(username=username).first():
			return False
   
		if User.query.filter_by(email=email).first():
			return False

		user = User(username=username, email=email)
		user.set_password(password)
		db.session.add(user)
		db.session.commit()

		return True

	def to_dict(self):
		return {
			'id': self.id, 
			'username': self.username,
			'email': self.email,
		}

	# Print user object
	def __repr__(self):
		return f"User('{self.username}', '{self.email}')"
