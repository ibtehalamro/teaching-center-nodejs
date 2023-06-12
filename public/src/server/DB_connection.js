import mysql from 'mysql';
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "admin",
    password: "admin",
    database: "teaching_center"
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});

export const executeQuery = (sql, params) => {
    return new Promise((resolve, reject) => {
      con.query(sql, params, (error, results) => {
        if (error) {
          console.log('executeQuery', error)
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
  
export default con;

