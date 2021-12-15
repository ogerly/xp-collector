<template>
  <div class="hello w-100" >
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
          <hr>
          <ul>
            <li v-for="item in RelationsItems" :key="item.id"><div :data-id="item.id">{{item}}</div></li>
          </ul>
        </b-col>
      </b-row>
      <br>
      <b-row class="mt-4">
        <b-col>
          Knoten
          <hr>
           <ul>
            <li v-for="item in contentItems" :key="item.id"><div >{{item}}</div></li>
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
    }
  }
}
</script>
