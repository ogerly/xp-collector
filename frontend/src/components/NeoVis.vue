<template>
<div>
    <b-container id="main-container" fluid>
        <section id="graph-renderer">&nbsp;</section>
    </b-container>
</div>
</template>

<script>
import NeoVis from 'neovis.js'
import * as config from '../assets/config'
let loader
let neovisInstance
export default {
  name: 'GraphVisualizer',
  data () {
    return {
      id: null,
      items: [
        {
          text: 'Home',
          disabled: false,
          href: 'home'
        },
        {
          text: 'Graph',
          disabled: true,
          href: 'visualizer'
        }
      ]
    }
  },
  methods: {
    renderGraph () {
      config.graphConfig.initial_cypher = "MATCH (n:Person {name: 'Leonardo da Vinci'})-[r]->(m) RETURN n,r,m"
      neovisInstance = new NeoVis(config.graphConfig)
      neovisInstance.render()
      neovisInstance.registerOnEvent('completed', _ => {
        document.querySelector('.vis-network').addEventListener('dblclick', this.getClickedNode)
      })
      loader.hide()
    },
    getClickedNode () {
      const node = document.getElementsByClassName('vis-tooltip')[0]
      if (typeof node !== 'undefined') {
        const hasChild = typeof node.childNodes[7] !== 'undefined'
        const nodeChildren = hasChild ? node.childNodes[7] : node.childNodes[4]
        const nodeId = nodeChildren.nodeValue.replace(/\s/g, '')
        this.updateGraph(nodeId)
      }
    },
    updateGraph (id) {
      loader = this.$loading.show()
      const generalCypherById = 'MATCH (n)-[r]-(b) RETURN n, r, b'
      neovisInstance.renderWithCypher(generalCypherById)
      loader.hide()
    }
  },
  beforeMount () {
    loader = this.$loading.show()
    this.id = this.$route.params.nodeID
  },
  mounted () {
    this.renderGraph()
  }
}
</script>

<style scoped>
    #main-container {
        height: 100%;
        background-color: bisque;
    }
    #graph-renderer  {
        /*height: calc(100% - 84px) !important;*/
        height: 100%;
        padding: 20px;
        overflow: hidden;
        height: 766px;
    }
</style>
