from flask import Flask, request, jsonify
import os
from flask_cors import CORS
from unstract.llmwhisperer.client import LLMWhispererClient, LLMWhispererClientException
import requests
from dotenv import load_dotenv

load_dotenv()

whisperer_api_key = os.getenv("whisperer_api_key")
app = Flask(__name__)
CORS(app)

# Configure the upload directory
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if the post request has the file part
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']

    # If the user does not select a file
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and file.filename.endswith('.pdf'):
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filepath)

        client = LLMWhispererClient(
            base_url="https://llmwhisperer-api.unstract.com/v1", 
            api_key=whisperer_api_key
        )
        try:
            result = client.whisper(
                file_path=filepath, 
                output_mode="text"
            )
            extracted_text = result["extracted_text"]
        except LLMWhispererClientException as e:
            print(e)
            extracted_text = None
        
        return jsonify({
            'message': 'File uploaded successfully', 
            "extracted_text": extracted_text
        }), 200
    else:
        return jsonify({'error': 'Invalid file type, only PDFs are allowed'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001)
