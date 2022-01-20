<template>
<div>
  neovis
  <div>
    <b-input-group prepend="query" class="mt-3">
      <b-form-input type="text" v-model="query"></b-form-input>
      <b-input-group-append>
        <b-button variant="info" @click="loadQuery"><b-icon icon="caret-right-fill"></b-icon></b-button>
      </b-input-group-append>
    </b-input-group>
  </div>

  <b-container id="main-container" fluid>
    <section id="graph-renderer">&nbsp;</section>
  </b-container>

</div>
</template>

<script>
import NeoVis from 'neovis.js'
import * as config from '../assets/config'
// let loader
let neovisInstance
export default {
  name: 'GraphVisualizer',
  props: {
    propsQuery: {
      type: [String, Object]
    }
  },
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
      ],
      query: ''
    }
  },
  methods: {
    renderGraph () {
      console.log('neovis methods renderGraph')
      config.graphConfig.initial_cypher = 'MATCH (n)-[r]-(b) RETURN n, r, b'
      neovisInstance = new NeoVis(config.graphConfig)
      neovisInstance.render()
      neovisInstance.registerOnEvent('completed', _ => {
        document.querySelector('.vis-network').addEventListener('dblclick', this.getClickedNode)
      })
      // loader.hide()
    },
    getClickedNode () {
      console.log('neovis methods getClickedNode')
      const node = document.getElementsByClassName('vis-tooltip')[0]
      if (typeof node !== 'undefined') {
        const hasChild = typeof node.childNodes[7] !== 'undefined'
        const nodeChildren = hasChild ? node.childNodes[7] : node.childNodes[4]
        const nodeId = nodeChildren.nodeValue.replace(/\s/g, '')
        this.updateGraph(nodeId)
      }
    },
    updateGraph (id) {
      console.log('neovis methods updateGraph')
      // loader = this.$loading.show()
      const generalCypherById = 'MATCH (n)-[r]->(b) RETURN n, r, b'
      neovisInstance.renderWithCypher(generalCypherById)
      // loader.hide()
    },
    loadQuery () {
      console.log('neovis methods loadQuery')
      // console.log('this.query => ', this.query)
      config.graphConfig.initial_cypher = '' + this.query + ''
      neovisInstance = new NeoVis(config.graphConfig)
      neovisInstance.render()
    }

  },
  beforeMount () {
    // loader = this.$loading.show()
    this.id = this.$route.params.nodeID
  },
  mounted () {
    this.renderGraph()
  },
  watch: {
    propsQuery: function () {
      // console.log('propsQuery label => ', this.propsQuery.label)
      // console.log('propsQuery node => ', this.propsQuery.node)
      // alert('propsQuery has a watch function')
      if (this.propsQuery.label !== '' && this.propsQuery.node !== '') {
        this.query = 'MATCH (n:' + this.propsQuery.label + ' {name: "' + this.propsQuery.node + '"})-[r]->(m) RETURN n,r,m'
        // console.log('this.query => ', this.query)
        config.graphConfig.initial_cypher = '' + this.query + ''
        neovisInstance = new NeoVis(config.graphConfig)
        // console.log('typeof neovisInstance => ', typeof (neovisInstance))
        // console.log('log neovisInstance => ', neovisInstance)
        // console.count('count neovisInstance => ', neovisInstance)
        // const str = JSON.stringify(neovisInstance._data.edges, null, 2)
        // console.log(' str => ', str)
        // console.log(' JSON.stringify length => ', JSON.stringify(neovisInstance).length)
        // console.log(' JSON.stringify  => ', JSON.stringify(neovisInstance))
        // console.log('neovisInstance._data.edges.length => ', neovisInstance._data.edges.length)
        neovisInstance.render()
      }
    }
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
