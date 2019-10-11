<template>
  <div class="home">
          <div class="container">
                        <div class='people'></div>
                        <el-carousel :interval="4000" type="card" height="68%" arrow='hover' indicator-position='none'>
                          <el-carousel-item v-for="item in 5" :key="item">
                            <h3>{{ item }}</h3>
                          </el-carousel-item>
                        </el-carousel>
                     </div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
// import { el-carousel, el-carousel-item} from 'element-ui'
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
  .home{
    width: 45%;
    height: 45%;
  }
.container{width: 100%;position:relative;height:calc(88% - 48px) ;margin:10px auto;padding-top:10%;overflow: hidden;}
.pictureSlider{height: 120px;}
.poster-item{background: #fff;height: 110px;width:112px;border-radius: 10px;
	transition: all 0.5s;cursor: default;
	-moz-transition: all 0.5s;cursor: default;
	-webkit-transition: all 0.5s;cursor: default;
	-o-transition: all 0.5s;cursor: default;
	background: url(../assets/image/divbg.png) no-repeat center center;
    background-size: 100% 100%;
	line-height: 110px;
	text-align: center;
	color: #fff;
	font-size: 16px
}
.people{
	position: absolute;
	top:0;
	background: url('../assets/image/ren.png') no-repeat center center;
	background-size: contain;
	z-index:0;
	width: 100%;
	height: 116%
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;

  }
   .el-carousel__item{
	  background: #fff;height: 110px;width:110px;border-radius: 10px;
    transition: all 0.5s;cursor: default;
    -moz-transition: all 0.5s;cursor: default;
    -webkit-transition: all 0.5s;cursor: default;
    -o-transition: all 0.5s;cursor: default;
    background: url(../assets/image/divbg.png) no-repeat center center;
      background-size: 100% 100%;
    line-height: 110px;
    text-align: center;
    color: #fff;
    font-size: 16px
  }
  .el-carousel{
    width:50%;
    margin-left:25%;
    height:80%;
        padding-left:10px;
  }
  .is-active{
    z-index:1;
  }
</style>