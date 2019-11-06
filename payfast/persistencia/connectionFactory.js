const mysql = require('mysql');

// const createDBConnection =  () => mysql.createConnection({
//     host:'mysqldb',
//     user:'root',
//     password:'123',
//     database:'payfast',
//     port:3306
// }
// ) 
function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'payfast',
        port: 3306
    });
}
module.exports = function () {
    return createDBConnection;
}