from sqlalchemy import create_engine
#from sqlalchemy import filter, filter_by

#engine = create_engine('mssql+pyodbc://@' + DESKTOP-8FANH7R + '/' + BWorks + '?trusted_connection=yes&driver=ODBC+Driver+13+for+SQL+Server  driver=SQL Server Native Client 11.0')')

engine = create_engine('mssql+pyodbc://@' + 'VINEETHA\MSSQL' + '/' + 'Mechazone' + '?trusted_connection=yes & driver=ODBC Driver 17 for SQL Server')

#engine = create_engine('mssql+pyodbc://@' + 'DESKTOP-8FANH7R' + '/' + 'BWorks' + '?trusted_connection=yes&driver=SQL Server', use_setinputsizes=False)


from sqlalchemy import String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Integer,Float
from sqlalchemy.orm import Session

class Base:
    pass
    #_allow_unmapped_ = True


Base = declarative_base(cls=Base)
  

class bikes(Base):
    __tablename__ = "bikes"

    bike_id: int = Column(Integer, primary_key=True)
    model: str = Column(String,nullable=False )
    price: str = Column(Float, nullable = False)
    year :int = Column(Integer,nullable=False )

class cars(Base):
    _tablename_ = "cars"

    car_id: int = Column(Integer, primary_key=True)
    model: str = Column(String,nullable=False )
    price: float = Column(Float, nullable = False)
    year: int = Column(Integer, nullable = False)
        
def getAllBikesFrom_db():
    try:
        
        from sqlalchemy import text
        with Session(engine) as session:
            print("session")
            sql_statement = text("SELECT * FROM bikes" )
            query = session.query(bikes).from_statement(sql_statement)
            bikesresult = query.all()
            bikesList= []
            
            for bike in bikesresult:
                bikesList.append({
                "bike_id": bikes.bike_id,
                "model" : bikes.model,
                "year": bikes.year,
                "price": bikes.price,
                
            })
           
            return bikesList
    except Exception as e:
        print(e)
        return {}   

def getAllCarsFrom_db():
    try:
        
        from sqlalchemy import text
        with Session(engine) as session:
            print("session")
            sql_statement = text("SELECT * FROM cars" )
            query = session.query(cars).from_statement(sql_statement)
        
            carsResult = query.all()
            carsList = []
            for car in carsResult:
                carsList.append({
                    "car_id": car.car_id,
                    "model" : car.model,
                    "year": car.year,
                    "price": car.price,
                })
                
           
            return carsList

    except Exception as e:
        print(e)
        return{}