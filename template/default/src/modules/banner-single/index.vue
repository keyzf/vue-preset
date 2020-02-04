<template>
<div>
  <img class="cover" v-lazy="src" @click="handleClick" />
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
      src: 'https://img.yzcdn.cn/vant/apple-1.jpg',
      action: ''
    }
  },
  watch: {
    "initData.state" (newVal, OldVal) {
      console.log('state changed', newVal, OldVal)
    }
  },
  methods: {
    handleClick () {
      this.action && this.$emit('handleAction', this.action)
    }
  }
}
</script>

<style scoped>
.cover {
  display: block;
  width: 375px;
}
</style>