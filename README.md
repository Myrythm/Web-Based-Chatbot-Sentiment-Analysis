# Web-Based Chatbot Sentiment Analysis

This is a simple web application that analyzes user input text and responds with a sentiment-based message. The application uses a Flask backend to communicate with a Hugging Face sentiment analysis model and a frontend built with HTML, CSS, and JavaScript.

## Features

- Analyzes user input text and classifies it into positive, neutral, or negative sentiment.
- Provides a predefined response based on the sentiment of the user input.
- Interactive chat interface that mimics a conversation with a chatbot.

## Prerequisites

- Python 3.x
- Flask
- requests
- Flask-CORS

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Myrythm/Web-Based-Chatbot-Sentiment-Analysis.git
    cd Web-Based-Chatbot-Sentiment-Analysis
    ```

2. Install the required Python packages:

    ```bash
    pip install flask requests flask-cors
    ```

3. Run the Flask application:

    ```bash
    python app.py
    ```

4. Open `index.html` in your web browser to interact with the chatbot.

## File Structure

- `app.py`: The Flask backend application.
- `script.js`: JavaScript file to handle frontend interactions.
- `styles.css`: CSS file to style the frontend interface.
- `index.html`: HTML file for the frontend interface.

## Code Explanation

### app.py

This file contains the backend code for the Flask application.

- The `query` function sends a request to the Hugging Face API to get the sentiment analysis result.
- The `get_random_response` function returns a predefined response based on the sentiment.
- The `/analyze` endpoint receives a POST request with user input and returns a sentiment-based response.
- The `warm_up` function sends a dummy request to warm up the model before the application starts.

### script.js

This file contains the JavaScript code for handling frontend interactions.

- Listens for the `Enter` key press to send the message.
- Sends a POST request to the Flask backend with the user input text.
- Displays the user message and the chatbot response in the chat interface.

## Example Usage

1. Open `index.html` in your web browser.
2. Type a message in the input box and press `Enter` or click the `Kirim` button.
3. The chatbot will analyze the sentiment of your message and respond accordingly.

## Screenshots
![Screenshot 2024-06-26 214529](https://github.com/Myrythm/Web-Based-Chatbot-Sentiment-Analysis/assets/87670901/86d3c942-a29d-42b7-9a2b-211e1e884664)



