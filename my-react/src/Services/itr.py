from Database import getBikeBrands, getBikeModelsByBrand
from Database import getBrands, getModelsByBrand

def iterative_get_bike_brands():
    bike_brands_response = getBikeBrands({})
    print(f"Bike Brands Response: {bike_brands_response}")

def iterative_get_bike_models_by_brand():
    bike_models_request = {
        "brand": "Honda", 
    }

    bike_models_response = getBikeModelsByBrand(bike_models_request)
    print(f"Bike Models Response: {bike_models_response}")


def iterative_get_car_brands():
    car_brands_response = getBrands({})
    print(f"Car Brands Response: {car_brands_response}")

def iterative_get_car_models_by_brand():
    car_models_request = {
        "brand": "Toyota",
    }

    car_models_response = getModelsByBrand(car_models_request)
    print(f"Car Models Response: {car_models_response}")

if __name__ == "_main_":
    iterative_get_car_brands()
    iterative_get_car_models_by_brand()
    iterative_get_bike_brands()
    iterative_get_bike_models_by_brand()