// Import function from Name Model
import { 
    modelAllLabels, 
    modelSaveNewLabel, 
    modelSaveNewNode, 
    modelAllNodes, 
    modelSaveNodesRelations, 
    modelAllRelationships,
    modelDeleteEmptyLabels } from "../models/neo4jModel.js";

 

// Show all Node on Neo4j
export const getAllLabels = (req, res) => {
    const data = req.body;
    modelAllLabels(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
 
// Save an new empty Label
export const controllerSaveNewLabel = (req, res) => {
    const data = req.body;
    modelSaveNewLabel(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 // Save an new Label with Node
export const controllerSaveNewNode = (req, res) => {
    const data = req.body;
    modelSaveNewNode(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  // Show all Nodes from a Label
export const controllerAllNodes = (req, res) => {
    const data = req.body;
    modelAllNodes(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

  // Save two Nodes with Relationschip
  export const controllerSaveNodesRelations = (req, res) => {
    const data = req.body;
    modelSaveNodesRelations(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

   // Show All Relationschips
   export const controllerAllRelationships = (req, res) => {
    const data = req.body;
    modelAllRelationships(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Show All Relationschips
export const controllerDeleteEmptyLabels = (req, res) => {
 const data = req.body;
 modelDeleteEmptyLabels(data, (err, results) => {
     if (err){
         res.send(err);
     }else{
         res.json(results);
     }
 });
}