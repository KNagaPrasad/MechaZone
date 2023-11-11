from Database import getAllCarsFrom_db, getBrands, getModelsByBrand
from flask import Flask, jsonify

app = Flask(__name__)

class DecorativeAPI:
    @staticmethod
    def get_all_cars():
        with app.app_context():
            return jsonify(getAllCarsFrom_db())

    @staticmethod
    def get_models_by_brand(req):
        with app.app_context():
            return jsonify(getModelsByBrand(req))

    @staticmethod
    def get_brands(req):
        with app.app_context():
            return jsonify(getBrands(req))


if __name__ == "_main_":
    decorative_api = DecorativeAPI()

    # Get all cars
    all_cars_response = decorative_api.get_all_cars()
    print("All Cars Response:", all_cars_response)

    # Get models by brand
    models_by_brand_request = {"brand": "Toyota"}
    models_by_brand_response = decorative_api.get_models_by_brand(models_by_brand_request)
    print("Models by Brand Response:", models_by_brand_response)

    # Get brands
    brands_request = {"brand": "Toy"}
    brands_response = decorative_api.get_brands(brands_request)
    print("Brands Response:", brands_response)