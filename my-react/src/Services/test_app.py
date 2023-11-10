import pytest
from Api import app
from Database import (
    register_db,
    login_db,
    getAllBikesFrom_db,
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

def test_get_bike_spares():
    with app.test_client() as client:
        response = client.post('/getBikeSpares', json={'bikeId': 1})
        assert response.status_code == 200

def test_get_bikes():
    with app.test_client() as client:
        response = client.get('/bike')
        assert response.status_code == 200   

def test_get_car_spares():
    with app.test_client() as client:
        response = client.post('/getCarSpares', json={'carId': 1})
        assert response.status_code == 200

def test_add_to_cart_items():
    with app.test_client() as client:
        cart_item_data = {
            "user_id": 1,
            "s_id": 1
        }
        response = client.post('/addToCart', json=cart_item_data)
        assert response.status_code == 200
        assert response.json['issuccess'] is True 

def test_display_total():
    with app.test_client() as client:
        cart_data = {
            "user_id": 1
        }
        response = client.post('/prepareShoppingCart', json=cart_data)
        assert response.status_code == 200
        assert 'shoppingCart' in response.json 

# def test_get_spare_part_amount():
#     with app.test_client() as client:
#         spare_ids = [1, 2, 3]  # Replace with valid spare part IDs
#         response = client.post('/getSparePartAmount', json={'s_ids': spare_ids})
#         assert response.status_code == 200
#         assert 'totalPrice' in response.json
#         assert 'spareParts' in response.json  
# 
                    
# def test_display_discount():
#     with app.test_client() as client:
#         cart_data = {
#             "user_id": 1
#         }
#         response = client.post('/prepareShoppingCart', json=cart_data)
#         assert response.status_code == 200
#         assert 'shoppingCart' in response.json
#         assert 'discount' in response.json

# def test_display_delivery_type():
#     with app.test_client() as client:
#         cart_data = {
#             "user_id": 1
#         }
#         response = client.post('/prepareShoppingCart', json=cart_data)
#         assert response.status_code == 200
#         assert 'shoppingCart' in response.json
#         assert 'delivery_type' in response.json

def test_choose_delivery_type():
    with app.test_client() as client:
        delivery_data = {
            "cart_id": 1,
            "user_id": 1,
            "delivery_type": "Home"  # Replace with a valid delivery type
        }
        response = client.post('/deliveryType', json=delivery_data)
        assert response.status_code == 200
        assert response.json['issuccess'] is True

def test_display_car_spares():
    with app.test_client() as client:
        response = client.post('/getCarSpares', json={'carId': 1})
        assert response.status_code == 200        