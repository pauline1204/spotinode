const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'playlist_db'

});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySql Database');
});

module.exports = db;