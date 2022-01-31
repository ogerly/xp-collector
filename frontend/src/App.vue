<template>
  <div id="app" class="m-3">
    <!--
    <div id="nav"  class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/api">Api</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <small>vue: 2.6.12, bootstrap: 4.5.3, bootstrap-vue: 2.21.2, neovis.js: 2.0.0-alpha.9</small>
  </div>
</template>

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
</style>
