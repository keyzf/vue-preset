<template>
  <div class="vframes" ref="vframe" @click="play"></div>
</template>

<script>
const Preloader = require('preloader.js')
import Player from '@/utils/vFramePlayer'

const imgArr = []
for (let index = 0; index < 50; index++) {
  imgArr.push(`frames/${(index + "").length == 1 ? '0' + index : index}.jpg`)
}

export default {
  mounted () {
    this.preload()
  },
  methods: {
    preload () {
      var preloader = new Preloader({
        resources: imgArr,
        concurrency: 4
      })
      preloader.addProgressListener((loaded, length) => {
          console.log('loading ', loaded, length, loaded / length)
      })
      preloader.addCompletionListener(() => {
          console.log('load completed')
          this.imgsLoaded = true
          this.buildPlayer()
      })
      preloader.start()
    },
    buildPlayer () {
      const player = new Player({
        dom: this.$refs['vframe'],
        imgArr,
        useCanvas: true
      })
      player.on('stop', () => {
        console.log('onComplete')
        player.goto(0)
      })

      this.player = player
    },
    play () {
      if (this.player)
        this.player.play()
    }
  }
}
</script>



<style scoped>
.vframes {
  width: 375px;
  height: 648px;
}
</style>