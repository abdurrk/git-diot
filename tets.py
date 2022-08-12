import mysql.connector

mydb = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password'
)
mycursor=mydb.cursor ()
mycursor.execute("CREATE DATABASE sample_db")
mycursor.execute("SHOW DATABASE")
for db in mycursor:
    print(db)
