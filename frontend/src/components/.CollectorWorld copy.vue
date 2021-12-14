<template>
  <div class="hello">
    <b-container class="bv-example-row border mb-4 mt-4 p-4">
      <b-row>
        <b-col class="border2">
          <div class="">Hauptknoten</div>
          <div>
            <b-input-group
              class="mb-3"
              prepend="Knoten"
            >
              <b-form-input v-model="nodeText"></b-form-input>
              <b-input-group-append>
                <b-button size="sm" text="Button" variant="success" @click="saveLabel">save</b-button>
                <b-button size="sm" text="Button" variant="danger" @click="deleteNode">delete</b-button>
                <b-button size="sm" text="Button" variant="warning" @click="updateNode">update</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>

          <hr>
          <!--{{nodeItems}}-->
          <ul>
            <li v-for="item in nodeItems" :key="item.id"><div @click="editNode">{{item._fields[0][0]}}</div></li>
          </ul>
        </b-col>
        <b-col class="border3">
          <div class="">Kanten / Verbindung</div>
          <div>
            <b-input-group
              class="mb-3"
              prepend="Kanten"
            >
              <b-form-input v-model="edgeText"></b-form-input>
              <b-input-group-append>
                <b-button size="sm" text="Button" variant="success" @click="saveEdge">save</b-button>
                <b-button size="sm" text="Button" variant="danger" @click="deleteEdge">delete</b-button>
                <b-button size="sm" text="Button" variant="warning" @click="updateEdge">update</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>

          <hr>
          <ul>
            <li v-for="item in edgeItems" :key="item.id"><div @click="editEdge" :data-id="item.id">{{item.name}}</div></li>
          </ul>
        </b-col>
      </b-row>
      <hr>
      <b-row class="border2">

        <b-col >
          <div show v-show="nodeContentText != ''" >
            Unterknoten für
            <h2>{{nodeContentText}}</h2>
               <div>
            <b-input-group
              class="mb-3"
              prepend="Content"
            >
              <b-form-input v-model="nodeContentAddText"></b-form-input>
              <b-input-group-append>
                <b-button size="sm" text="Button" variant="success" @click="saveNode">save</b-button>
                <b-button size="sm" text="Button" variant="danger" @click="deleteNodeContent">delete</b-button>
                <b-button size="sm" text="Button" variant="warning" @click="updateNodeContent">update</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
            <hr>
             <ul>
            <li v-for="item in contentItems" :key="item.id"><div @click="editNodeContent">{{item}}</div></li>
          </ul>

          </div>
        </b-col>

      </b-row>
    </b-container>
    <b-container class="border mt-4 mb-4 p-4">
      Bitte Wähle zwei Hauptknoten aus um die Unterknoten zu Verbinden.
      <b-row>
        <b-col>
          <label>Hauptknoten 1</label>
          <br>
          <b-form-select
            v-model="selectedLabel1"
            :options="optionsLabels"
            class="mb-3"
            value-field="Tables_in_demo_db"
            text-field="Tables_in_demo_db"
            disabled-field="notEnabled"
            @change="nodeConnection('node1')">
          </b-form-select>

        </b-col>
        <b-col>
          <label>Hauptknoten 2</label>
          <br>
          <b-form-select
            v-model="selectedLabel2"
            :options="optionsLabels"
            class="mb-3"
            value-field="Tables_in_demo_db"
            text-field="Tables_in_demo_db"
            disabled-field="notEnabled"
            @change="nodeConnection('node2')">
          </b-form-select>
        </b-col>
      </b-row>
      <b-container class="border4 p-3">
        <b-row>
          <b-col>
            <h3>{{ selectedLabel1 }}</h3>
              <label>Unterknoten 1 </label>
              <br>
          <b-form-select
            v-model="selectedSubNode1"
            :options="optionsSubNode1"
            class="mb-3"
            value-field="node_text"
            text-field="node_text"
            disabled-field="notEnabled"
             >
          </b-form-select>
          </b-col>
          <b-col>
            <h3>{{ selectedEdges }}</h3>
            <label>Kante / Verbindung</label>
              <br>
          <b-form-select
            v-model="selectedEdges"
            :options="optionsEdges"
            class="mb-3"
            value-field="name"
            text-field="name"
            disabled-field="notEnabled"
             >
          </b-form-select>
          </b-col>
          <b-col>
            <h3>{{ selectedLabel2 }}</h3>
             <label>Unterknoten 2</label>
             <br>
          <b-form-select
            v-model="selectedSubNode2"
            :options="optionsSubNode2"
            class="mb-3"
            value-field="node_text"
            text-field="node_text"
            disabled-field="notEnabled"
             >
          </b-form-select>
          </b-col>
        </b-row>
      </b-container>
    <b-container>
      <b-row>
        <b-col style="text-align:right">
          <span class="circ1" v-if="showNode1">
            <span class="text-middle">{{selectedSubNode1}}</span>
          </span></b-col>
        <b-col style="text-align:center">

          <span class="text-edge">{{selectedEdges}}</span>
          <hr v-if="showEdge" class="new5">
          </b-col>
        <b-col style="text-align:left">
          <span class="circ1" v-if="showNode2">
            <span class="text-middle">{{selectedSubNode2}}</span>
          </span>
        </b-col>
      </b-row>
      <br>
      <br>
      <br>
      <b-row >
        <b-col >
           <b-button block variant="primary" v-if="showNode1 && showEdge && showNode2">Verbindung speichern</b-button>
        </b-col>
      </b-row>
    </b-container>
    </b-container>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      nodeItems: [],
      nodeText: '',
      nodeContentItems: [],
      contentItems: [],
      nodeContentText: '',
      nodeContentAddText: '',
      edgeItems: [],
      edgeText: '',
      edgeTarget: {},
      optionsLabels: [],
      selectedLabel1: '',
      selectedLabel2: '',
      optionsNode1: [],
      selectedSubNode1: '',
      optionsSubNode1: [],
      selectedSubNode2: '',
      optionsSubNode2: [],
      selectedEdges: '',
      optionsEdges: [],
      showNode1: false,
      showEdge: false,
      showNode2: false
    }
  },
  created () {
    this.getLabels()
    this.getRelationship()
  },
  methods: {
    // Get All labels Neo4j
    async getLabels () {
      try {
        const response = await axios.get('http://localhost:5000/all-labels')
        this.nodeItems = response.data.records
        this.optionsNode1 = response.data.records
      } catch (err) {
        console.log(err)
      }
    },
    // Create New Label Neo4j
    async saveLabel () {
      this.nodeText = this.nodeText.replace(/ /i, '_')
      if (this.nodeText === '') {
        alert('lehr ABBRUCH')
        return
      }
      try {
        await axios.post('http://localhost:5000/new-label', {
          node_text: this.nodeText
        })
        this.nodeText = ''
        this.getLabels()
      } catch (err) {
        console.log(err)
      }
    },
    // Create New Label with Node Neo4j
    async saveNode () {
      this.nodeText = this.nodeText.replace(/ /i, '_')
      if (this.nodeText === '') {
        alert('lehr ABBRUCH')
        return
      }
      try {
        await axios.post('http://localhost:5000/new-node', {
          node: this.nodeText,
          node_text: this.nodeContentAddText
        })
        this.getLabelNodes(this.nodeText)
        this.nodeText = ''
      } catch (err) {
        console.log(err)
      }
    },

    // Edit Nodes Neo4j
    editNode (data) {
      console.log('EDIT NODE [' + data.target.innerText + '] ')
      console.log(data.target.innerText)
      this.nodeText = data.target.innerText
      this.nodeContentText = data.target.innerText
      this.getLabelNodes()
    },

    // Get All Nodes from a Label Neo4j
    async getLabelNodes () {
      console.log('getLabelNodes start ', this.nodeText)
      try {
        const response2 = await axios.post('http://localhost:5000/all-nodes', {
          node: this.nodeText
        })
        console.log('getLabelNodes response2', response2.data.records)
        this.nodeContentItems = response2.data.records
      } catch (err) {
        console.log(err)
      }
    },

    // Get All Relationship Types in  Neo4j
    async getRelationship () {
      try {
        console.log('<<<<< getRelationship >>>>>>')
        return
        // const response1 = await axios.get('http://localhost:5000/get-relationship')
        // this.edgeItems = response1.data
        // console.log(response1.data)
      } catch (err) {
        console.log(err)
      }
    },

    async nodeConnection (node) {
      // this.selectedSubNode1: '',
      // this.optionsSubNode1: [],
      console.log('nodeConnection start => ', node)
      if (node === 'node1') {
        console.log('nodeConnection Label 1', this.selectedLabel1)
        this.nodeText = this.selectedLabel1
        await this.getLabelNodes()
        this.optionsSubNode1 = this.contentItems
        this.showNode1 = true
      }
      if (node === 'node2') {
        console.log('nodeConnection Label 2', this.selectedLabel2)
        this.nodeText = this.selectedLabel2
        await this.getLabelNodes()
        this.optionsSubNode2 = this.contentItems
        this.showNode2 = true
      }

      await this.getRelationship()
      this.optionsEdges = this.edgeItems
    },

    async updateNodeContent () {
      alert('UPDATE NODE CONETENT ')
    },
    async editNodeContent () {
      alert('EDIT NODE CONETENT ')
    },

    async deleteNodeContent () {
      alert('DELETE NODE CONETENT ')
    },
    async updateEdge (data) {
      alert('UPDATE NODE')
    },
    async saveEdge (data) {
      alert('UPDATE NODE')
    },
    async updateNode (data) {
      alert('UPDATE NODE')
    },
    async deleteNode (data) {
      alert('UPDATE NODE')
    },
    async deleteEdge (data) {
      alert('UPDATE NODE')
    }

    /*
    // Delete Node MySql
    async deleteNode () {
      try {
        await axios.post('http://localhost:5000/dropNode', {
          node_text: this.nodeText
        })
        this.getLabels()
        this.nodeText = ''
      } catch (err) {
        console.log(err)
      }
    },

    // Update Nodes MySql
    updateNode (data) {
      alert('UPDATE NODE')
    },
    /*
    *
    *   EDGES
    *
    * */
    /*
    // Get All Edges MySql
    async getEdges () {
      try {
        const response1 = await axios.get('http://localhost:5000/edges')
        this.edgeItems = response1.data
        console.log(response1.data)
      } catch (err) {
        console.log(err)
      }
    },
    // Create New edge MySql
    async saveEdge () {
      this.edgeText = this.edgeText.replace(/ /i, '_')
      if (this.edgeText === '') {
        alert('lehr ABBRUCH')
        return
      }
      try {
        await axios.post('http://localhost:5000/edge', {
          edge_text: this.edgeText
        })
        this.edgeText = ''
        this.getEdges()
      } catch (err) {
        console.log(err)
      }
    },
    // Delete Node MySql
    async deleteEdge () {
      try {
        await axios.post('http://localhost:5000/deleteEdge', {
          id: this.edgeTarget.id
        })
        this.edgeTarget = {}
        this.edgeText = ''
        this.getEdges()
      } catch (err) {
        console.log(err)
      }
    },
    // Edit Nodes MySql
    editEdge (data) {
      alert('EDIT NODE [' + data.target.innerText + '] ')
      this.edgeTarget = { id: data.target.getAttribute('data-id'), text: data.target.innerText }
      console.log(this.edgeTarget)
      this.edgeText = this.edgeTarget.text
    },
    // Update Nodes
    updateEdge (data) {
      alert('UPDATE NODE')
    },
    */
    /*
    *
    *
    *  Node Content
    *
    */
    /*
    // Get All Node Content MySql
    async getNodeContents () {
      console.log('getNodeContents start ', this.nodeText)
      try {
        const response2 = await axios.post('http://localhost:5000/nodeContents', {
          node: this.nodeText
        })
        console.log(response2.data)
        this.nodeContentItems = response2.data
      } catch (err) {
        console.log(err)
      }
    },
    // Create New edge MySql
    async saveNodeContent () {
      this.edgeText = this.nodeContentAddText.replace(/ /i, '_')
      if (this.nodeContentAddText === '') {
        alert(this.nodeContentAddText)
        return
      }
      try {
        await axios.post('http://localhost:5000/createNodeContent', {
          node: this.nodeText,
          node_text: this.nodeContentAddText
        })
        this.nodeContentAddText = ''
        this.getNodeContents()
      } catch (err) {
        console.log(err)
      }
    },

    async updateNodeContent () {
      alert('UPDATE NODE CONETENT ')
    },
    async editNodeContent () {
      alert('EDIT NODE CONETENT ')
    },

    async deleteNodeContent () {
      alert('DELETE NODE CONETENT ')
    },
    */
    /*
    *
    *
    *  Node Connection MySql
    *
    */
    /*
    async nodeConnection (node) {
      // this.selectedSubNode1: '',
      // this.optionsSubNode1: [],
      console.log('nodeConnection start', node)
      if (node === 'node1') {
        console.log('nodeConnection Node 1', this.selectedNode1)
        this.nodeText = this.selectedNode1
        await this.getNodeContents()
        this.optionsSubNode1 = this.nodeContentItems
        this.showNode1 = true
      }
      if (node === 'node2') {
        console.log('nodeConnection Node 2', this.selectedNode1)
        this.nodeText = this.selectedNode2
        await this.getNodeContents()
        this.optionsSubNode2 = this.nodeContentItems
        this.showNode2 = true
      }

      await this.getEdges()
      this.optionsEdges = this.edgeItems
    }
    */
  },
  watch: {
    selectedEdges: function () {
      if (this.selectedEdges === '') {
        this.showEdge = false
      } else {
        this.showEdge = true
      }
    },
    optionsNode1: function () {
      // console.log('optionsNode1', this.optionsNode1)
      this.optionsNode1.forEach((value, index) => {
        this.optionsLabels.push(value._fields[0][0])
        // console.log(value._fields[0][0])
        // console.log(index)
      })
      console.log('selectedLabels', this.selectedLabels)
    },
    nodeContentItems: function () {
      this.contentItems = []
      console.log('nodeContentItems', this.nodeContentItems)
      this.nodeContentItems.forEach((value, index) => {
        this.contentItems.push(value._fields[0])
        console.log(value._fields[0])
        console.log(index)
      })
      console.log('contentItems', this.contentItems)
      return this.contentItems
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
