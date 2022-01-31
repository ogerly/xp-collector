<template>
  <div class="hello w-100" >
    collectorworld
    <b-container fluid class="w-100 bv-example-row border mb-4 mt-4 p-2">
      <b-row>
        <b-col cols="7" class="border2">
          Labels
          <hr>
          <ul>
            <li v-for="item in nodeItems" :key="item.id"  @click="$emit('get-label-nodes',item._fields[0][0])"><div>{{item._fields[0][0]}}</div></li>
          </ul>
        </b-col>
        <b-col  cols="5" class="border3">
          <div class="">Kanten / Verbindung</div>
          <div v-show="editBox">

            {{query}}
            <div @click="editBox = false">schließen</div>
            </div>
          <b-badge @click="editRelationship(item)" v-for="item in RelationsItems" :key="item.id" pill variant="secondary">{{item}}</b-badge>
        </b-col>
      </b-row>
      <br>
      <b-row class="mt-4">
        <b-col id="col-label" :data-label="nodeContentText">
          Knoten für Label : {{nodeContentText}}
          <hr>
           <ul>
            <li v-for="item in contentItems" :key="item.id" @click="$emit('set-props-query', nodeContentText, item.name, '')"><div >{{item.name}}</div></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>

export default {
  name: 'Overview',
  components: {
  },
  props: {
    nodeItems: {
      type: Array
    },
    RelationsItems: {
      type: Array
    },
    contentItems: {
      type: Array
    },
    nodeContentText: {
      type: String
    }
  },
  data () {
    return {
      editBox: false,
      editItem: '',
      query: ''
    }
  },
  created () {
    this.$emit('get-relationship')
  },
  methods: {
    editRelationship (item) {
      this.editBox = true
      console.log(this.item)
      this.editItem = item
      this.query = 'MATCH (n)-[r:' + this.editItem + ']-(b) DELETE r'
    }
  }
}
</script>
<style scoped>
.badge {
  color:black;
}
</style>
