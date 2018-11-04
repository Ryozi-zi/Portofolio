<template>
  <div id="app">
    <div class="container">
      <side-bar></side-bar>
      <div class="main">
        <transition mode="out-in">
          <router-view />
        </transition>
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
@import './assets/styles/color.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 7.5vh;
}

body{
  height: 100%;
  width: 100%;
  margin: 0 0 25px 0;
  background-color: $baseColor;
}

.v-enter-active, .v-leave-active{
  transition: opacity 0.7s;
}

.v-enter{
  opacity: 0;
}

.v-enter-to{
  opacity: 1;
}

.v-leave{
  opacity: 1;
}

.v-leave-to{
  opacity: 0;
}

.container{
  display: grid;
  grid-template-columns: 250px 1fr;
}

.main{
  padding: 0 75px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  grid-column: 2/3;
}

@media (max-width: 480px){
  .container{
    display: block;
  }

  .sidebar{
    display: none;
  }

  .main{
    padding: 0 30px;
  }
}
</style>
