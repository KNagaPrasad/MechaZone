from Database import (
    addBike_item_to_cart,
    addCar_item_to_cart,
    register_db,
    login_db,
    getCartItems,
)

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

def iterative_login():
    login_request = {
        "UserName": "john_doe",
        "Password": "password123",
    }

    login_response = login_db(login_request)
    print(f"Login Response: {login_response}")

def iterative_add_to_cart():
    cart_item_request = {
        "user_id": 1,
        "s_id": 1,
    }

    cart_item_response = addCar_item_to_cart(cart_item_request)
    print(f"Add to Cart Response: {cart_item_response}")

def iterative_get_cart_items():
    cart_items_request = {
        "user_id": 1,
    }

    cart_items_response = getCartItems(cart_items_request)
    print(f"Cart Items Response: {cart_items_response}")

if _name_ == "_main_":
    iterative_register()
    iterative_login()
    iterative_add_to_cart()
    iterative_get_cart_items()