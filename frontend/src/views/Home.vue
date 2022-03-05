<template>
  <div class="home">
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
        <Nodes
          :labels="labels"
          :nodeContentText="nodeContentText"
          :contentItems="contentItems"
          :nodeContent="nodeContent"
          @get-label-nodes="getLabelNodes"
          @set-props-query="setPropsQuery"
          @send-nodes-content-to-app="sendNodesContentToApp"
        />

      <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Add New Label </b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">

        <b-card>
          <Labels
              :labels="labels"
              :optionsLabels="optionsLabels"
              @get-label-nodes="getLabelNodes"
              @set-props-query="setPropsQuery"
              @get-labels="getLabels"
              @send-nodes-content-to-app="sendNodesContentToApp" />
        </b-card>
      </b-collapse>
    </b-card>
  </b-collapse>

   <b-collapse id="collapse-2" class="mt-2">
    <b-card>
        <edges-list/>
        <ConnectNodes
          :labels="labels"
          :optionsLabels="optionsLabels"
          :contentItems="contentItems"
          :RelationsItems="RelationsItems"
          @get-label-nodes="getLabelNodes"
          @get-relationship="getRelationship"
          @set-props-query="setPropsQuery"

      />

    </b-card>
  </b-collapse>

    <NeoVis :propsQuery="propsQuery"  @get-label-nodes="getLabelNodes" @delete-neo4j="deleteNeo4j"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import EdgesList from '@/components/EdgesList.vue'
import Labels from '@/components/Labels.vue'
import Nodes from '@/components/Nodes.vue'
import ConnectNodes from '@/components/ConnectNodes.vue'
import NeoVis from '@/components/NeoVis.vue'

export default {
  name: 'Home',
  components: {
    EdgesList,
    Labels,
    Nodes,
    ConnectNodes,
    NeoVis
  },
  props: {
    label_: {
      type: Array
    },
    labelText: {
      type: String
    },
    nodes: {
      type: Array
    },
    nodeContent: {
      type: Object
    }
  },
  data () {
    return {
      labels: [],
      nodeNames: [],
      nodeText: '',
      contentItems: [],
      nodeContentText: '',
      relationItems: [],
      RelationsItems: [],
      optionsLabels: [],
      // optionsNode1: [],
      relationOptions: [],
      propsQuery: ''
    }
  },
  created () {
    this.getLabels()
  },
  methods: {
    /* Lädt alle Labels
     * return Array
    */
    async getLabels () {
      console.log('Home.vue getLabels ()', this.labels)
      this.labels = []
      try {
        const response = await axios.get('http://localhost:5000/all-labels')
        // console.log('response.data.records', response.data.records)
        if (response.data.records.length > 0) {
          response.data.records.forEach((value, index) => {
            this.labels.push(value._fields[0][0])
          })
        } else {
          this.nodeText = 0
        }
      } catch (err) {
        console.log(err)
      }
    },

    // Get All Nodes from a Label Neo4j
    async getLabelNodes (label) {
      console.log('Home.vue getLabelNodes() =>  ', label)
      this.contentItems = []
      this.nodeNames = []
      this.nodeContentText = label
      this.nodeText = label
      this.$emit('check-labels-text', label)
      if (label === '') {
        console.log('home methods getLabelNodes  IST LEHR ')
        return
      }
      try {
        const response2 = await axios.post('http://localhost:5000/all-nodes', {
          node: this.nodeText
        })
        // console.log('getLabelNodes response2', response2.data.records)
        response2.data.records.forEach((value, index) => {
          this.contentItems.push(value._fields[0].properties)
          this.nodeNames.push(value._fields[0].properties.name)
          // console.log(value._fields[0].properties)
          // console.log(index)
        })
        this.$emit('check-node-array', this.nodeNames)
      } catch (err) {
        console.log(err)
      }
    },

    // Get All Relationship Types in  Neo4j
    async getRelationship () {
      console.log('Home.vue getRelationship()')
      // this.relationItems = []
      try {
        const response = await axios.get('http://localhost:5000/all-relationships')

        // console.log('getRelationship response => ', response)
        // console.log('getRelationship response.data => ', response.data)
        console.log('getRelationship response.data.records => ', response.data.records)
        this.relationItems = response.data.records
      } catch (err) {
        console.log(err)
      }
    },

    setPropsQuery (label, node, query) {
      console.log('Home.vue setPropsQuery() => ')
      // console.log('home methods setPropsQuery (label) => ', label)
      // console.log('setPropsQuery (node) => ', node)
      this.propsQuery = { label, node, query }
      // console.log('this.propsQuery => []', this.propsQuery)
    },

    deleteNeo4j (neovis) {
      console.log('delete all in DATABASE HOME')

      this.$bvModal.msgBoxConfirm('ACHTUNG!Es wird die Database gelöscht! Alle Daten!! Bist du dir sicher?')
        .then(value => {
          try {
            const response = axios.post('http://localhost:5000/delete-all')
            console.log(response)
            neovis.reload()
          } catch (err) {
            console.log(err)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },

    sendNodesContentToApp (item, label) {
      // this.nodes = item
      this.$emit('check-nodes-content', item, label)
    }

  },
  watch: {
    relationItems: function () {
      this.RelationsItems = []
      // this.relationOptions = []
      console.log('home watch relationItems', this.relationItems)
      if (this.relationItems) {
        this.relationItems.forEach((value, index) => {
          this.RelationsItems.push(value._fields[0])
          console.log(value._fields[0])
        // console.log(index)
        })
        console.log('RelationsItems', this.RelationsItems)
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
