from flask import Blueprint, redirect

bp = Blueprint('news', __name__, url_prefix='/news')

@bp.route('/')
def fetchNews():
  return 'news timeline'
