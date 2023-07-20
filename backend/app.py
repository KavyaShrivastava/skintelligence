from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
from sqlalchemy import inspect, Table, Column, Integer, Text, ForeignKey
from sqlalchemy.orm import relationship
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/kavyashrivastava/PycharmProjects/backend/skintelligence.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
app.app_context().push()

Dermatologists = db.Table('Dermatologists', db.metadata, autoload_with=db.engine)


@app.route('/dermatologists', methods=['GET'])
def get():
    results = db.session.query(Dermatologists).all()
    json_results = [dict(zip(Dermatologists.columns.keys(), row)) for row in results]
    return jsonify(json_results)


metadata = db.MetaData()

ForumPosts = Table('ForumPosts', metadata,
                   Column('id', Integer, primary_key=True),
                   Column('post_content', Text, nullable=False),
                   extend_existing=True)


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    answers = db.relationship('Answer', backref='question', lazy=True)


class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'), nullable=False)


api = Api(app)


class QuestionResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('content', type=str, required=True, help='Content is required')

    def get(self, question_id=None):
        if question_id:
            question = Question.query.filter_by(id=question_id).first()
            if question:
                return jsonify({'id': question.id, 'content': question.content})
            else:
                return jsonify({'error': 'Question not found'}, 404)
        else:
            questions = Question.query.all()
            return jsonify([{'id': question.id, 'content': question.content} for question in questions])

    def post(self):
        args = self.parser.parse_args()
        question = Question( content=args['content'])
        db.session.add(question)
        db.session.commit()
        return jsonify({'id': question.id, 'content': question.content}), 201

    def put(self, question_id):
        question = Question.query.filter_by(id=question_id).first()
        if question:
            args = self.parser.parse_args()
            question.content = args['content']
            db.session.commit()
            return {'id': question.id, 'title': question.title, 'content': question.content}
        else:
            return {'error': 'Question not found'}, 404

    def delete(self, question_id):
        question = Question.query.filter_by(id=question_id).first()
        if question:
            db.session.delete(question)
            db.session.commit()
            return {'message': 'Question deleted'}
        else:
            return {'error': 'Question not found'}, 404


api.add_resource(QuestionResource, '/add_post', '/posts')


class AnswerResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('content', type=str, required=True, help='Content is required')
    parser.add_argument('post_id', type=int, required=True, help='Question ID is required')

    def get(self, answer_id=None, post_id =None):
        if answer_id:
            answer = Answer.query.filter_by(id=answer_id).first()
            if answer:
                return {'id': answer.id, 'content': answer.content, 'post_id': answer.question_id}
            else:
                return {'error': 'Answer not found'}, 404

        elif post_id:
            answers = Answer.query.filter_by(question_id=post_id).all()
            return jsonify(
                [{'id': answer.id, 'content': answer.content, 'post_id': answer.question_id} for answer in answers])
        else:
            answers = Answer.query.all()
            return jsonify([{'id': answer.id, 'content': answer.content, 'post_id': answer.question_id} for answer in answers])

    def post(self):
        args = self.parser.parse_args()
        question = Question.query.filter_by(id=args['post_id']).first()
        if question:
            answer = Answer(content=args['content'], question_id=args['post_id'])
            db.session.add(answer)
            db.session.commit()
            return jsonify({'id': answer.id, 'content': answer.content, 'question_id': answer.question_id}), 201
        else:
            return {'error': 'Question not found'}, 404

    def put(self, answer_id):
        answer = Answer.query.filter_by(id=answer_id).first()
        if answer:
            args = self.parser.parse_args()
            answer.content = args['content']
            answer.question_id = args['post_id']
            db.session.commit()
            return jsonify({'id': answer.id, 'content': answer.content, 'post_id': answer.question_id})
        else:
            return {'error': 'Answer not found'}, 404

    def delete(self, answer_id):
        answer = Answer.query.filter_by(id=answer_id).first()
        if answer:
            db.session.delete(answer)
            db.session.commit()
            return {'message': 'Answer deleted'}
        else:
            return {'error': 'Answer not found'}, 404


api.add_resource(AnswerResource, '/add_reply', '/answers/<int:post_id>', '/answers')
engine = db.create_engine('sqlite:////Users/kavyashrivastava/PycharmProjects/backend/skintelligence.db')
db.metadata.create_all(engine)

#
# class ForumPost(db.Model):
#     __tablename__ = 'ForumPosts'
#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     post_content = db.Column(db.Text, nullable=False)
#
# @app.route('/posts')
# def get_posts():
#     posts = [
#         {'id': 1, 'text': 'This is the first post', 'replies': ["Hi this is first reply"]},
#         {'id': 2, 'text': 'This is the second post', 'replies': []},
#         {'id': 3, 'text': 'This is the third post', 'replies': []},
#     ]
#     return jsonify(posts)

# @app.route('/add_post', methods=['POST'])
# def forum():
#     post_data = request.get_json()
#     content = post_data.get('post_content')
#     post = Question(post_content=content)
#     db.session.add(post)
#     db.session.commit()
#     posts = ForumPost.query.all()
#     posts_dict = [post.__dict__ for post in posts]
#     for post in posts_dict:
#         post.pop('_sa_instance_state', None)
#     return jsonify(posts_dict)


#
# #
# #
#
# # @app.route('/')
# # def hello_world():
# #     return "Hello World"
# #
# # @app.route('/<name>')
# # def name(name):
# #     return "Hello World" + name
# #
# #


if __name__ == '__main__':
    app.run(debug=True, port = 8001)
