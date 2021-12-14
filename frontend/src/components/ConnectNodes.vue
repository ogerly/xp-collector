<template>
    <div>
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
          <b-col v-if="selectedLabel1 ">
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
export default {
  name: 'connect-nodes',
  props: {
    selectedLabel1: {
      type: String
    },
    selectedLabel2: {
      type: String
    },
    optionsLabels: {
      type: Array
    },
    selectedSubNode1: {
      type: String
    },
    selectedSubNode2: {
      type: String
    },
    optionsSubNode1: {
      type: Array
    },
    optionsSubNode2: {
      type: Array
    },
    showNode1: {
      type: Boolean
    },
    showNode2: {
      type: Boolean
    },
    selectedEdges: {
      type: String
    },
    showEdge: {
      type: Boolean
    }
  }
}
</script>
