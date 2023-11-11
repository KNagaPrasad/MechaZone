from Database import register_db, getAllCarsFrom_db, getAllSparesForCars, getBrandModelCarParts, getBrands, getModelsByBrand
from flask import Flask, jsonify

app = Flask(__name__)

class DecorativeAPI:
    @staticmethod
    def register_user(req):
        with app.app_context():
            return jsonify(register_db(req))

    @staticmethod
    def get_car_spares(req):
        with app.app_context():
            return jsonify(getAllSparesForCars(req))

    @staticmethod
    def get_brand_model_car_parts(req):
        with app.app_context():
            return jsonify(getBrandModelCarParts(req))

    @staticmethod
    def get_bike_spares(req):
        with app.app_context():
            return jsonify({"message": "Get Bike Spares functionality not implemented yet."})

    @staticmethod
    def get_brand_model_bike_parts(req):
        with app.app_context():
            return jsonify({"message": "Get Brand Model Bike Parts functionality not implemented yet."})

decorative_api = DecorativeAPI()

register_request = {
    "Name": "John Doe",
    "ContactId": 1234567890,
    "Email": "john.doe@example.com",
    "Address": "123 Main St",
    "ZipCode": "12345",
    "UserName": "johndoe",
    "Password": "password123"
}
registration_response = decorative_api.register_user(register_request)
print("Registration Response:", registration_response)

car_spares_request = {"carId": 1}
car_spares_response = decorative_api.get_car_spares(car_spares_request)
print("Car Spares Response:", car_spares_response)

brand_model_car_parts_request = {"brand": "Toyota", "model": "Camry"}
brand_model_car_parts_response = decorative_api.get_brand_model_car_parts(brand_model_car_parts_request)
print("Brand Model Car Parts Response:", brand_model_car_parts_response)

bike_spares_request = {"bikeId": 1}
bike_spares_response = decorative_api.get_bike_spares(bike_spares_request)
print("Bike Spares Response:", bike_spares_response)

brand_model_bike_parts_request = {"brand": "Harley", "model": "Street 750"}
brand_model_bike_parts_response = decorative_api.get_brand_model_bike_parts(brand_model_bike_parts_request)
print("Brand Model Bike Parts Response:", brand_model_bike_parts_response)
