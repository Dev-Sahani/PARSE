from flask import Flask, jsonify, request
from flask_cors import CORS
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.remote.webelement import WebElement

# Configuration class
class Config:
    def __init__(self):
        self.wait_time = 10
        self.implicit_time = 10
        self.start_time = 10

# Utility class for common functions
class Utils:
    def __init__(self) -> None:
        self.config = Config()
    
    def remove_modal(self, driver: webdriver.Chrome, modalBy: By, modalPath: str, closeButtonBy: By, closeButtonPath: str, time: float):
        try:
            WebDriverWait(driver, time).until(
                EC.presence_of_element_located((modalBy, modalPath))
            )
            btn = WebDriverWait(driver, time).until(
                EC.element_to_be_clickable((closeButtonBy, closeButtonPath))
            )
            btn.click()
        except TimeoutException:
            print("Element with locator not found after waiting.")
            return None 

    def wait(self, driver: webdriver.Chrome, by: By, path: str, time: float) -> WebElement:
        el = WebDriverWait(driver, time).until(
            EC.presence_of_element_located((by, path))
        )
        return el

# Flipkart scraper class
class FlipkartScraper:
    def __init__(self):
        self.util = Utils()
        self.baseUrl = "https://www.flipkart.com/"
        self.config = Config()
        
        options = webdriver.ChromeOptions()
        options.add_argument("--headless")
        options.add_argument("--disable-gpu")
        options.add_argument("--disable-extensions")
        options.add_argument("--incognito")
        options.add_argument("--disable-notifications")
        options.add_argument("--start-maximized")
        options.add_argument("--ignore-certificate-errors")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--no-sandbox")
        options.add_argument("--log-level=3")
        self.driver = webdriver.Chrome(options=options)
        self.driver.set_window_size(1200, 640)
        self.driver.implicitly_wait(10)

    def get_to_website(self, productName):
        self.driver.get(self.baseUrl + "search?q=" + '+'.join(productName.split(' ')))
    
    def get_to_product_page(self, productName: str):
        productNameLowerCase = productName.lower()
        firstProductPath = "(//a[contains(translate(@title, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '" + productNameLowerCase + "')])[1]"
        el = self.util.wait(self.driver, By.XPATH, firstProductPath, self.config.wait_time)
        productPageurl = el.get_attribute("href")
        self.driver.get(productPageurl)

        ratingDivPath = "//*[contains(text(), '★')]//preceding-sibling::div"
        ratingDiv = self.util.wait(self.driver, By.XPATH, ratingDivPath, self.config.start_time)
        
        return ratingDiv.text

# Amazon scraper class
class AmazonScraper:
    def __init__(self):
        self.util = Utils()
        self.baseUrl = "https://www.amazon.in/"
        self.config = Config()
        
        options = webdriver.ChromeOptions()
        options.add_argument("--headless")
        options.add_argument("--disable-gpu")
        options.add_argument("--disable-extensions")
        options.add_argument("--incognito")
        options.add_argument("--disable-notifications")
        options.add_argument("--start-maximized")
        options.add_argument("--ignore-certificate-errors")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--no-sandbox")
        options.add_argument("--log-level=3")
        self.driver = webdriver.Chrome(options=options)
        self.driver.set_window_size(1224, 650)
        self.driver.implicitly_wait(self.config.implicit_time)

    def get_to_website(self, productName: str):
        self.driver.get(self.baseUrl + "s?k=" + '+'.join(productName.split(' ')))
    
    def get_to_product_page(self, productName: str):
        productNameLowerCase = productName.lower()
        firstProductPath = "(//a[contains(translate(string(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '" + productNameLowerCase + "')])[1]"
        el = self.util.wait(self.driver, By.XPATH, firstProductPath, self.config.wait_time)
        productPageurl = el.get_attribute("href")
        self.driver.get(productPageurl)

        ratingDivPath = "//span[@data-hook='rating-out-of-text']"
        ratingDiv = self.util.wait(self.driver, By.XPATH, ratingDivPath, self.config.start_time)
        return ratingDiv.text
    
    def get_ai_review(self, productName):
        reviewDivPath = "//div/h3[contains(text(), 'Customers say')]//parent::div//following-sibling::p/span"
        reviewDiv = self.util.wait(self.driver, By.XPATH, reviewDivPath, self.config.start_time)
        return reviewDiv.text

# Initialize Flask application
app = Flask(__name__)
CORS(app)  # This will allow CORS for all routes

# Route for Flipkart scraper
@app.route('/scrape_flipkart', methods=['GET'])
def scrape_flipkart():
    product = request.args.get('product')
    scraper = FlipkartScraper()
    scraper.get_to_website(product)
    ratings = scraper.get_to_product_page(product)
    return jsonify({"product": product, "ratings": ratings})

# Route for Amazon scraper
@app.route('/scrape_amazon', methods=['GET'])
def scrape_amazon():
    product = request.args.get('product')
    scraper = AmazonScraper()
    scraper.get_to_website(product)
    ratings = scraper.get_to_product_page(product)
    review = scraper.get_ai_review(product)
    return jsonify({"product": product, "ratings": ratings, "review": review})

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
