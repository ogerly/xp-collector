// Import function from Name Model
import { createNodeTable, showNodeTables, deleteNodeTable } from "../models/createNodeModel.js";


// Create New Table
export const createNode = (req, res) => {
    const data = req.body;
    createNodeTable(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Show all Tables
export const getNodes = (req, res) => {
    showNodeTables((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete a Table
export const deleteNode = (req, res) => {
    console.log("req.body ",req.body)
    const data = req.body;
    deleteNodeTable(data,  (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}