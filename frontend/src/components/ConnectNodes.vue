<template>
    <div>
      ConnectNodes
        <b-container class="border mt-4 mb-4 p-4">
      Bitte Wähle zwei Hauptknoten aus um die Unterknoten zu Verbinden.
      <b-row>
        <b-col>
          <label>Label 1</label>
          <br>
          <b-form-select
            v-model="selectedLabel1"
            :options="optionsLabels"
            class="mb-3"
            value-field="name"
            text-field="name"
            disabled-field="notEnabled"
            @change="nodeConnection1()">
          </b-form-select>

        </b-col>
        <b-col>
          <label>Label 2</label>
          <br>
          <b-form-select
            v-model="selectedLabel2"
            :options="optionsLabels"
            class="mb-3"
            value-field="name"
            text-field="name"
            disabled-field="notEnabled"
            @change="nodeConnection2()">
          </b-form-select>
        </b-col>
      </b-row>
      <b-container class="border4 p-3">
        <b-row>
          <b-col v-if="selectedLabel1 ">
            <h3>{{ selectedLabel1 }}</h3>
            <label>Knoten 1 </label>
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
          <b-col v-if="selectedLabel1 && selectedLabel2">
            <h3>{{ selectedEdges }}</h3>
            <label>Kante / Verbindung</label>
            <br>
            <b-form-select
              v-model="selectedEdges"
              :options="relationOptions"
              class="mb-3"
              value-field="name"
              text-field="name"
              disabled-field="notEnabled"
              >
            </b-form-select>
          <b-input v-model="selectedEdges" type="text"></b-input>
          </b-col>
          <b-col v-if="selectedLabel2">
            <h3>{{ selectedLabel2 }}</h3>
             <label>Knoten 2</label>
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
           <b-button
           v-if="selectedLabel1 && selectedEdges && selectedLabel2"
           block
           variant="primary"
           @click="saveNodeRelations"
           >Verbindung speichern</b-button>
        </b-col>
      </b-row>
    </b-container>
    </b-container>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'connect-nodes',
  props: {
    optionsLabels: {
      type: Array
    },
    contentItems: {
      type: Array
    },
    RelationsItems: {
      type: Array
    }
  },
  data () {
    return {
      nodeText: '',
      selectedLabel1: '',
      selectedLabel2: '',
      selectedSubNode1: '',
      selectedSubNode2: '',
      optionsSubNode1: [],
      optionsSubNode2: [],
      showNode1: false,
      showNode2: false,
      selectedEdges: '',
      showEdge: false,
      relationOptions: []
    }
  },
  methods: {
    async nodeConnection1 () {
      console.log('nodeConnection1')
      // console.log('this.selectedLabel1 => ', this.selectedLabel1)
      try {
        const response2 = await axios.post('http://localhost:5000/all-nodes', {
          node: this.selectedLabel1
        })
        // console.log('getLabelNodes response2', response2.data.records)
        this.optionsSubNode1 = []

        response2.data.records.forEach((value, index) => {
          this.optionsSubNode1.push(value._fields[0].properties.name)
          // console.log(value._fields[0])
          // console.log(index)
        })

        // this.optionsSubNode1 = this.contentItems
        console.log('>>>>> this.optionsSubNode1 =>', this.optionsSubNode1)
        this.showNode1 = true
      } catch (err) {
        console.log(err)
      }

      // await this.getRelationship()
      if (this.showNode1 && this.showNode2) {
        await this.$emit('get-relationship')
        this.relationOptions = this.RelationsItems
      }
    },

    async nodeConnection2 () {
      console.log('nodeConnection2 start')
      // console.log('this.selectedLabel2 => ', this.selectedLabel2)

      console.log('nodeConnection Label 2', this.selectedLabel2)
      const query = 'MATCH (a:' + this.selectedLabel1 + '), (aa:' + this.selectedLabel2 + '), (b:' + this.selectedLabel1 + ')-[r]-(c:' + this.selectedLabel2 + ') RETURN a,aa,b,r,c'
      // alert(this.selectedLabel1 + ' ' + this.selectedLabel2)
      console.log('query', query)

      // this.nodeText = this.selectedLabel2
      // await this.getLabelNodes()
      this.$emit('set-props-query', '', '', query)
      try {
        const response2 = await axios.post('http://localhost:5000/all-nodes', {
          node: this.selectedLabel2
        })
        // console.log('getLabelNodes response2', response2.data.records)
        this.optionsSubNode2 = []

        response2.data.records.forEach((value, index) => {
          this.optionsSubNode2.push(value._fields[0].properties.name)
          // console.log(value._fields[0])
          // console.log(index)
        })

        // this.optionsSubNode1 = this.contentItems
        console.log('>>>>> this.optionsSubNode2 =>', this.optionsSubNode2)
        this.showNode2 = true
      } catch (err) {
        console.log(err)
      }

      // await this.getRelationship()
      if (this.showNode1 === true && this.showNode2 === true) {
        await this.$emit('get-relationship')
        this.relationOptions = this.RelationsItems
      }
    },

    async saveNodeRelations () {
      if (this.selectedLabel1 === '') return alert('selectedLabel1 ist leer')
      if (this.selectedLabel2 === '') return alert('selectedLabel2 ist leer')
      if (this.selectedSubNode1 === '') return alert('selectedSubNode1 ist leer')
      if (this.selectedSubNode2 === '') return alert('selectedSubNode2 ist leer')
      if (this.selectedEdges === '') return alert('selectedEdges ist leer')

      try {
        await axios.post('http://localhost:5000/save-nodes-relations', {
          label1: this.selectedLabel1,
          label2: this.selectedLabel2,
          node1: this.selectedSubNode1,
          node2: this.selectedSubNode2,
          relations: this.selectedEdges
        })
        // this.getLabelNodes(this.nodeText)
        // this.nodeText = ''
        this.selectedLabel1 = ''
        this.selectedLabel2 = ''
        this.selectedSubNode1 = ''
        this.selectedSubNode2 = ''
        this.selectedEdges = ''
      } catch (err) {
        console.log(err)
      }
    }
  },
  watch: {
    selectedEdges: function () {
      if (this.selectedEdges === '') {
        this.showEdge = false
      } else {
        this.showEdge = true
      }
    }
  }
}
</script>
