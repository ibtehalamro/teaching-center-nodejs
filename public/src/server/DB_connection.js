import mysql from 'mysql';
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "teaching_center"
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});
export default con;
