<template>
  <div class="home">
    home
    <b-tabs content-class="mt-3" align="center">
      <b-tab title="Übersicht" active>
        <CollectorWorld
              :nodeItems="nodeItems"
              :RelationsItems="RelationsItems"
              :contentItems="contentItems"
              :nodeContentText="nodeContentText"
              @get-label-nodes="getLabelNodes"
              @get-relationship="getRelationship"
              @set-props-query="setPropsQuery"
        />
      </b-tab>
      <b-tab title="+ Knoten">
        <Labels
              :nodeItems="nodeItems"
              @get-labels="getLabels"
              @get-label-nodes="getLabelNodes" />
        <Nodes
          :nodeContentText="nodeContentText"
          :contentItems="contentItems"
          @set-props-query="setPropsQuery"
          @get-label-nodes="getLabelNodes"
        />
      </b-tab>
      <b-tab title="+ Verbindungen">
        <ConnectNodes
          :optionsLabels="optionsLabels"
          :contentItems="contentItems"
          :RelationsItems="RelationsItems"
          @get-label-nodes="getLabelNodes"
          @get-relationship="getRelationship"

      />
      </b-tab>
      <b-tab title="About" ><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
    <NeoVis :propsQuery="propsQuery"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import CollectorWorld from '@/components/CollectorWorld.vue'
import Labels from '@/components/Labels.vue'
import Nodes from '@/components/Nodes.vue'
import ConnectNodes from '@/components/ConnectNodes.vue'
// import NetworkGraphExample from '@/components/NetworkGraphExample.vue'
import NeoVis from '@/components/NeoVis.vue'

export default {
  name: 'Home',
  components: {
    CollectorWorld,
    Labels,
    Nodes,
    ConnectNodes,
    NeoVis
  },
  data () {
    return {
      nodeItems: [],
      nodeText: '',
      nodeContentItems: [],
      contentItems: [],
      nodeContentText: '',
      relationItems: [],
      RelationsItems: [],
      optionsLabels: [],
      optionsNode1: [],
      relationOptions: [],
      propsQuery: ''
    }
  },
  created () {
    this.getLabels()
  },
  methods: {
    // Get All labels Neo4j
    async getLabels (label) {
      console.log('home methods getLabels label=>  ', label)
      try {
        const response = await axios.get('http://localhost:5000/all-labels')
        this.nodeItems = response.data.records
        this.optionsNode1 = response.data.records
        this.nodeText = label
      } catch (err) {
        console.log(err)
      }
    },

    // Get All Nodes from a Label Neo4j
    async getLabelNodes (label) {
      console.log('home methods getLabelNodes label=>  ', label)
      this.nodeContentText = label
      this.nodeText = label
      if (label === '') {
        return
      }
      try {
        const response2 = await axios.post('http://localhost:5000/all-nodes', {
          node: this.nodeText
        })
        // console.log('getLabelNodes response2', response2.data.records)
        this.nodeContentItems = response2.data.records
      } catch (err) {
        console.log(err)
      }
    },

    // Get All Relationship Types in  Neo4j
    async getRelationship () {
      console.log('home methods getRelationship')
      // this.relationItems = []
      try {
        const response = await axios.get('http://localhost:5000/all-relationships')

        // console.log('getRelationship response => ', response)
        // console.log('getRelationship response.data => ', response.data)
        // console.log('getRelationship response.data.records => ', response.data.records)
        this.relationItems = response.data.records
      } catch (err) {
        console.log(err)
      }
    },

    setPropsQuery (label, node) {
      console.log('home methods setPropsQuery (label) => ', label)
      console.log('setPropsQuery (node) => ', node)
      this.propsQuery = { label, node }
      console.log('this.propsQuery => []', this.propsQuery)
    }

  },
  watch: {

    optionsNode1: function () {
      console.log('home watch optionsNode1', this.optionsNode1)
      this.optionsNode1.forEach((value, index) => {
        this.optionsLabels.push(value._fields[0][0])
        // console.log(value._fields[0][0])
        // console.log(index)
      })
      // return this.optionsLabels
    },
    nodeContentItems: function () {
      this.contentItems = []
      console.log('home watch nodeContentItems', this.nodeContentItems)
      this.nodeContentItems.forEach((value, index) => {
        this.contentItems.push(value._fields[0].properties)
        console.log(value._fields[0].properties)
        console.log(index)
      })
      console.log('++++ contentItems', this.contentItems)
      // return this.contentItems
    },
    relationItems: function () {
      this.RelationsItems = []
      // this.relationOptions = []
      console.log('home watch relationItems', this.relationItems)
      if (this.relationItems) {
        this.relationItems.forEach((value, index) => {
          this.RelationsItems.push(value._fields[0])
        // console.log(value._fields[0])
        // console.log(index)
        })
        // console.log('RelationsItems', this.RelationsItems)
        this.relationOptions = this.RelationsItems
      // return this.RelationsItems
      }
    }
  }
}
</script>
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.border {
  border: 1px;
border: 2px dotted;
border: medium dashed rgb(125, 181, 233);
background-color: #5467611a;
}
.border2 {
background-color: #cdcf563b;
}
.border3 {
background-color: #5bc9a636;
}
.border4 {
background-color: #c98c5b36;
}

/*Start Button Line*/
.circ1 {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #42b983;
  display: inline-grid;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
}

.text-middle {
  width: 120px;
  padding-top: 48px;
  padding-left: 22px;
  display: block;
  font-size: large;
}

.text-edge {
  padding-top: 7px;
  display: block;
  font-size: xx-large;

}

hr.new5 {
  border: 10px solid green;
  border-radius: 5px;
  margin-left: -27px;
  margin-right: -27px;
}
/* ENDE Button Line*/
</style>
