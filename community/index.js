let mysql = require('mysql');

let pool = mysql.createPool({
  host: "community-cluster.cluster-cqao1m2qq9vi.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Fl3tch86!",
  database: "community"
})

exports.handler =  (event, context, callback) => {
  //prevent timeout from waiting event loop
  context.callbackWaitsForEmptyEventLoop = false;
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query('SELECT * FROM POSTS', function (error, results, fields) {
      // And done with the connection.
      connection.release();
      // Handle error after the release.
      if (error) callback(error);
      else callback(null,results);

    });
  });
};