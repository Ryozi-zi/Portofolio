<template lang="html">
  <div class="sidebar">
    <nav>
      <router-link to="/"><h1>Ryoji<br>Kono</h1></router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/works">Works</router-link>
      <router-link to="/skills">Skills</router-link>
    </nav>
    <ul>
      <li>Twitter</li>
      <li>Facebook</li>
      <li>Github</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'sideBar',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.sidebar{
  position: absolute;
  top: 50px;
  left: 50px;
  font-size: 1.5rem;
}
</style>
