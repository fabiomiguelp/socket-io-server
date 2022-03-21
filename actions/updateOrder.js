let mysql = require('mysql');
let config = require('../config/databaseConfig');



const updateOrder = function(id) {
    let connection = config.connection;

    // update statment
    let sql = `UPDATE wp_wc_order_stats
            SET status = ?
            WHERE order_id = ?`;
    // fill params        
    let data = ['wc-completed', 12];

    // execute the UPDATE statement
    connection.query(sql, data, (error, results, fields) => {
      if (error){
        return console.error(error.message);
      }
      console.log('Rows affected:', results.affectedRows);
    });
    
    connection.end();

}

module.exports = { updateOrder };

