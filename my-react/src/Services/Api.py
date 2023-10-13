from flask import Flask
from flask import jsonify
from Database import getAllBikesFrom_db, getAllCarsFrom_db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/bike',methods = ['get'])
def bikes():
    
    res = getAllBikesFrom_db()
    return jsonify(res)

@app.route('/car',methods = ['get'])
def cars():

    res = getAllCarsFrom_db()
    return jsonify(res)

if __name__ == '__main__':
    app.run()