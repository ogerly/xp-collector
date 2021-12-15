// import express
import express from "express";
  
import { 
    getAllLabels, 
    controllerSaveNewLabel, 
    controllerSaveNewNode, 
    controllerAllNodes, 
    controllerSaveNodesRelations,
    controllerAllRelationships,
    controllerDeleteEmptyLabels
} from "../controllers/neo4j.js";

//import { getNodes, createNode, deleteNode } from "../controllers/createNode.js";

//import { getEdges, createEdge, deleteEdge } from "../controllers/createEdge.js";

//import { getNodeContents, getNodeContentById, createNodeContent,  updateNodeContent, deleteNodeContent } from "../controllers/createNodeContent.js";



// init express router
const router = express.Router();

// Show all Labels on Neo4j Database
router.get('/all-labels', getAllLabels);

// Save new empty Label in Neo4j Database
router.post('/new-label', controllerSaveNewLabel);

// Save new Label with Node in Neo4j Database
router.post('/new-node', controllerSaveNewNode);


// Save new Label with Node in Neo4j Database
router.post('/all-nodes', controllerAllNodes);

// Save  Nodes with Relations in Neo4j Database
router.post('/save-nodes-relations', controllerSaveNodesRelations);

// Save  Nodes with Relations in Neo4j Database
router.get('/all-relationships', controllerAllRelationships);

// Save  Nodes with Relations in Neo4j Database
router.post('/delete-empty-label', controllerDeleteEmptyLabels);



/*

// Show all Table Node 
router.get('/nodes', getNodes);

// Create Table Node 
router.post('/node', createNode);

// Delete Table Node 
router.post('/dropNode', deleteNode);



// Show all Edges 
router.get('/edges', getEdges);

// Create new Edge
router.post('/edge', createEdge);

// Delete a Edge 
router.post('/deleteEdge', deleteEdge);




// Get All Node Content
router.post('/nodeContents', getNodeContents);
  
// Get Single NodeContent
router.get('/nodeContent/:id', getNodeContentById);
  
// Create New NodeContent
router.post('/createNodeContent', createNodeContent);
  
// Update NodeContent
router.put('/nodeContent/:id', updateNodeContent);
  
// Delete Product
router.delete('/nodeContent/:id', deleteNodeContent);

  

 
*/


// export default router
export default router;