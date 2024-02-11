import mysql from 'mysql';


function dbSetup(){
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '****',
    database : 'db_name'
  });

  connection.connect();

  connection.query('CREATE TABLE LOGIN-DATA', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
   
  connection.end();
}

export default dbSetup;