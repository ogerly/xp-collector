<template>
  <div class="hello w-100">
    edgelist
    <b-container fluid class="w-100 bv-example-row border mb-4 mt-4 p-2">
      <b-row>
        <b-col class="border3">
          <div class="">Kanten / Verbindung</div>
          <div v-show="editBox">
            {{ query }}
            <div @click="editBox = false">schließen</div>
          </div>
          <b-badge
            @click="editRelationship(item)"
            v-for="item in RelationsItems"
            :key="item.id"
            pill
            variant="secondary"
            >{{ item }}</b-badge
          >
        </b-col>
      </b-row>
      <br />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  components: {},
  props: {
    RelationsItems: {
      type: Array
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
  color: black;
}
</style>
