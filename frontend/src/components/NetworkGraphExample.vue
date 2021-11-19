<template>
  <div id="graph" ref="graphDiv" class="container" style="overflow: hidden;">
   <div class="alert alert-info" role="alert">Test: ohne bezug zu realistischen Daten aus der Datenbank </div>

    <network :nodeList="nodes" :linkList="links" :svgSize="svgSize"  ></network>
    <hr />
  </div>
</template>

<script>
import Network from 'vue-network-d3'

export default {
  name: 'app',
  components: {
    Network
  },
  data () {
    return {
      nodes: [
        { id: 'Myriel', group: 1 },
        { id: 'Napoleon', group: 1 },
        { id: 'Labarre', group: 2 },
        { id: 'Valjean', group: 2 }
      ],
      links: [
        { source: 'Napoleon', target: 'Myriel', value: 1 },
        { source: 'Valjean', target: 'Labarre', value: 1 },
        { source: 'Napoleon', target: 'Valjean', value: 2 }
      ],
      svgSize: {
        width: 1000,
        height: 800
      }
      // svgTheme: 'dark'
    }
  },
  methods: {
    matchWidth () {
      this.svgSize.width = this.$refs.graphDiv.clientWidth
    }
  },
  mounted () {
    this.matchWidth()
  }
}
</script>

<style>
body {
  margin: 0;
}
network > svg {
      background-color: #cff4fc;
}
</style>
