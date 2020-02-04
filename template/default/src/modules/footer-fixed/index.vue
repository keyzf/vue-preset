<template>
<div class="footer-fixed">
  <div class="contianer"><img class="cover" v-lazy="src" /></div>
  <div class="padding"><img class="cover" v-lazy="src" /></div>
</div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant'

Vue.use(Lazyload)

export default {
  props: ['mid', 'initData'],
  data () {
    return this.initData || {
      src: 'https://img.yzcdn.cn/vant/apple-1.jpg'
    }
  }
}
</script>

<style scoped>
.footer-fixed .contianer {
  z-index: 8000;
  bottom: 0;
  position: fixed;
}
.cover {
  display: block;
  width: 100%;
}
</style>