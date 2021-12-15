export const graphConfig = {
  container_id: 'graph-renderer',
  server_url: process.env.NEO4J_URI || 'bolt://localhost:11005',
  server_user: process.env.NEO4J_USER || 'neo4j',
  server_password: process.env.NEO4J_PASSWORD || 'test',
  labels: {
    Character: {
      caption: 'name'
    },
    Location: {
      caption: 'name'
    },
    Nation: {
      caption: 'name'
    }
  },
  relationships: {
    GO_TO: {
      thickness: 'weight',
      caption: false
    },
    BORN_IN: {
      thickness: 'weight',
      caption: false
    },
    BELONGS: {
      thickness: 'weight',
      caption: false
    }
  }
}
