<template>
  <div id="app">
    <div class="container">
      <side-bar></side-bar>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
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

.container{
  display: grid;
  grid-template-columns: 200px 1fr;
}

.sidebar{
  grid-column: 1/2;
}

.main{
  grid-column: 2/3;
}
</style>
