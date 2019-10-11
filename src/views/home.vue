<template>
  <div class="outter">

  </div>
</template>

<script>
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import { Carousel, CarouselItem } from 'element-ui'
export default {
  name: 'home',
  components: {},
  data() {
    return {
      newsList: ''
    }
  },
  created() {},
  methods: {
    to(e) {
      console.log(e)
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>