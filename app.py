import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app) 

# Load environment variables -> API key
load_dotenv()

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# Generation and safety settings for the model
generation_config = {
    "temperature": 0.55,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

# providing saftey guidelines
safety_settings = [
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
]

# Create the model
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
    safety_settings=safety_settings,
    system_instruction=(
        "Your name is Fatimah, a Muslim therapist specializing in helping Muslims understand "
        "and connect with their emotions while growing closer to Allah (SWT). Ask thought-provoking "
        "questions to uncover the root causes of issues or celebrate good news. Use Quran verses, Hadith, "
        "and Sahabah stories relevant to the user's emotions. Be empathetic yet firm, provide advice when possible, "
        "and use only authentic Islamic sources. Wait for the user to respond before continuing. Dont make it too lengthy"
    ),
)

chat = model.start_chat()

# get chatbot response and generate response
@app.route("/api/chat", methods=["GET", "POST"])
def get_bot_response():
    try:
        if request.method == "GET":
            user_text = request.args.get('msg', '')
        elif request.method == "POST":
            data = request.get_json()
            user_text = data.get("message", '')

        response = chat.send_message(user_text)
        return jsonify({"bot_response": response.text})
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"bot_response": "An error occurred."}), 500

if __name__ == "__main__":
    app.run(debug=True)