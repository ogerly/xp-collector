export const graphConfig = {
  container_id: 'graph-renderer',
  server_url: process.env.NEO4J_URI || 'bolt://localhost:11005',
  server_user: process.env.NEO4J_USER || 'neo4j',
  server_password: process.env.NEO4J_PASSWORD || 'test',
  labels: {
    Person: {
      caption: 'name',
      community: '1',
      thickness: 'weight',
      sizeCypher: 'MATCH (n) WHERE id(n) = $id MATCH (n)-[r]-() RETURN count(r) AS c'
    },
    Bild: {
      caption: 'name',
      font: {
        size: 16,
        color: 'red'
      }
    },
    Museum: {
      caption: 'name',
      size: 'pagerank'
      // community: 'community'
    },
    Ort: {
      caption: 'name'
    }
  },
  relationships: {
    zeichnete: {
      thickness: 'weight',
      caption: true,
      arrows: true
    },
    geboren: {
      thickness: 'weight',
      caption: true
    },
    BELONGS: {
      thickness: 'weight',
      caption: false
    }
  },
  initial_cypher: 'MATCH (n)-[r]->(m) RETURN n,r,m'
}
