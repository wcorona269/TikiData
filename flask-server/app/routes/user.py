from flask import Blueprint, jsonify
from ..models import db, User

bp = Blueprint('users', __name__, url_prefix='/users')

@bp.route('/info/<username>', methods=['GET'])
def get_user_info(username):
  result, user = User.get_user_info(username)
  if result == True:
    return jsonify({
			'message': 'User info fetched successfully',
			'user': user
		}), 200
  else:
    return jsonify({
			'message': 'Invalid request data'
		}), 404