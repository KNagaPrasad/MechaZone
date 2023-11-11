from sqlalchemy.orm import Session
from sqlalchemy import insert, update, create_engine
from Database import Users, CartItems, BikeCartItems

engine = create_engine('mssql+pyodbc://@' + 'DESKTOP-E5BITMF' + '/' + 'Mechazone' + '?trusted_connection=yes & driver=SQL Server')

def database(func):
    def wrapper(*args, **kwargs):
        with Session(engine) as session:
            try:
                result = func(session, engine, *args, **kwargs)
                session.commit()
                return result
            except Exception as e:
                print(f"Database operation failed: {str(e)}")
                session.rollback()
                return {"issuccess": False, "message": str(e)}
    return wrapper

@database
def login_db(session, engine, req):
    try:
        from sqlalchemy import text
        sql_statement = text("SELECT * FROM Users WHERE UserName = :userName and Password = :password" )
        query = session.query(Users).from_statement(sql_statement)
        query = query.params(userName=req['UserName'], password=req['Password'])
        result = query.first()
        response = {
            "userId": result.UserId,
            "name" : result.Name,
            "contactId": result.ContactId,
            "email": result.Email,
            "userName": result.UserName,
            "address": result.Address,
            "zipCode": result.ZipCode
        }
        return response
    except Exception as e:
        print(e)
        return {}

@database
def add_car_item_to_cart(session, engine, req):
    stmt = insert(CartItems).values(user_id=req['user_id'], s_id=req['s_id'])
    stmt.compile()
    with engine.connect() as conn:
        result = conn.execute(stmt)
        conn.commit()
    return {"issuccess": True}

@database
def add_bike_item_to_cart(session, engine, req):
    stmt = insert(BikeCartItems).values(user_id=req['user_id'], s_id=req['s_id'])
    stmt.compile()
    with engine.connect() as conn:
        result = conn.execute(stmt)
        conn.commit()
    return {"issuccess": True}

# Example usage:

# Login
login_request = {
    "UserName": "john_doe",
    "Password": "password123",
}

login_response = login_db(login_request)
print(f"Login Response: {login_response}")

add_car_item_request = {
    "user_id": 1,
    "s_id": 123,
}

add_car_item_response = add_car_item_to_cart(add_car_item_request)
print(f"Add Car Item to Cart Response: {add_car_item_response}")

add_bike_item_request = {
    "user_id": 1,
    "s_id": 456,
}

add_bike_item_response = add_bike_item_to_cart(add_bike_item_request)
print(f"Add Bike Item to Cart Response: {add_bike_item_response}")