export const graphConfig = {
  container_id: 'graph-renderer',
  server_url: process.env.NEO4J_URI || 'bolt://localhost:11005',
  server_user: process.env.NEO4J_USER || 'neo4j',
  server_password: process.env.NEO4J_PASSWORD || 'test',
  labels: {
    Person: {
      caption: 'name',
      community: false
      // sizeCypher: 'MATCH (n) WHERE id(n) = $id MATCH (n)-[r]-() RETURN count(r) AS c'
    },
    Bild: {
      caption: 'name'
    },
    Museum: {
      caption: 'name'
    },
    Ort: {
      caption: 'name'
    }
  },
  relationships: {
    zeichnete: {
      thickness: 'weight',
      caption: true
    },
    geboren: {
      thickness: 'weight',
      caption: true
    },
    BELONGS: {
      thickness: 'weight',
      caption: false
    }
  }
}
