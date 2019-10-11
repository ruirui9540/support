<template>
  <div class="contain flexbox">
    <Left></Left>
    <Right></Right>
  </div>
</template>

<script>
import Vue from 'vue'
import Left from '../components/left'
import Right from '../components/right'
export default {
  name: 'index',
  components: {
    Left: Left,
    Right: Right
  },
  data() {
    return {
      newsList: ''
    }
  },
  created() { },
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

<style lang="less" >
.contain {
  width: 96%;
  height: calc(100% - 90px);
  margin: 20px 2% 0;
}
.contain > div:nth-child(1) {
  width: 60%;
}
#bar,
.pie,
.rightcon {
  width: 100%;
  height: 85%;
  position: relative;
  z-index: 3;
}
.num {
  width: 50%;
}
.num > div {
  border: 2px solid rgba(57, 191, 237, 0.5);
  padding: 3px;
}
.num > div > div {
  background-color: rgba(57, 191, 237, 0.5);
  text-align: center;
  color: #57c7ed;
  height: 100px;
  line-height: 26px;
}
.num > div > div > img {
  width: 30px;
  margin-top: 10px;
}
.num > div > div > div:nth-child(3) {
  color: #fff;
  font-size: 20px;
}
.bottom {
  width: 100%;
  height: 80%;
  background: url("../assets/image/map.png") top left no-repeat;
  background-size: 100%;
  position: relative;
}
.bottom::after {
  content: "";
  width: 100%;
  height: 100%;
  display: inline-block;
  background: url(../assets/image/top-left.png) top left no-repeat,
    url("../assets/image/top-right.png") top right no-repeat,
    url("../assets/image/bottom-left.png") bottom left no-repeat,
    url("../assets/image/bottom-right.png") bottom right no-repeat;
  background-size: 1%;
  position: absolute;
  top: 0;
  left: 0;
}
.rightTop::after,
.rightbottom::after {
  content: "";
  width: 100%;
  height: 100%;
  display: inline-block;
  background: url(../assets/image/top-left.png) top left no-repeat,
    url("../assets/image/top-right.png") top right no-repeat,
    url("../assets/image/bottom-left.png") bottom left no-repeat,
    url("../assets/image/bottom-right.png") bottom right no-repeat;
  background-size: 1.8%;
  position: absolute;
  top: 0;
  left: 0;
}
.commontitle {
  color: #00ffff;
  padding: 12px;
}
</style>