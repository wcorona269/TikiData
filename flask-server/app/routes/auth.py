from flask import Blueprint, request, jsonify
from ..models import db, User
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
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

    if not username or not email or not password:
        return jsonify({'message': 'Missing required fields'}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({'message': 'Username already exists'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already exists'}), 400

    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201


@bp.route('/login', methods=['POST'])
def login():
    # JSONify the request
    data = request.json
    
    # extract email and password
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({
            'message': 'Missing required fields'
            }), 400

    user = User.query.filter_by(email=email).first()
    
    if not user or not user.check_password(password):
        return jsonify({
            'message': 'Invalid email or password'
            }), 401
    
    # Generate and return JWT token for authenticated user
    expires = timedelta(hours=1)  # Set the expiration time to 1 hour
    access_token = create_access_token(identity=user.id, expires_delta=expires)
    
    return jsonify({
        'message': 'User authenticated successfully',
        'access_token': access_token,
        'username': user.username
    }), 200

@bp.route('/logout', methods=['POST'])
def logout():
    data = request.json # JSONify request
    
    # extract JWT token and store it as a revoked token. This way, it cannot be reused
    access_token = data.get('access_token')
    
    if access_token != 'null':
        revoked_tokens.add(access_token)
    
    return jsonify({
        'message': 'User Logged Out Successfully',
    })
    

@bp.route('/update', methods=['PUT'])
@jwt_required()  # Requires authentication with a valid JWT token
def update_user():
    current_user_id = get_jwt_identity()
    data = request.json

    # Check if the user exists
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({'message': 'User not found'}), 404

    # Update the user's information based on the data provided in the request
    if 'username' in data:
        new_username = data['username']
        user.username = new_username

    if 'password' in data:
        new_password = data['password']
        user.set_password(new_password)

    # Commit the changes to the database
    db.session.commit()

    return jsonify({'message': 'User information updated successfully'})
