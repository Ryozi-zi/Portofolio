<template lang="html">
  <div class="sidebar">
    <i id="close_button" @click="showChange" class="fa fa-close"></i>
    <nav>
      <router-link v-on:click.native="showChange" class="home" to="/"><h1>Ryoji<br>Kono</h1></router-link>
      <router-link v-on:click.native="showChange" class="sidenav" to="/about">About</router-link>
      <router-link v-on:click.native="showChange" class="sidenav" to="/works">Works</router-link>
    </nav>
    <div class="contact">
      <a href="https://twitter.com/Ryozi_zi" class="twitter" target="_blank"><div class="button fab fa-twitter"></div></a>
      <a href="https://www.facebook.com/kouno.ryouzi" class="facebook" target="_blank"><div class="button fab fa-facebook"></div></a>
      <a href="https://github.com/Ryozi-zi" class="github" target="_blank"><div class="button fab fa-github"></div></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSideBar',
  methods: {
    showChange: function () {
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/color.scss';
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

.sidebar{
  display: none;
  margin: 0;
  text-align: center;
}

a{
  color: #000;
  text-decoration: none;
}

.sidenav{
  padding: 12px 20px;
  display: inline-block;
  width: 100%;
  font-size: 1.5rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition-property: background;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  &:hover{
    background-color: rgba(107, 255, 131, 0.5);
  }
}

.home{
  background-color: $baseColor;
  font-size: 1.8rem;
  line-height: 2.4rem;
}

.contact{
  position: absolute;
  width: 100%;
  bottom: 30px;
  left: 50%;
  font-size: 2rem;
  transform: translateX(-50%);
  display: inline-block;
}

.button{
  display: inline-block;
  padding-left: 10px;
}

.twitter{
  padding-left: 0;
  &:hover{
    color: rgb(29, 161, 242);
  }
}

.facebook{
  &:hover{
    color: rgb(59, 89, 152);
  }
}

.github{
  &:hover{
    color: #333;
  }
}

#close_button{
  display: inline-block;
  font-size: 2.5rem;
  position: absolute;
  top: 7.5vw;
  right: 35px;
}

@media (max-width: 480px){
  .sidebar{
    width: 100vw;
    height: 100vh;
    border-style: none;
    display: block;
    position: fixed;
    background-color: $baseColor;
    top: 0;
    z-index: 100;
  }

  .contact{
    bottom: 25%;
  }

  h1{
    margin-top: 90px;
  }

  .sidenav{
    font-size: 2rem;
    padding: 16px 20px;
  }

  .contact{
    font-size: 3rem;
  }
}
</style>
