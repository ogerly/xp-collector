<template>
    <div class="component-node">
        Unterknoten für
            <h2>{{nodeContentText}}</h2>
               <div>
            <b-input-group
              class="mb-3"
              prepend="Content"
            >
              <b-form-input v-model="nodeContentAddText"></b-form-input>
              <b-input-group-append>
                <b-button size="sm" text="Button" variant="success" @click="$emit('save-node', nodeContentAddText)">save</b-button>
                <b-button size="sm" text="Button" variant="danger" >delete</b-button>
                <b-button size="sm" text="Button" variant="warning" >update</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
            <hr>
             <ul>
            <li v-for="item in contentItems" :key="item.id"><div >{{item}}</div></li>
          </ul>

    </div>
</template>
<script>
export default {
  name: 'nodes',
  props: {
    nodeContentText: {
      type: String
    },
    nodeContentAddText: {
      type: String
    },
    contentItems: {
      type: Array
    }
  },
  data () {
    return {

    }
  }
}
</script>
