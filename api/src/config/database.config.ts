import mysql from "mysql"

// Connection to mysql db
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
    database : 'travel_app'
  });
  
  connection.connect((err) => {
    if(err) {
      console.log(err);
    }
    console.log("Connected to database")
});

export default connection