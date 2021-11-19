// Import function from Name Model
import { createNodeContentModel, showNodeContentsModel, showNodeContentByIdModel, updateNodeContentModel, deleteNodeContentModel } from "../models/createNodeContentModel.js";


// Create New Table
export const createNodeContent = (req, res) => {
    const data = req.body;
    createNodeContentModel(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Show all NodeContents
export const getNodeContents = (req, res) => {
    console.log("getNodeContents req.body ",req.body)
    const data = req.body;
    showNodeContentsModel(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Show Single NodeContent 
export const getNodeContentById = (req, res) => {
    showNodeContentByIdModel((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update a NodeContent
export const updateNodeContent = (req, res) => {
    console.log("req.body ",req.body)
    const data = req.body;
    updateNodeContentModel(data,  (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete a NodeContent
export const deleteNodeContent = (req, res) => {
    console.log("req.body ",req.body)
    const data = req.body;
    deleteNodeContentModel(data,  (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}