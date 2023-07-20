"""
To classify the input skin into one of the 6 skin tones
"""
import pandas as pd
import os
from sklearn.neighbors import KNeighborsClassifier
from models.skin_tone.skin_detection import skin_detection

def identify_skin_tone(image_path, dataset):
    #cropped_image_path = crop_face(image_path)
    mean_color_values = skin_detection(image_path)
    print(mean_color_values)
    df = pd.read_csv(dataset)
    X = df.iloc[:, [1, 2, 3]].values
    y = df.iloc[:, 0].values

    classifier = KNeighborsClassifier(n_neighbors=6, metric='minkowski', p=2)
    classifier.fit(X, y)

    X_test = [mean_color_values]
    y_pred = classifier.predict(X_test)
    return str(y_pred[0])

