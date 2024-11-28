import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")
db = client["maia_chatbot"]
sessions_collection = db['chatbot_session']

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

# Providing safety guidelines
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
        f"""
Your name is Maia, a Muslim therapist AI specialising in helping Muslims understand and connect with their emotions while growing closer to Allah (SWT). 
Ask thought-provoking questions to uncover the root causes of their issues or celebrate their good news. 
Use Quranic verses, Hadith, and stories of the Sahabah that are relevant to the user's emotions. Be empathetic yet firm, offering advice where possible. 
Only use authentic Islamic sources. Keep your responses concise.

Once you understand the user's emotions, their level of severity (extremely, moderately, or slightly), and the task at hand, immediately share a relevant Hadith or Quranic verse that resonates with their current feelings. 
Then, ask the user if they are comfortable sharing more information to further explore their emotions.
"""
    ),
)

chat = model.start_chat()

@app.route("/api/chat", methods=["GET", "POST"])
def get_bot_response():
    try:
        if request.method == "GET":
            # Extract query parameters from GET request
            user_text = request.args.get('msg', '')
            selected_emotions = request.args.get('selectedEmotions', '')  
            selected_activity = request.args.get('selectedActivity', '')  
            selected_feedback_value = request.args.get('selectedFeedbackValue', '')  
            
        elif request.method == "POST":
           
            data = request.get_json()
            print("Incoming data:", data)  
            user_text = data.get("message", '')
            selected_emotions = data.get("selectedEmotions", '')  
            selected_activity = data.get("selectedActivity", '')  
            selected_feedback_value = data.get("selectedFeedbackValue", '')  

        # combine the emotion, activity, severity, and user message into a single prompt
        severity_level = ""
        if selected_feedback_value in ('veryBad', 'bad'):
            severity_level = 'extremely'
        elif selected_feedback_value  in ('neutral'):
            severity_level = 'moderately'
        else:
            severity_level = 'slightly'
        combined_prompt = f"User is feeling {severity_level} {selected_emotions}. They are doing {selected_activity} today. {user_text}"

        # Send the combined message to the chatbot
        response = chat.send_message(combined_prompt)
        return jsonify({"bot_response": response.text})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"bot_response": "An error occurred."}), 500
 

if __name__ == "__main__":
    app.run(debug=True)
