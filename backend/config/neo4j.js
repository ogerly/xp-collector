// Require Neo4j
import neo4j from "neo4j-driver-lite";

// Create Driver Local
const driver = new neo4j.driver(
  "bolt://localhost:11005",
  neo4j.auth.basic("neo4j", "test")
);

// Create Driver Local XP whoknows
// const driver = new neo4j.driver("bolt://turn.whoknows.me:7687", neo4j.auth.basic("neo4j", "test"));

// create the connection to database
const db = driver.session({
  database: "neo4j",
  defaultAccessMode: neo4j.session.WRITE,
});

export default db;
