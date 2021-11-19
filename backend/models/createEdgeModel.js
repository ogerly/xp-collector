// import connection
import db from "../config/database.js";

// Create new Edges to Database
export const createEdgeTable = (data, result) => {
    console.log(data.edge_text)
    db.query("INSERT INTO `_EDGES` (`id`, `name`) VALUES (NULL, '" + data.edge_text + "');", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
 
 // Show all Edges 
export const showAllEdges = (result) => {
    db.query("SELECT id, name FROM `_EDGES`", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete a Edge in Database
export const deleteEdgeTable = (data, result) => {
    console.log("DELETE FROM `_EDGES` WHERE `_EDGES`.`id` = " + data.id +"")
     db.query("DELETE FROM `_EDGES` WHERE `_EDGES`.`id` = " + data.id +"", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
