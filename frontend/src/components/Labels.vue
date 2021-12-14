<template>
    <div class="component-labels">
         <div >Labels</div>
          <div>
            <b-input-group
              class="mb-3"
              prepend="Knoten"
            >
              <b-form-input v-model="nodeText"></b-form-input>
              <b-input-group-append>
                <b-button size="sm" text="Button" variant="success" @click="$emit('save-label', nodeText)">save</b-button>
                <b-button size="sm" text="Button" variant="danger" >delete</b-button>
                <b-button size="sm" text="Button" variant="warning">update</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>

          <hr>
          <!--{{nodeItems}}-->
          <ul>
            <li v-for="item in nodeItems" :key="item.id"><div @click="$emit('edit-node', item._fields[0][0])">{{item._fields[0][0]}}</div></li>
          </ul>
    </div>
</template>
<script>
export default {
  name: 'labels',
  props: {
    nodeText: {
      type: String
    },
    nodeItems: {
      type: Array
    }
  },
  data () {
    return {

    }
  }
}
</script>
