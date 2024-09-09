from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestRegressor
import joblib

app = Flask(__name__)
CORS(app)

# Load the trained model and other artifacts
model = joblib.load('random_forest_model.pkl')
scaler = joblib.load('scaler.pkl')
label_encoders = joblib.load('label_encoders.pkl')

def encode_category(value, encoder):
    if value in encoder.classes_:
        return encoder.transform([value])[0]
    else:
        raise ValueError(f"Category '{value}' not found in encoder classes.")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json

        # Prepare input data for prediction
        new_product = {
            'Category': encode_category(data['Category'], label_encoders['Category']),
            'Sub_category': encode_category(data['Sub_category'], label_encoders['Sub_category']),
            'Price': data['Price'],
            'Rating': data['Rating'],
            'No_rating': data['No_rating'],
            'Discount': data['Discount'],
            'M_Spend': data['M_Spend'],
            'Supply_Chain_E': data['Supply_Chain_E'],
            'Sales_y': data['Sales_y'],
            'Sales_m': data['Sales_m'],
            'Market_T': data['Market_T'],
            'Seasonality_T': data['Seasonality_T']
        }

        new_product_df = pd.DataFrame([new_product])
        new_product_scaled = scaler.transform(new_product_df)
        success_percentage_pred = model.predict(new_product_scaled)

        return jsonify({'predicted_success_percentage': success_percentage_pred[0]})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
