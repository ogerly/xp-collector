// import connection
import db from "../config/neo4j.js";

// show all Labels from Neo4jDatabase
export const modelAllLabels = (data, result) => {
    db.run("MATCH (n) RETURN distinct labels(n)")
    .then( data => {        
        result(null, data);       
    })
    .catch(err => {
        console.log(err);
        result(err, null);
    })
}
  
 

// save a new empty Label in Neo4jDatabase
export const modelSaveNewLabel = (data, result) => {
    console.log('modelSaveNewLabel => ', data)
    db.run("CREATE (n:" + data.node_text + ")")
    .then( data => {        
        result(null, data);       
    })
    .catch(err => {
        console.log(err);
        result(err, null);
    })
}

 
 // save a new Label with Node in Neo4jDatabase
export const modelSaveNewNode = (data, result) => {
    //console.log('modelSaveNewNode => ', data)

    db.run("MATCH (n:" + data.node + ") where NOT (EXISTS (n.name)) detach delete n")
    .then(data1 => { 
        db.run("CREATE (n:" + data.node + " {name: '" + data.node_text + "', info: 'Info zu " + data.node_text + "'})")
        .then( data => {        
            result(null, data.node);       
        })
        .catch(err => {
            console.log(err);
            result(err, null);
        })
    })
    .catch(err => {
        console.log('delete', err);
    })
   
} 




// MATCH (n:Person) RETURN n.name LIMIT 25

// show all Nodes from Label in Neo4jDatabase
export const modelAllNodes = (data, result) => {
    console.log('modelAllNodes => ', data)
   db.run("MATCH (n:" + data.node + ") RETURN n.name LIMIT 25")
   .then( data => {        
       result(null, data);       
   })
   .catch(err => {
       console.log(err);
       result(err, null);
   })
}

//save two nodes with Relationship
export const modelSaveNodesRelations = (data, result) => {
    console.log('modelSaveNodesRelations => ', data)
     
   db.run(`MATCH 
           (a:`+ data.label1 +`),(b:`+ data.label2 +`)
            WHERE a.name = '`+ data.node1+`' 
            AND b.name = '`+ data.node2 +`' 
            CREATE (a)-[r:`+ data.relations +`]->(b)  
            RETURN r`)
   .then( data => {        
       result(null, data);       
   })
   .catch(err => {
       console.log(err);
       result(err, null);
   })
}



// show all Relationschips
export const modelAllRelationships = (data, result) => {
     console.log('modelAllRelationships')
     
   db.run("MATCH (n)-[r]-(m) RETURN distinct type(r)")
   .then( data => {    
       console.log('modelAllRelationships then => ', data)    
       result(null, data);       
   })
   .catch(err => {
       console.log(err);
       result(err, null);
   })
}



// Lösche alle Knoten:personen  die keinen namen haben = null
export const modelDeleteEmptyLabels = (data, result) => {
    console.log('modelDeleteEmptyLabels => ', data)
     //console.log("MATCH (n:"+ data.node +") detach delete n")
   db.run("MATCH (n:"+ data.node +") detach delete n")
   .then( data => {    
       // console.log('modelAllRelationships then => ', data)    
       result(null, data);       
   })
   .catch(err => {
       console.log(err);
       result(err, null);
   })
}
