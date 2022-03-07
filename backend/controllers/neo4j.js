// Import function from Name Model
import {
  modelAllLabels,
  modelSaveNewLabel,
  modelSaveNewNode,
  modelShowDataFromOneNode,
  modelDeleteNode,
  modelDeleteNodeByID,
  modelDeleteAll,
  modelAllNodes,
  modelSaveNodesRelations,
  modelAllRelationships,
  modelDeleteEmptyLabels,
  modelSetEdges,
} from "../models/neo4jModel.js";

// Show all Node on Neo4j
export const getAllLabels = (req, res) => {
  const data = req.body;
  modelAllLabels(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Save an new empty Label
export const controllerSaveNewLabel = (req, res) => {
  const data = req.body;
  modelSaveNewLabel(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
// Save an new Label with Node
export const controllerSaveNewNode = (req, res) => {
  const data = req.body;
  modelSaveNewNode(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
// show all Datas from one Node in Database
export const controllerShowDataFromOneNode = (req, res) => {
  const data = req.body;
  modelShowDataFromOneNode(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
// Delete a  Node in Database By Name
export const controllerDeleteNode = (req, res) => {
  const data = req.body;
  modelDeleteNode(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete a  Node in Database By ID
export const controllerDeleteNodeByID = (req, res) => {
  const data = req.body;
  modelDeleteNodeByID(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Show all Nodes from a Label
export const controllerAllNodes = (req, res) => {
  const data = req.body;
  modelAllNodes(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Save two Nodes with Relationschip
export const controllerSaveNodesRelations = (req, res) => {
  const data = req.body;
  modelSaveNodesRelations(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Show All Relationschips
export const controllerAllRelationships = (req, res) => {
  const data = req.body;
  modelAllRelationships(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete All Relationschips die keine  verbindung haben, alle die nicht verwendet werden
export const controllerDeleteEmptyLabels = (req, res) => {
  const data = req.body;
  modelDeleteEmptyLabels(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
// delete All knoten und relationships in der DB, !! alles wird gelöscht !!
export const controllerDeleteAll = (req, res) => {
  const data = req.body;
  modelDeleteAll(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
// zeichne eine Verbindung zwischen zwei Knoten
export const controllerSetEdges = (req, res) => {
  const data = req.body;
  modelSetEdges(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
