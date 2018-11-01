<template>
  <div id="app">
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TheSideBar from './components/TheSideBar.vue'

export default {
  name: 'App',
  components: {
    'side-bar': TheSideBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
