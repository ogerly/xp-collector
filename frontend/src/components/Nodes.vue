<template>
    <div class="component-node">
     <hr>
        Unterknoten für
            <h2 id="col-label">{{nodeContentText}}</h2>
               <div>
            <b-input-group
              class=""
              prepend="name"
            >
              <b-form-input v-model="nodeContentAddName"></b-form-input>
              <b-input-group-append>
              </b-input-group-append>
            </b-input-group>
            <b-input-group
              class=""
              prepend="info"
            >
              <b-form-input v-model="nodeContentAddInfo"></b-form-input>
              <b-input-group-append>
              </b-input-group-append>
            </b-input-group>
            <b-input-group
              class="mb-3"
              prepend="image"
            >
              <b-form-input v-model="nodeContentAddImg"></b-form-input>
              <b-input-group-append>
                <b-button size="sm" text="Button" variant="success" @click="saveNode(nodeContentAddName)">save</b-button>
                <b-button size="sm" text="Button" variant="danger" @click="deleteNode(nodeContentAddName)">delete</b-button>
                <b-button size="sm" text="Button" variant="warning" >update</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
            <hr>
             <ul>
            <li v-for="item in contentItems" :key="item.id" @click="clickNode(nodeContentText, item)"><div >{{item.name}}</div></li>
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
    contentItems: {
      type: Array
    },
    nodes: {
      type: Array
    },
    nodeContent: {
      type: Object
    },
    labels: {
      type: Array
    }
  },
  data () {
    return {
      nodeContentAddName: '',
      nodeContentAddInfo: '',
      nodeContentAddImg: ''

    }
  },
  methods: {
    // Create New Label with Node Neo4j
    async saveNode (name) {
      console.log('saveNode name', name)

      this.nodeContentAddName = name.replace(/ /i, '_')
      if (this.nodeContentText === '') {
        alert('lehr ABBRUCH')
        return
      }
      try {
        await axios.post('http://localhost:5000/new-node', {
          // label: this.nodeContentText,
          node_label: this.nodeContentText,
          node_name: this.nodeContentAddName,
          node_info: this.nodeContentAddInfo,
          node_img: this.nodeContentAddImg
        })
        this.$emit('get-label-nodes', this.nodeContentText)
        this.getLabelNodes(this.this.nodeContentText)
        // this.nodeText = ''
        // this.nodeContentAddText = ''
      } catch (err) {
        console.log(err)
      }
    },
    async deleteNode (name) {
      console.log('deleteNode', name)
      try {
        await axios.post('http://localhost:5000/delete-node', {
          label: this.nodeContentText,
          name: name
        })
        this.$emit('get-label-nodes', this.nodeContentText)

        this.nodeContentAddName = ''
        this.nodeContentAddInfo = ''
        this.nodeContentAddImg = ''
      } catch (err) {
        console.log(err)
      }
    },
    async clickNode (label, item) {
      console.log('clickNode item', item)

      this.nodeContentAddName = item.name
      this.nodeContentAddInfo = item.info
      this.nodeContentAddImg = item.img

      this.$emit('set-props-query', this.nodeContentText, item.name, '')
      console.log('clickNode to  send-nodes-content-to-app', item)
      this.$emit('send-nodes-content-to-app', item, label)

      // try {
      //   const response = await axios.post('http://localhost:5000/show-node-data', {
      //     label: this.nodeContentText,
      //     name: item.name
      //   })
      //   console.log('clickNode response => ', response.data.records[0]._fields[0].properties)
      //   this.nodeContentAddName = response.data.records[0]._fields[0].properties.name
      //   this.nodeContentAddInfo = response.data.records[0]._fields[0].properties.info
      //   this.nodeContentAddImg = response.data.records[0]._fields[0].properties.img
      // } catch (err) {
      //   console.log(err)
      // }
    }
  }
}
</script>
