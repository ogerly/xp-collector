<template>
    <div class="component-node">
        Unterknoten für
            <h2>{{nodeContentText}}</h2>
               <div>
            <b-input-group
              class="mb-3"
              prepend="Content"
            >
              <b-form-input v-model="nodeContentAddText"></b-form-input>
              <b-input-group-append>
                <b-button size="sm" text="Button" variant="success" @click="saveNode(nodeContentText, nodeContentAddText)">save</b-button>
                <b-button size="sm" text="Button" variant="danger" >delete</b-button>
                <b-button size="sm" text="Button" variant="warning" >update</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
            <hr>
             <ul>
            <li v-for="item in contentItems" :key="item.id"><div >{{item}}</div></li>
          </ul>

    </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'nodes',
  props: {
    nodeContentText: {
      type: String
    },
    nodeContentAddText: {
      type: String
    },
    contentItems: {
      type: Array
    }
  },
  data () {
    return {

    }
  },
  methods: {
    // Create New Label with Node Neo4j
    async saveNode (label, node) {
      console.log('saveNode (' + label + ', ' + node + ')')
      this.nodeText = label
      this.nodeContentAddText = node.replace(/ /i, '_')
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
        this.nodeContentAddText = ''
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
