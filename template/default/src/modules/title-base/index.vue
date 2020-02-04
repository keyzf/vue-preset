<template>
<div class="title-base">
  <h1><slot>{{title}}</slot></h1>
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
      title: '我是普通的标题'
    }
  }
}
</script>

<style scoped>
.title-base h1 {
  font-size: 20px;
  text-align: center
}
</style>