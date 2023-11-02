from flask import Blueprint, request, jsonify
from ..models.repost_model import Repost
from sqlalchemy import desc

bp = Blueprint('repost', __name__, url_prefix='/reposts')

@bp.route('/create', methods=['POST'])
def create_repost():
  data = request.json
  user_id = data.get('user_id')
  post_id = data.get('post_id')
  
  
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


@bp.route('/delete', methods=['DELETE'])
def delete_repost():
  print('hello')
  data = request.get_json()
  user_id = data.get('user_id')
  post_id = data.get('post_id')

  if not user_id or not post_id:
    return jsonify({
        'message': 'Invalid request data.'
    }), 400
  
  result = Repost.delete_repost(user_id=user_id, post_id=post_id)
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
			'message': 'No reposts found'
		}), 401

@bp.route('/index', methods=['GET'])
def get_all_reposts():
  page = request.args.get('page', 1, type=int)
  per_page = request.args.get('per_page', 15, type=int)

  reposts = Repost.query.order_by(Repost.created_at.desc()).paginate(
      page=page, per_page=per_page, error_out=False
  )
  
  if not reposts.items:
    return jsonify({'message': 'no posts found'}), 404
  
  reposts_data = [repost.to_dict() for repost in reposts.items],
  
  if reposts:
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