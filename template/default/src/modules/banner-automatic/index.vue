<template>
<div class="banner-automatic">
  <van-swipe :autoplay="3000" :indicator-color="indicatorColor">
    <van-swipe-item v-for="(item, index) in items" :key="index" @click="handleClick(item)">
      <img class="swipe-img" v-lazy="item.cover" />
    </van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe).use(SwipeItem)

export default {
  props: ['mid', 'initData'],
  data () {
    return this.initData || {
      indicatorColor: 'black',
      items: [{
        action: 'http://www.baidu.com/',
        cover: 'https://img.yzcdn.cn/vant/apple-1.jpg'
      }]
    }
  },
  methods: {
    handleClick (item) {
      item.action && this.$emit('handleAction', item.action)
    }
  }
}
</script>

<style scoped>
.banner-automatic .van-swipe {
  cursor: pointer;
}
.banner-automatic .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.banner-automatic .van-swipe img {
  display: block;
  box-sizing: border-box;
  width: 100%;
  pointer-events: none;
}
.banner-automatic--vertical .van-swipe-item {
  line-height: 200px;
}
.banner-automatic .custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  color: #fff;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>