from flask import Blueprint, request, jsonify
from ..models.repost_model import Repost


bp = Blueprint('reposts', __name__, url_prefix='/reposts')

bp.route('/create', methods=['POST'])
def create_repost():
  data = request.json
  user_id = data('user_id')
  post_id = data('post_id')
  
  if not user_id or not post_id:
    return jsonify({
      'message': 'Invalid request data.'
      }), 400
  
  repost = Repost.add_repost(user_id, post_id)
  if repost == True:
    return jsonify({
      'message': 'Repost created successfully'
		}), 200
  else:
    return jsonify({
			'message': 'Repost creation failed'
		}), 401


@bp.route('/delete/<id>', methods=['DELETE'])
def delete_repost(id):
  result = Repost.delete_repost(id)
  
  if result == True:
    return jsonify({
			'message': 'Repost deleted successfully'
		}), 200
  else:
    return jsonify({
			'message': 'Repost deletion failed - Invalid request'
		}), 401


@bp.route('/fetch/all/<userId>', methods=['GET'])
def get_user_reposts(userId):
  user_reposts = Repost.query.filter_by(user_id=userId).all()
  reposts_data = [repost.to_dict() for repost in user_reposts],
  if user_reposts:
    return jsonify({
			'message': 'Posts fetched successfully',
			'reposts': reposts_data
		}), 200
  else:
    return jsonify({
			'message': 'Posts fetch failed'
		}), 401


@bp.route('/fetch/one/<id>', methods=['GET'])
def fetch_repost(id):
  repost = Repost.query.get(id)
  repost_data = repost.to_dict()
  if repost_data:
    return jsonify({
			'message': 'Repost found sucessfully',
			'repost': repost_data
		}), 200
  else:
    return jsonify({
			'message': 'Repost not found'
		}), 404