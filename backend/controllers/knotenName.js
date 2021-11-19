// Import function from Name Model
import { getNames, getNameById, insertName, updateNameById, deleteNameById } from "../models/knotenNameModel.js";
  
// Get All Name
export const showNames = (req, res) => {
    getNames((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Name 
export const showNameById = (req, res) => {
    getNameById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Name
export const createName = (req, res) => {
    const data = req.body;
    insertName(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Name
export const updateName = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateNameById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Name
export const deleteName = (req, res) => {
    const id = req.params.id;
    deleteNameById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}