import fileinput
import os
from typing import List
import numpy as np
import pandas as pd
from PIL import Image
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from models.skin_tone.skin_tone_knn import identify_skin_tone
from flask import Flask, request, jsonify
from flask_restful import Api, Resource, reqparse, abort
from models.recommender.rec import recs_essentials
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app, resources={r"/*": {"origins": "*"}})


class_names2 = ['Low', 'Moderate', 'Severe']
skin_tone_dataset = 'models/skin_tone/skin_tone_dataset.csv'


def get_model():
    global model
    model = load_model('./models/acne_model')


def load_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img_tensor = image.img_to_array(img)
    img_tensor = np.expand_dims(img_tensor, axis=0)
    # imshow expects values in the range [0, 1]
    img_tensor /= 255.
    return img_tensor



def prediction_acne(img_path):
    new_image = load_image(img_path)
    pred2 = model.predict(new_image)
    # print(pred2)
    if len(pred2[0]) > 1:
        pred_class2 = class_names2[tf.argmax(pred2[0])]
    else:
        pred_class2 = class_names2[int(tf.round(pred2[0]))]
    return pred_class2


get_model()


rec_args = reqparse.RequestParser()

rec_args.add_argument(
    "skinTone", type=str, help="Argument required", required=True)

rec_args.add_argument(
    "skinType", type=str, help="Argument required", required=True)

rec_args.add_argument(
    "acneType", type=str, help="Argument required", required=True)

rec_args.add_argument("features", type=dict,
                      help="Argument required", required=True)


@app.route("/", methods=['GET', 'POST'])
def home():
    return " "


def skin_tone_group(skin_tone):
    if skin_tone <= '3':
        skin_tone = 'fair to light'
    elif skin_tone > '3' and skin_tone < '5' :
        skin_tone = 'light to medium'
    else:
        skin_tone = ' medium to dark'
    return skin_tone


@app.route("/predict", methods = ['GET', 'POST'])
def predict():
    if request.method == 'POST':
        file = request.files['image']
        filename = file.filename
        file_path = os.path.join("./static", filename)
        file.save(file_path)
        acne_type = prediction_acne(file_path)
        skin_tone = identify_skin_tone(file_path, dataset=skin_tone_dataset)
        skin_tone_new = skin_tone_group(skin_tone)
        print(acne_type, skin_tone)
        return jsonify({
            'acne_type': acne_type,
            'skin_tone': skin_tone_new,
        }), 200


@app.route("/recommend", methods = ['GET', 'POST'])
def recommend():
    if request.method == 'POST':
        data = request.get_json()  # Retrieve data from request body
        skin_type = data['skinType']
        acne_type = data['acneType']
        features = data['features']

        # Define the list of all possible skin types, acne types, and features
        all_options = ['normal', 'dry', 'oily', 'combination', 'acne', 'sensitive', 'fine lines', 'wrinkles', 'redness',
                       'dull', 'pore', 'pigmentation', 'blackheads', 'whiteheads', 'blemishes', 'dark circles',
                       'eye bags', 'dark spots']

        # Create a dictionary with all possible options initialized to 0
        selections = {option: 0 for option in all_options}

        if acne_type == 'Moderate' or acne_type == 'Severe':
            selections['acne'] = 1

        # Set the values of the user-selected options to 1
        selections[skin_type] = 1
        for feature in features:
            selections[feature] = 1

        print(selections)

        fv = []
        for key, value in selections.items():
            fv.append(int(value))

        general = recs_essentials(fv, None)
        print(general)
        return jsonify(general)


if __name__ == "__main__":
    app.run(debug=False, port=8000)

