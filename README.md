# Introduction
This project aims to develop an AI-based recommender system that detects acne grading through a Convolutional Neural Network (CNN) model implemented in Keras. Additionally, it employs image segmentation in OpenCV to detect skin tone. The system provides personalized product recommendations based on users' skin analysis results. The front-end is built using React, while the back-end is developed using Flask. The application also includes a social forum where users can interact with each other and access a list of dermatologists for expert advice.

Note: This system is currently in production, and while the recommended products are returned as a JSON object, they are not displayed in the user interface.

# Features 
Acne Grading Detection: The system utilizes a CNN model in Keras to accurately detect and grade acne from input images, providing users with valuable information about their skin condition.

Skin Tone Segmentation: By leveraging image segmentation techniques in OpenCV, the system identifies skin tones to further tailor product recommendations based on individual skin characteristics.

Personalized Product Recommendations: After analyzing the user's skin condition and tone, the system recommends suitable skincare products tailored to their specific needs.

Social Forum: Users can participate in a social forum to discuss skincare tips, share experiences, and seek advice from others in the community.

Dermatologist Directory: The application offers a curated list of dermatologists, empowering users to connect with skincare experts for professional guidance.

Front-End in React: The user-friendly front-end is developed using React, ensuring an intuitive and responsive user interface.

Back-End in Flask: The Flask back-end facilitates seamless communication between the front-end and machine learning models, delivering efficient and timely results.

# Running the Application
To run the Acne Grading and Skin Tone Recommender System, follow these steps:

Start the ML Backend Server: Launch the server running the machine learning models for acne grading and skin tone detection.

Start the Backend for Web Development: Run the Flask backend server responsible for handling data requests and interactions with the machine learning models.

Start the Frontend Server: Initiate the React front-end server to provide users access to the application's interface.

Note: Since the ML backend and the backend for web development run on different servers, both need to be up and running for the application to function correctly.


# Future Improvements
Display Recommended Products: In the future, the application will be updated to display the recommended skincare products to users for a more comprehensive user experience.

Enhanced User Interaction: Continuously improve the social forum to foster meaningful interactions between users and facilitate knowledge sharing.

Real-Time Communication: Implement real-time communication features to allow users to connect directly with dermatologists for immediate assistance.

Scalability and Performance: As the user base grows, the system will be optimized for scalability and performance to handle increasing traffic and user demands.


