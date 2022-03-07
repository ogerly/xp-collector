/* https://codepen.io/pvt5r486/pen/agNVKE
       Static smooth curves - World Cup Network - https://codepen.io/Ra1ny/pen/EmRKNm
       https://codepen.io/SchwartzWare/pen/XoZzLM
    */

export const graphConfig = {
  containerId: 'graph-renderer',
  neo4j: {
    serverUrl: process.env.NEO4J_URI || 'bolt://localhost:11005',
    serverUser: process.env.NEO4J_USER || 'neo4j',
    serverPassword: process.env.NEO4J_PASSWORD || 'test'
  },
  visConfig: {
    edges: {
      labelHighlightBold: true,
      hidden: false,
      smooth: {
        enabled: true,
        type: 'dynamic',
        roundness: 0.5
      },
      chosen: true,
      color: {
        color: '#b2dfdb',
        highlight: '#ffcdd2',
        hover: '#848484',
        inherit: true,
        opacity: 1.0
      },
      width: 3,
      length: 275,
      hoverWidth: 0.05,
      arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        }
      },
      font: {
        size: 30
      },
      widthConstraint: {
        maximum: 90
      }
    }
  },
  labels: {
    Person: {
      label: 'name',
      sizeCypher:
        'MATCH (n) WHERE id(n) = $id MATCH (n)-[r]-() RETURN count(r) AS c'
    },
    Bild: {
      label: 'name'
    },
    Museum: {
      label: 'name'
    },
    Ort: {
      label: 'name'
    },
    Region: {
      label: 'name'
    }
  },
  relationships: {
    zeichnete: {
      caption: 'name',
      color: 'red'
    },
    geboren: {
      value: 'weight',
      label: true
    },
    BELONGS: {
      value: 'weight',
      label: false
    }
  }
}
