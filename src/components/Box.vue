<template lang="html">
  <div class="work-box">
    <h2>{{contents.name}}</h2>
    <p>{{contents.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'box',
  props: ['contents']
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.work-box{
  @include box(300px, 300px);
}
</style>
