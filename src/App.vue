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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 7.5vh;
}

body{
  height: 100%;
  margin: 0;
}

.container{
  text-align: center;
  display: grid;
  grid-template-columns: 250px 1fr;
}

.sidebar{
  grid-column: 1/2;
  border-right: 2px solid rgba(0, 0, 0, 0.5);
}

.main{
  grid-column: 2/3;
}
</style>
