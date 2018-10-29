<template>
  <div id="app">
    <sideBar></sideBar>
    <router-view></router-view>
  </div>
</template>

<script>
import sideBar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    sideBar
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
