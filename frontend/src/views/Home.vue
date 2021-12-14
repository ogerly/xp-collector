<template>
  <div class="home">

      <b-tabs content-class="mt-3" align="center">
    <b-tab title="Knoten" active><CollectorWorld /></b-tab>
    <b-tab title="Abi"><p>I'm the second tab</p></b-tab>
    <b-tab title="About" ><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>

    <NetworkGraphExample />
  </div>
</template>

<script>
// @ is an alias to /src
import CollectorWorld from '@/components/CollectorWorld.vue'
import NetworkGraphExample from '@/components/NetworkGraphExample.vue'

export default {
  name: 'Home',
  components: {
    CollectorWorld,
    NetworkGraphExample
  }
}
</script>
