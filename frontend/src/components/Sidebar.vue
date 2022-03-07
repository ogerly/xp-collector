<template>
  <div>
    <b-sidebar
      id="sidebar-1"
      ref="sidebar-1"
      title="Sidebar"
      no-header
      shadow
      v-model="visible1"
      @change="setVisible"
    >
      <b-button variant="primary" block v-b-toggle="['sidebar-1']"
        >Close Sidebar</b-button
      >
      sibebar.vue

      <hr />
      labels {{ labels }}
      <hr />
      nodes {{ nodes }}
      <hr />

      labelsText {{ labelText }}
      <hr />
      <div class="px-3 py-2">
        <h3>{{ nodeContent.name }}</h3>
        <p>
          {{ nodeContent.info }}
        </p>

        <b-img :src="nodeContent.img" fluid thumbnail></b-img>
        <hr />
        nodeContent {{ nodeContent }}
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  components: {},
  props: {
    visible: {
      type: Boolean
    },
    navbarContent: {
      type: String
    },
    RelationsItems: {
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
    },
    labelText: {
      type: String
    }
  },
  data () {
    return {
      editBox: false,
      editItem: '',
      query: '',
      visible1: this.visible
    }
  },
  methods: {
    setVisible () {
      this.$emit('check-visible', this.visible1)
    }
  }
}
</script>
<style scoped>
.badge {
  color: black;
}
</style>
