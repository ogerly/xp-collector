// import express
import express from "express";
  

import { getNodes, createNode, deleteNode } from "../controllers/createNode.js";

import { getEdges, createEdge, deleteEdge } from "../controllers/createEdge.js";

import { getNodeContents, getNodeContentById, createNodeContent,  updateNodeContent, deleteNodeContent } from "../controllers/createNodeContent.js";



// init express router
const router = express.Router();




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

  

 



// export default router
export default router;