// import connection
import db from "../config/database.js";

// Create Node Table to Database
export const createNodeTable = (data, result) => {
    db.query("CREATE TABLE " + data.node_text + " (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, node_text VARCHAR(30) NOT NULL )", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
 
 // Show all Table 
export const showNodeTables = (result) => {
    db.query("SHOW TABLES WHERE `Tables_in_demo_db` NOT LIKE '_EDGES' AND `Tables_in_demo_db` NOT LIKE '_CONNECTIONS'", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete a Node Table in Database
export const deleteNodeTable = (data, result) => {
    console.log(data)
     db.query("DROP TABLE `demo_db`." + data.node_text + " ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
