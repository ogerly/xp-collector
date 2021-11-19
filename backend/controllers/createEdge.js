// Import function from Name Model
import { createEdgeTable, showAllEdges, deleteEdgeTable } from "../models/createEdgeModel.js";


// Create New Edge
export const createEdge = (req, res) => {
    const data = req.body;
    createEdgeTable(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Show all Edges
export const getEdges = (req, res) => {
    showAllEdges((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete a Edge
export const deleteEdge = (req, res) => {
    console.log("req.body ",req.body)
    const data = req.body;
    deleteEdgeTable(data,  (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}