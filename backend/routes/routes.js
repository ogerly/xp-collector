// import express
import express from "express";
  
import { 
    getAllLabels, 
    controllerSaveNewLabel, 
    controllerSaveNewNode,
    controllerShowDataFromOneNode,
    controllerDeleteNode,
    controllerAllNodes, 
    controllerSaveNodesRelations,
    controllerAllRelationships,
    controllerDeleteEmptyLabels
} from "../controllers/neo4j.js";


// init express router
const router = express.Router();

// Show all Labels on Neo4j Database
router.get('/all-labels', getAllLabels);

// Save new empty Label in Neo4j Database
router.post('/new-label', controllerSaveNewLabel);

// Save new Label with Node in Neo4j Database
router.post('/new-node', controllerSaveNewNode);

// show all Datas from one Node in Database
router.post('/show-node-data', controllerShowDataFromOneNode);

// delete a Node from Database
router.post('/delete-node', controllerDeleteNode);

// Save new Label with Node in Neo4j Database
router.post('/all-nodes', controllerAllNodes);

// Save  Nodes with Relations in Neo4j Database
router.post('/save-nodes-relations', controllerSaveNodesRelations);

// Save  Nodes with Relations in Neo4j Database
router.get('/all-relationships', controllerAllRelationships);

// Save  Nodes with Relations in Neo4j Database
router.post('/delete-empty-label', controllerDeleteEmptyLabels);


// export default router
export default router;