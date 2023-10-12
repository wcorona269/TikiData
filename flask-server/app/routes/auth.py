from flask import Blueprint, request, jsonify, make_response
from ..models import db, User
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import jwt
from ..config import Config
import datetime
from datetime import timedelta


bp = Blueprint('auth', __name__, url_prefix='/auth')

# Create a set of revoked session tokens
revoked_tokens = set()

@bp.route('/register', methods=['POST'])
def register():
  data = request.json
  username = data.get('username')
  email = data.get('email')
  password = data.get('password')
  
  new_user = User.register_user(email, username, password)
  
  if new_user == True:
    return jsonify({'message': 'User Created Successfully'}), 200
  else:
    return jsonify({'message': 'Invalid credentials'}), 400

@bp.route('/login', methods=['POST'])
def login():
  data = request.json

  email = data.get('email')
  password = data.get('password')
    
  status, message = User.login_user(email, password)
  if status == True:
    token = jwt.encode({'email': email, 'username': message['username'], 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=6)}, Config.SECRET_KEY, algorithm='HS256')
    response = make_response(jsonify({'message': 'Login successful'}))
    response.set_cookie('access_token', token, httponly=True, secure=True)
    return response, 200
  else:
    return jsonify(message)

@bp.route('/logout', methods=['POST'])
def logout():
  data = request.json
    
  access_token = data.get('access_token')
    
  if access_token != 'null':
    revoked_tokens.add(access_token)
  
  return jsonify({
    'message': 'User Logged Out Successfully',
  }), 200 

@bp.route('/update', methods=['PUT'])
@jwt_required()
def update_user():
  current_user_id = get_jwt_identity()
  data = request.json

  user = User.query.get(current_user_id)
  if not user:
    return jsonify({'message': 'User not found'}), 404

  if 'username' in data:
    new_username = data['username']
    user.username = new_username

  if 'password' in data:
    new_password = data['password']
    user.set_password(new_password)    
  
  db.session.commit()

  return jsonify({'message': 'User information updated successfully'}), 200