<template>
  <div id="app">
    <div class="container">
      <i class="fa fa-bars" id="sp_button" @click="show=!show"></i>
      <transition name="side">
        <side-barsp v-show="show" @change="show=!show"></side-barsp>
      </transition>
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
import TheSideBarsp from './components/TheSideBarsp.vue'

export default {
  name: 'App',
  components: {
    'side-bar': TheSideBar,
    'side-barsp': TheSideBarsp
  },
  data () {
    return {
      show: false
    }
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

#sp_button{
  display: none;
}

.side-enter-active, .side-leave-active{
  transition: transform 1s;
}

.side-enter{
  transform: translateX(100vw);
}

.side-leave-to{
  transform: translateX(100vw);
}

@media (max-width: 480px){
  .container{
    display: block;
    position: relative;
  }

  .main{
    padding: 0 30px;
  }

  .v-enter-active, .v-leave-active{
    transition: opacity 0.2s;
  }

  #sp_button{
    position: absolute;
    top: 0;
    right: 35px;
    display: inline-block;
    font-size: 2.5rem;
  }
}
</style>
