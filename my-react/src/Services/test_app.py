import pytest
from Api import app
from Database import (
    register_db,
    login_db,
    getAllBikesFrom_db,
    getAllSparesForBikes,
    getAllCarsFrom_db,
    getAllSparesForCars,
    getAllSparesForBikes
)

@pytest.fixture
def client():
    app.config['TESTING'] = True
    client = app.test_client()

    yield client

def test_login_invalid_credentials(client):
    response = client.post('/login', json={'UserName': 'invaliduser', 'Password': 'invalidpassword'})
    assert response.status_code == 200
    assert 'userId' not in response.json
    
def test_register_user(client):
    user_data = {
        "Name": "Test User",
        "ContactId": "1234567890",
        "Email": "test@gmail.com",
        "Address": "123 Test St",
        "ZipCode": "12345",
        "UserName": "testuser",
        "Password": "testpassword"
    }
    response = client.post('/register', json=user_data)
    assert response.status_code == 200
    assert response.json['issuccess'] is True

def test_login(client):
    user_data = {
        "Name": "Test User",
        "ContactId": "1234567890",
        "Email": "test@example.com",
        "Address": "123 Test St",
        "ZipCode": "12345",
        "UserName": "testuser",
        "Password": "testpassword"
    }
    register_db(user_data)  # Register the user first
    response = client.post('/login', json={'UserName': 'testuser', 'Password': 'testpassword'})
    assert response.status_code == 200
    assert 'userId' in response.json

def test_login_successful(client):
    response = client.post('/login', json={'UserName': 'testuser', 'Password': 'testpassword'})
    assert response.status_code == 200
    assert 'userId' in response.json

def test_get_bike_spares():
    with app.test_client() as client:
        response = client.post('/getBikeSpares', json={'bikeId': 1})
        assert response.status_code == 200

def test_get_bikes():
    with app.test_client() as client:
        response = client.get('/bike')
        assert response.status_code == 200
        assert isinstance(response.json, list) 

def test_get_all_cars(client):
    response = client.get('/car')
    assert response.status_code == 200
    assert isinstance(response.json, list)

def test_get_car_spares():
    with app.test_client() as client:
        response = client.post('/getCarSpares', json={'carId': 1})

# def test_add_to_cart_items():
#     with app.test_client() as client:
#         cart_item_data = {
#             "user_id": 1,
#             "s_id": 1
#         }
#         response = client.post('/addToCart', json=cart_item_data)
#         assert response.status_code == 200
#         assert response.json['issuccess'] is True 

# def test_get_bike_brands(client):
#     response = client.post('/getBikeBrands', json={'brand': 'Hon'})
#     assert response.status_code == 200
#     assert isinstance(response.json, list)
#     assert 'Honda' in response.json
    
# def test_display_total():
#     with app.test_client() as client:
#         cart_data = {
#             "user_id": 1
#         }
#         response = client.post('/prepareShoppingCart', json=cart_data)
#         assert response.status_code == 200
#         assert 'shoppingCart' in response.json

# def test_display_shopping_cart_amount():
#     with app.test_client() as client:
#         user_id = 13
#         cart_data = {
#             "user_id": user_id
#         }
#         response = client.post('/prepareShoppingCart', json=cart_data)
#         assert response.status_code == 200
#         assert 'shoppingCart' in response.json
#         shopping_cart = response.json['shoppingCart']
#         assert 'amount' in shopping_cart
#         assert shopping_cart['amount'] >= 0 

def test_choose_delivery_type():
    with app.test_client() as client:
        delivery_data = {
            "cart_id": 1,
            "user_id": 1,
            "delivery_type": "Home" 
        }
        response = client.post('/deliveryType', json=delivery_data)
        assert response.status_code == 200
        assert response.json['issuccess'] is True

# def test_display_discount():
#     with app.test_client() as client:
#         cart_data = {
#             "user_id": 1
#         }
#         response = client.post('/prepareShoppingCart', json=cart_data)
#         assert response.status_code == 200
#         assert 'shoppingCart' in response.json
#         shopping_cart = response.json['shoppingCart']
#         assert 'discount' in shopping_cart

# def test_get_car_brands(client):
#     response = client.post('/getBrands', json={'brand': 'Toyo'})
#     assert response.status_code == 200
#     assert isinstance(response.json, list)
#     assert 'Toyota' in response.json    

# def test_get_bike_brands(client):
#     response = client.post('/getBikeBrands', json={'brand': 'Hon'})
#     assert response.status_code == 200
#     assert isinstance(response.json, list)
#     assert 'Honda' in response.json
        
# def test_get_bike_models_by_brand(client):
#     response = client.post('/getBikeModelsByBrand', json={'brand': 'Honda'})
#     assert response.status_code == 200
#     assert isinstance(response.json, list)
#     assert 'CBR1000RR' in response.json 
