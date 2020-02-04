<template>
<page>
  <title-base mid="tb0"></title-base>
  <v-frames mid="vf0"></v-frames>
  <banner-single mid="bs0" @handleAction="handleAction" />
  <banner-single mid="bs1" :initData="banner" @handleAction="handleAction" />
  <banner-automatic mid="ba1" @handleAction="handleAction" />
  <!-- <footer-fixed /> -->
</page>
</template>

<script>
import Page from '@/components/page'

// process.env.BASE_URL

export default {
  components: {
    Page,
  },
  data () {
    return {
      imgsLoaded: false,
      banner: {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png',
        state: 0
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.banner.src = 'https://gw.alipayobjects.com/zos/rmsportal/pzoCYogAwWhhwskxWcRa.png'
      this.banner.state = 1
    }, 2000)
  }
}
</script>