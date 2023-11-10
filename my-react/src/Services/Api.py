from flask import Flask
from flask import Flask, request
from flask import jsonify


#from Database import getAllBikesFrom_db, getAllCarsFrom_db, login_db, register_db,getAllSparesForCars,getAllSparesForBikes

from Database import getBikeModelsByBrand,getBikeBrands,getAllBikesFrom_db, getAllCarsFrom_db, login_db, register_db,getAllSparesForCars,getModelsByBrand,getAllSparesForBikes,getBrands,getBrandModelCarParts,addBike_item_to_cart,addCar_item_to_cart

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/register', methods=['POST'])
def register_user():
    req = request.get_json()
    print(req)
    res = register_db(req)
    return jsonify(res)

@app.route('/login',methods = ['POST'])
def login():
    req = request.get_json()
    print(req)
    res = login_db(req)
    return jsonify(res)


@app.route('/bike',methods = ['get'])
def bikes():
    
    res = getAllBikesFrom_db()
    return jsonify(res)

@app.route('/car',methods = ['get'])
def cars():

    res = getAllCarsFrom_db()
    return jsonify(res)


@app.route('/getCarSpares',methods = ['post'])
def carspares():
    req = request.get_json()
    res = getAllSparesForCars(req)
    return jsonify(res)

@app.route('/getBikeSpares',methods = ['post'])
def bikespares():
    req = request.get_json()
    res = getAllSparesForBikes(req)
    return jsonify(res)

@app.route('/getBikeBrands',methods = ['post'])
def bikebrands():
    req = request.get_json()
    res = getBikeBrands(req)
    return jsonify(res)

@app.route('/getBikeModelsByBrand',methods = ['post'])
def bikemodelbybrand():
    req = request.get_json()
    res = getBikeModelsByBrand(req)
    return jsonify(res)

@app.route('/getModelsByBrand',methods = ['post'])
def car_models_by_brand():  # Renamed to have a unique name
    req = request.get_json()
    res = getModelsByBrand(req)
    return jsonify(res)

@app.route('/addToCart',methods = ['post'])
def addtocart():
    req = request.get_json()
    if req['user_id'] is None or req['s_id'] is None:
        return {"issuccess": False, "message": "user_id and s_id are required."}
    res = addCar_item_to_cart(req)
    return jsonify(res)

@app.route('/addToBikeCart',methods = ['post'])
def addtobikecart():
    req = request.get_json()
    if req['user_id'] is None or req['s_id'] is None:
        return {"issuccess": False, "message": "user_id and s_id are required."}
    res = addBike_item_to_cart(req)
    return jsonify(res)

@app.route('/getBrands',methods = ['post'])
def brands():
    req = request.get_json()
    res = getBrands(req)
    return jsonify(res)

@app.route('/getBrandModelCarParts',methods = ['post'])
def brandmodelcarparts():
    req = request.get_json()
    res = getBrandModelCarParts(req)
    return jsonify(res)

if __name__ == '__main__':
    app.run()