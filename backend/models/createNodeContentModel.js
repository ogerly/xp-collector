// import connection
import db from "../config/database.js";

// Create NodeContent in Table
export const createNodeContentModel = (data, result) => {
    console.log(data)
    console.log("INSERT INTO `"+data.node+"` (`id`, `node_text`) VALUES (NULL, '"+data.node_text+"')")
    db.query("INSERT INTO `"+data.node+"` (`id`, `node_text`) VALUES (NULL, '"+data.node_text+"')", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
 
 // Show All NodeContent from Table
export const showNodeContentsModel = (data, result) => {
    console.log(data)
   // console.log("SELECT id, node_text FROM `"+ data.node +"`")
    db.query("SELECT id, node_text FROM `"+ data.node +"`", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

 // Show NodeContent by ID from Table
 export const showNodeContentByIdModel = (result) => {
    db.query("SELECT id, node_text FROM `Menschen` WHERE `Menschen`.`id` = 2", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update a NodeContent 
export const updateNodeContentModel = (data, result) => {
    console.log(data)
     db.query("UPDATE `Menschen` SET `node_text` = 'asasdasda2' WHERE `Menschen`.`id` = 2; ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete a NodeContent 
export const deleteNodeContentModel = (data, result) => {
    console.log(data)
     db.query("DELETE FROM `Menschen` WHERE `Menschen`.`id` = 2" + data.node_text + " ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
