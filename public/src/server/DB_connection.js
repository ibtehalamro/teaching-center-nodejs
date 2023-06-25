import mysql from 'mysql';

export function getConnection() {
  const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "admin",
    password: "admin",
    database: "teaching_center"
  });

  con.connect(function (err) {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      setTimeout(getConnection, 2000); // Retry after 2 seconds
    } else {
      console.log('Connected to MySQL');
    }
  });

  con.on('error', function (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Connection lost. Reconnecting...');
      getConnection();
    } else {
      throw err;
    }
  });

  return con;
}

export const executeQuery = (sql, params) => {
  return new Promise((resolve, reject) => {
    const con = getConnection();

    con.query(sql, params, (error, results) => {
      if (error) {
        console.log('executeQuery', error);
        reject(error);
      } else {
        // console.table({sql, params:params||''});
        resolve(results);
      }

      con.end(); // Disconnect from the database after executing the query
    });
  });
};
