<template>
  <div id="app" >

    <navbar
      :visible="visible1"
      :navbarContent="navbarContent"
      :class="visible?'visible':''"
      @check-navbar-content="checkNavbarContent"
    />
     <!-- node APP: {{nodes_}}-->
    <sidebar
      :visible="visible1"
      :navbarContent="navbarContent"
      :labels="label_"
      :labelText="labelText_"
      :nodes="nodes_"
      :nodeContent="nodeContent_"
      @check-visible="checkVisible" />

    <router-view
      :visible="visible1"
      :label_="label_"
      :labelText="labelText_"
      :nodes="nodes_"
      :nodeContent="nodeContent_"
      @check-labels-text="checkLabelsText"
      @check-nodes-content="checkNodesContent"
      @check-node-array="checkNodeArray"
      :class="(visible?'visible':'')"
      class="m-3"/>

    <small>vue: 2.6.12, bootstrap: 4.5.3, bootstrap-vue: 2.21.2, neovis.js: 2.0.0-alpha.9</small>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  },
  data () {
    return {
      visible1: false,
      navbarContent: '',
      label_: [],
      labelText_: '',
      nodes_: [],
      nodeContent_: {},
      edges_: []
    }
  },
  methods: {
    checkVisible (x) {
      console.log('APP.vue checkVisible', x)
      this.visible1 = x
    },
    checkNavbarContent (x) {
      console.log('App.vue checkNavbarContent', x)
      this.navbarContent = x
    },
    checkLabelsText (xlabel) {
      this.labelText_ = xlabel
    },
    checkNodeArray (xnodes) {
      console.log('App.vue checkNodeArray', xnodes)
      this.nodes_ = xnodes
    },
    checkNodesContent (x, xlabel) {
      console.log('App.vue checkNodesContent', x)
      console.log('App.vue checkNodesContent', xlabel)
      this.nodeContent_ = x
      this.labelText_ = xlabel
      // this.nodes = this.nodes_
    }
  },
  computed: {
    visible: function () {
      return this.visible1
    },
    nodes: function () {
      return this.nodes_
    },
    nodeContent: function () {
      return this.nodeContent_
    },
    labels: function () {
      return this.label_
    },
    labelText: function () {
      return this.labelText_
    }
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.visible {
  padding-left: 320px ;
}
</style>
