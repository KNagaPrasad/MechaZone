from functools import wraps
from Database import register_db, getBrands, getModelsByBrand, addCar_item_to_cart, login_db, getCartItems, getBikeModelsByBrand, getBikeBrands

def log_function_call(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args: {args}, kwargs: {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned: {result}")
        return result
    return wrapper

def measure_execution_time(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        import time
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} took {end_time - start_time:.5f} seconds to execute")
        return result
    return wrapper

@log_function_call
@measure_execution_time
def iterative_register():
    register_request = {
        "Name": "John Doe",
        "ContactId": 1234567890,
        "Email": "john@example.com",
        "Address": "123 Main St",
        "ZipCode": "12345",
        "UserName": "john_doe",
        "Password": "password123",
    }

    registration_response = register_db(register_request)
    print(f"Registration Response: {registration_response}")

@log_function_call
@measure_execution_time
def iterative_login():
    login_request = {
        "UserName": "john_doe",
        "Password": "password123",
    }

    login_response = login_db(login_request)
    print(f"Login Response: {login_response}")

@log_function_call
@measure_execution_time
def iterative_add_to_cart():
    cart_item_request = {
        "user_id": 1,
        "s_id": 1,
    }

    cart_item_response = addCar_item_to_cart(cart_item_request)
    print(f"Add to Cart Response: {cart_item_response}")

@log_function_call
@measure_execution_time
def iterative_get_cart_items():
    cart_items_request = {
        "user_id": 1,
    }
    cart_items_response = getCartItems(cart_items_request)
    print(f"Cart Items Response: {cart_items_response}")

@log_function_call
@measure_execution_time
def iterative_get_car_brands():
    car_brands_response = getBrands({})
    print(f"Car Brands Response: {car_brands_response}")

@log_function_call
@measure_execution_time
def iterative_get_car_models_by_brand():
    car_models_request = {
        "brand": "Toyota",  
    }

    car_models_response = getModelsByBrand(car_models_request)
    print(f"Car Models Response: {car_models_response}")

@log_function_call
@measure_execution_time
def iterative_get_bike_brands():
    bike_brands_response = getBikeBrands({})
    print(f"Bike Brands Response: {bike_brands_response}")

@log_function_call
@measure_execution_time
def iterative_get_bike_models_by_brand():
    bike_models_request = {
        "brand": "Honda",  
    }

    bike_models_response = getBikeModelsByBrand(bike_models_request)
    print(f"Bike Models Response: {bike_models_response}")

if __name__ == "__main__":
    iterative_register()
    iterative_login()
    iterative_add_to_cart()
    iterative_get_cart_items()
    iterative_get_car_brands()
    iterative_get_car_models_by_brand()
    iterative_get_bike_brands()
    iterative_get_bike_models_by_brand()
