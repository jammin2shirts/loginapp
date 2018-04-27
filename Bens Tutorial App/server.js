const express= require('express');
const app = express();
const mysql = require('mysql');
const user = require('./userSchema');
var connection = mysql.createConnection({
    host:       'localhost',
    user:       'appUser',
    password:   'Twisted1',
    database:   'appDB'
});

//Database connections
connection.connect();

user = connection.query('SELECT * from users', function (err, rows, fields){
    if (err) throw err

    console.log('The solution is: ', rows[0].id, rows[0].email, rows[0].password);
});

connection.end();


//Start server
app.get('/', (req, res) => res.sendStatus(user));
console.log(user.email);
app.listen(3000, () => console.log('started on port 3000'));


