// import connection
import db from "../config/database.js";
  
// Get All Names
export const getNames = (result) => {
    db.query("SELECT * FROM name", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Name
export const getNameById = (id, result) => {
    db.query("SELECT * FROM name WHERE name_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Node to Database
export const insertName = (data, result) => {
    db.query("INSERT INTO name SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Node text to Database
export const updateNameById = (data, id, result) => {
    db.query("UPDATE name SET name_name = ? WHERE id = ?", [data.node_text, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Node to Database
export const deleteNameById = (id, result) => {
    db.query("DELETE FROM name WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}