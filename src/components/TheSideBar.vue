<template lang="html">
  <div class="sidebar">
    <nav>
      <router-link class="home" to="/"><h1>Ryoji<br>Kono</h1></router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/works">Works</router-link>
    </nav>
    <div class="contact">
      <a href="#" class="twitter"><div class="button fab fa-twitter"></div></a>
      <a href="#" class="facebook"><div class="button fab fa-facebook"></div></a>
      <a href="#" class="github"><div class="button fab fa-github"></div></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSideBar'

}
</script>

<style lang="css">
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
