import pyodbc

# Local database connection with Windows Authentication
local_connection_string = 'DRIVER={ODBC Driver 17 for SQL Server};SERVER=.;DATABASE=Mechazone;Trusted_Connection=yes'
local_connection = pyodbc.connect(local_connection_string)
local_cursor = local_connection.cursor()

# Online database connection with SQL Server Authentication
online_connection_string = 'DRIVER={ODBC Driver 17 for SQL Server};SERVER=.;DATABASE=Mechazone;UID=mechazone;PWD=mechazone'
online_connection = pyodbc.connect(online_connection_string)
online_cursor = online_connection.cursor()

# Example: Transfer data from local_table to online_table
local_cursor.execute('SELECT * FROM local_table')
rows = local_cursor.fetchall()

for row in rows:
    online_cursor.execute('INSERT INTO online_table (column1, column2, column3) VALUES (?, ?, ?)', row)

# Commit changes and close connections
online_connection.commit()
local_connection.close()
online_connection.close()