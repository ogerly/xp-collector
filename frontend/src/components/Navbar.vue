<template>
 <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" v-b-toggle="['sidebar-1']">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"  v-b-toggle="['collapse-1']" @click="setNavbarContent('label_node')">Label & Knoten</b-nav-item>
        <b-nav-item href="#" v-b-toggle="['collapse-2']" @click="setNavbarContent('edge')">Kanten</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="MATCH (n) RETURN n"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">query Neo4j</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  components: {
  },
  props: {
    visible: {
      type: Boolean
    },
    navbarContent: {
      type: String
    },
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
    // editRelationship (item) {
    //   this.editBox = true
    //   console.log(this.item)
    //   this.editItem = item
    //   this.query = 'MATCH (n)-[r:' + this.editItem + ']-(b) DELETE r'
    // },
    setNavbarContent (x) {
      console.log('setNavbarContent', x)
      // this.$emit('check-navbar-content', x)
    }
  }
}
</script>
<style scoped>
.badge {
  color:black;
}
</style>
