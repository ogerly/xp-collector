<template>
  <div class="component-labels">
    <div>Labels</div>
    <div>
      <b-input-group class="mb-3" prepend="Knoten">
        <b-form-input v-model="labelText"></b-form-input>
        <b-input-group-append>
          <b-button size="sm" text="Button" variant="success" @click="saveLabel"
            >save</b-button
          >
          <b-button
            size="sm"
            text="Button"
            variant="danger"
            @click="deleteEmptyLabel"
            >delete</b-button
          >
          <b-button size="sm" text="Button" variant="warning">update</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <hr />
    <ul>
      <li v-for="item in labels" :key="item.id">
        <div @click="clickLabel(item)">{{ item }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'labels',
  props: {
    labels: {
      type: Array
    }
  },
  data () {
    return {
      labelText: ''
    }
  },
  methods: {
    // Create New Label Neo4j
    async saveLabel () {
      console.log('Labels.vue saveLabel()')
      this.labelText = this.labelText.replace(/ /i, '_')
      if (this.labelText === '') {
        alert('lehr ABBRUCH')
        return
      }
      try {
        await axios.post('http://localhost:5000/new-label', {
          node_text: this.labelText
        })
        this.labelText = ''
        this.$emit('get-labels', this.labelText)
      } catch (err) {
        console.log(err)
      }
    },
    // Edit Nodes Neo4j
    clickLabel (label) {
      console.log('Labels.vue clickLabel() ')
      // this.label = label
      // console.log(label)
      this.labelText = label
      this.$emit('get-label-nodes', label)
      this.$emit('set-props-query', label, '', 'LABEL')
    },

    // Create New Label with Node Neo4j
    async deleteEmptyLabel () {
      console.log('Labels.vue deleteEmptyLabel() ')
      this.labelText = this.labelText.replace(/ /i, '_')
      if (this.labelText === '') {
        alert('lehr ABBRUCH')
        return
      }
      try {
        await axios.post('http://localhost:5000/delete-empty-label', {
          node: this.labelText
        })
        this.$emit('get-labels')
        this.$emit('get-label-nodes', '')
        this.labelText = ''
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
