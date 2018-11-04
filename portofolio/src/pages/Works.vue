<template lang="html">
  <div class="works">
    <h1 class="title">Works</h1>
    <div class="work-boxes">
      <box v-for='work in works' :contents="work" v-bind:key="work.id">
      </box>
    </div>
  </div>
</template>

<script>
import box from '../components/Box.vue'

export default {
  components: {
    box
  },
  data () {
    return {
      works: [
        { id: 1,
          name: 'This Portofolio site',
          content: 'Vue.jsを学びSPAでポートフォリオサイトを作ってみたいと思い作成しました。'},
        {
          id: 2,
          name: 'Working in Progress',
          content: 'これからまだまだ作成していきます。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

.works{
  @include container;
}

.work-boxes{
  width: 100%;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.title{
  @include title;
}

@media (max-width: 480px){
  .works{
    text-align: center;
  }
}
</style>
