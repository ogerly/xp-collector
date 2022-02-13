// import express
import express from "express";
  
import { 
    getAllLabels, 
    controllerSaveNewLabel, 
    controllerSaveNewNode,
    controllerShowDataFromOneNode,
    controllerDeleteNode,
    controllerDeleteNodeByID,
    controllerDeleteAll,
    controllerAllNodes, 
    controllerSaveNodesRelations,
    controllerAllRelationships,
    controllerDeleteEmptyLabels,
    controllerSetEdges
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

// delete a Node from Database by Name
router.post('/delete-node', controllerDeleteNode);

// delete a Node from Database by ID
router.post('/delete-nodebyid', controllerDeleteNodeByID);

// delete alle knoten und kanten deiner neo4j database
router.post('/delete-all', controllerDeleteAll)

// Save new Label with Node in Neo4j Database
router.post('/all-nodes', controllerAllNodes);

// Save  Nodes with Relations in Neo4j Database
router.post('/save-nodes-relations', controllerSaveNodesRelations);

// Save  Nodes with Relations in Neo4j Database
router.get('/all-relationships', controllerAllRelationships);

// delete  Nodes with Relations in Neo4j Database
router.post('/delete-empty-label', controllerDeleteEmptyLabels);

// zeichne eine Verbindung zwischen zwei Knoten 
router.post('/set-edges', controllerSetEdges);

// export default router
export default router;