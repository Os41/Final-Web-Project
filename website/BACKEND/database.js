const mysql = require("mysql2");
let db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: '3306',
    database: 'NJSDB'
});

function addMessage(fname, lname, email, mobile, gender, date, lang, message){
    db.connect((err) => {
        if(err) throw err;

        var sql = `INSERT INTO message (fname, lname, email, mobile, gender, date, lang, message) VALUES ('${fname}', '${lname}', '${email}', '${mobile}', '${gender}', '${date}', '${lang}', '${message}')`;

        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log("1 message inserted");
        });
    });
}

function addUser(email, password){
    db.connect((err) => {
        if(err) throw err;

        var sql = `INSERT INTO user (email, password) VALUES ('${email}', '${password}')`;

        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log("1 user inserted");
        });
    });
};

module.exports = {addMessage, addUser};