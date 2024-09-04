from flask import Flask, request, jsonify
from flask_cors import CORS
import anthropic
import os
from dotenv import load_dotenv
import os,json


load_dotenv()

# Now you can access environment variables using os.getenv
api_key = os.getenv("ANTHROPIC_API_KEY")
app = Flask(__name__)
CORS(app)  # Allow CORS
client = anthropic.Anthropic(api_key=api_key)
# Define your endpoint
@app.route('/process', methods=['POST'])
def process_data():
    data = request.json.get('data','')  # Extract the data from the request
    attributes ='''Product Name: The name or title of the product being evaluated.
Category: The main group or classification under which the product falls (e.g., Electronics, Home & Kitchen).
Sub-category: A more specific classification within the main category (e.g., Laptops, Cookware).
Price: The retail price of the product.
Rating: The average user rating of the product, often on a scale from 1 to 5.
No. rating: The total number of user ratings or reviews the product has received.
Discount: The percentage or amount by which the product's price has been reduced.
Marketing Spend: The amount of money spent on promoting the product.
Supply Chain Efficiency: A measure of how effectively the product's supply chain operates, often expressed as a percentage.
Sales_y: The total number of units sold over one year.
Sales_m: The total number of units sold over one month.
Market Trends: Current patterns or tendencies in the market that could influence the product's performance.
Seasonality Trends: Fluctuations in product sales or demand related to specific seasons or times of the year.'''
    format_ =""" {"Product Name": "Category": "Home & Kitchen/Sports & Outdoors/Beauty & Health/
       Electronics/Fashion"(use only out of these) "Sub_category": "Cookware/Outdoor Gear/ Makeup/ Appliances/ Furniture/
       Haircare/ Fitness Equipment/ Smartphones/ Tablets/
       Accessories/ Clothing/ Cameras/ Laptops/ Footwear/(use only out of these)
       Skincare", "Price": , "Rating": , "No_rating": , "Discount": , "M_Spend" 1000 - 10000: , "Supply_Chain_E" "50.0 - 99.9: , "Sales_y": , "Sales_m": , "Market_T":-5.0 - 5.0 , "Seasonality_T" : -10.0 - 10, "Completeness percentage": "x%"}"""

    # Compose the message
    prompt = f"i have this text which contains data i want you check weather this contains all the arributes mentioned in  attribues and generate a complenteness precentage if not return message empty json object along with completeness precentage else if the data has all attributes convert in to the given format and only fill the attributes and return the json format and completeness percentage don't return anything else only return the attributes in specified format data and completeness percentage don't add any special characres like line space or  data ,attributes and format are present at the end of message {data}{attributes}{format_}. If possible please output the data in pure json format in any condition."

    # Make a request to Anthropic's Claude model
    message = client.messages.create(
        model="claude-3-5-sonnet-20240620",
        max_tokens=1024,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    if isinstance(message.content, str):
        json_content = message.content
    else:
        json_content = str(message.content)
    # Return the processed message in JSON format
    return jsonify({"result": json_content})

if __name__ == '__main__':
    app.run(debug=True)
