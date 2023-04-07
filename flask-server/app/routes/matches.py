
from flask import Blueprint

bp = Blueprint('matches', __name__, url_prefix='/matches')

@bp.route('/')
def main():
  return 'matches timeline backend'