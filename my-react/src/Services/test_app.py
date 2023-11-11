       
import pytest
import uuid  
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

def generate_unique_username():
   
    return f"testuser_{str(uuid.uuid4())[:8]}"

def test_login_invalid_credentials(client):
    response = client.post('/login', json={'UserName': 'invaliduser', 'Password': 'invalidpassword'})
    assert response.status_code == 200
    assert 'userId' not in response.json
    
def test_register_user(client):
    unique_username = generate_unique_username()
    user_data = {
        "Name": "Test User",
        "ContactId": "1234567890",
        "Email": "test@gmail.com",
        "Address": "123 Test St",
        "ZipCode": "12345",
        "UserName": unique_username,
        "Password": "testpassword"
    }
    response = client.post('/register', json=user_data)
    assert response.status_code == 200
    assert response.json['issuccess'] is True

def test_login(client):
    unique_username = generate_unique_username()
    user_data = {
        "Name": "Test User",
        "ContactId": "1234567890",
        "Email": "test@example.com",
        "Address": "123 Test St",
        "ZipCode": "12345",
        "UserName": unique_username,
        "Password": "testpassword"
    }
    register_db(user_data) 
    response = client.post('/login', json={'UserName': unique_username, 'Password': 'testpassword'})
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
        
        assert isinstance(response.json, (list, dict))

def test_get_all_cars(client):
    response = client.get('/getAllCars')  
    assert response.status_code == 200
    assert isinstance(response.json, list)

def test_get_car_spares():
    with app.test_client() as client:
        response = client.post('/getCarSpares', json={'carId': 1})
       
        assert response.status_code == 200

