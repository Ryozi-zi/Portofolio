<template lang="html">
  <div class="about">
    <h1 class="title">About</h1>
    <h2>河野遼二</h2>
    <p>1997年東京生まれ。スウェーデン在住（2018年12月上旬帰国予定）。</p>
    <p>国際教養大学グローバル・ビジネス課程在学。</p>
    <p>大学入学後にプログラミングを独学で学び、HTMLとCSSの基礎を身に着けました。現在Javascript/Vue.jsを学習中です。</p>
    <p>まだまだ未熟なので様々な経験を積みたいと思っています。</p>
    <p>将来はユーザー目線を大事にできるフロントエンドエンジニアになりたいと考えています。</p>
    <h2>Skills</h2>
    <p class="skills">English/HTML/CSS/Javascript,Vue.js（学習中）</p>
    <h2>Interest</h2>
    <p>UI/UX/Economics/misdirection/Editorial Design</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.title{
  @include title;
}

p{
  line-height: 1.5;
  overflow-wrap: break-word;
  margin: 0;
}

.about{
  @include container;
}
</style>
