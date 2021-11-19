<template>
  <div class="home">
    <CollectorWorld />
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
