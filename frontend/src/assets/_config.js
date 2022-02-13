import axios from 'axios'
import configLabels from './_configLabels'
const $ = require('jquery')
const Swal = require('sweetalert2')

// console.log('configLabels', configLabels())

async function graphConfig () {
  return {
    containerId: 'graph-renderer',
    neo4j: {
      serverUrl: process.env.NEO4J_URI || 'bolt://localhost:11005',
      serverUser: process.env.NEO4J_USER || 'neo4j',
      serverPassword: process.env.NEO4J_PASSWORD || 'test'
    },
    visConfig: {
      clickToUse: true,
      physics: true,
      configure: {
        enabled: true,
        filter: 'physics',
        showButton: true
      },
      nodes: {
        shape: 'box',
        color: {
          border: '',
          background: '#b2dfdb',
          highlight: {
            border: '#e57373',
            background: '#ffcdd2'
          }
        },
        borderWidth: 2,
        size: 10,
        shadow: true,
        font: {
          color: '#111',
          face: 'Arial',
          size: 16,
          strokeWidth: 0,
          strokeColor: '#222'
        },
        scaling: {
          label: {
            min: 8,
            max: 50
          }
        }
      },
      layout: {
        improvedLayout: true,
        hierarchical: {
          enabled: false,
          direction: 'UD',
          sortMethod: 'hubsize',
          parentCentralization: false,
          blockShifting: false,
          edgeMinimization: false
        }
      },
      interaction: {
        dragNodes: true,
        navigationButtons: true,
        multiselect: true,
        hover: true,
        hoverConnectedEdges: true,
        tooltipDelay: 300
      },
      manipulation: {
        enabled: true,
        initiallyActive: false,
        addNode: function (nodeData, callback) {
          // console.log('addNode')
          if (document.getElementById('col-label').getAttribute('data-label') === '') {
            Swal.fire('Bitte wähle ein Label!')
            return
          }
          Swal.fire({
            title: 'Neuer Knoten.',
            html:
              '<label>Label</label><input id="swal-label" class="swal2-input" value="' + document.getElementById('col-label').getAttribute('data-label') + '"><br>' +
              '<label>Node</label><input id="swal-name" class="swal2-input"><br>' +
              '<label>Info</label><input id="swal-info" class="swal2-input"><br>' +
              '<label>Img</label><input id="swal-img" class="swal2-input">',

            focusConfirm: false,
            preConfirm: () => {
              try {
                axios.post('http://localhost:5000/new-node', {
                  label: $('#col-label').attr('data-label'),
                  node_name: $('#swal-name').val(),
                  node_info: $('#swal-info').val(),
                  node_img: $('#swal-img').val()
                })

                // console.log('NeoVis config save New Node')

                nodeData.label = $('#swal-name').val()
                callback(nodeData)
              } catch (err) {
                console.log(err)
              }
            }
          })
        },
        addEdge: function (edgeData, callback) {
          console.log('addEdge')
          // console.log('edgeData', edgeData)
          // console.log('edgeData.from', edgeData.from)
          // console.log('edgeData.to', edgeData.to)

          Swal.fire({
            title: 'Name der Verbindung?',
            html:
               '<label>Name</label><input id="swal-title" class="swal2-input"><br>',
            focusConfirm: false,
            preConfirm: () => {
              try {
                axios.post('http://localhost:5000/set-edges', {
                  title: $('#swal-title').val(),
                  from: edgeData.from,
                  to: edgeData.to
                })

                // console.log('NeoVis config save New Edge')
                if (edgeData.from === edgeData.to) {
                  var r = confirm('Möchten Sie den Knoten mit sich selbst verbinden?')
                  if (r === true) {
                    callback(edgeData)
                  }
                } else {
                  callback(edgeData)
                }
              } catch (err) {
                console.log(err)
              }
            }
          })
        },
        editNode (node, callback) {
          console.log('editNode node', node)
          // console.log('editNode callback', callback)
          // console.log('queryInput', document.getElementById('queryInput').value)

          node.label = document.getElementById('queryInput').value
          callback(node)
        },
        editEdge (edge, callback) {
          console.log('editEdge edge', edge)
          // console.log('editEdge callback', callback)
        },
        async deleteNode (node, callback) {
          console.log('deleteNode node', node)
          // console.log('deleteNode node ID', node.nodes[0])
          // console.log('deleteNode callback', callback)
          // MATCH (s) WHERE ID(s) = '+node.nodes[0]+' RETURN s

          try {
            await axios.post('http://localhost:5000/delete-nodebyid', {
              id: node.nodes[0]
            })
            $('#loadQueryButton').click()
            Swal.fire('Der Knoten wurde gelöscht.')
          } catch (err) {
            console.log(err)
          }
        }
      },
      edges: {
        labelHighlightBold: true,
        // hidden: false,
        // smooth: {
        //   enabled: true,
        //   type: 'dynamic',
        //   roundness: 0.5
        // },
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
        hoverWidth: function (width) {
          return width + 10
        },
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
    // labels: {
    //   // LABELS_ALL: {
    //   //   label: 'name'
    //   // },
    //   // Person: {
    //   //   label: 'name',
    //   //   title: 'jhgasdad1'
    //   // },
    //   // Bild: {
    //   //   label: 'name'
    //   // },
    //   // Bundesland: {
    //   //   label: 'name'
    //   // },
    //   // Ort: {
    //   //   label: 'name'
    //   // },
    //   // Region: {
    //   //   label: 'name'
    //   // }
    // },
    relationships: {
      RELATES_TO: {
        label: 'title'
      }
      // bob: {
      //   label: 'title'
      // },
      // peter: {
      //   label: 'title'
      // },
      // PETER: {
      //   label: 'title'
      // },
      // orte: {
      //   value: 'weight',
      //   label: 'title'
      // },
      // orte2: {
      //   value: 'weight',
      //   label: 'title'
      // },
      // BELONGS: {
      //   value: 'weight',
      //   labels: false
      // }
    },
    labels: await configLabels()
  }
}

export default graphConfig
