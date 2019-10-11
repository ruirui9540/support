<template>
  <div>
    <header class='flexbox'>
			<div class='flex'>场景化深度挖掘分析评估系统</div>
			<div class='lefttab'><span :class="page == '/' ? 'active':''">高校</span>/<span @click="to('/home')" :class="page == '/home' ? 'active':''">住宅区</span>/<span>写字楼</span>/<span>工业园区</span></div>
			<div class='time'>2019年5月28日 <br/>12:00:00</div>
		</header>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'header-box',
  data() {
    return {
      page: this.$route.path
    }
  },
  created() {},
  watch: {
    $route(to, from) {
      this.page = to.path
    }
  },
  methods: {
    to(e) {
		this.$router.push({
          path: e
        })
    //   window.scrollTo(0, 0)
    //   if (e != this.$route.path) {
    //     this.$router.push({
    //       path: e
    //     })
    //   }
    }
  }
}
</script>

<style lang="less" scoped>
header{
	background: url('../assets/image/title.png') no-repeat top center;
	background-size: 100% ; 
	width:100%;
	height:68px;
	text-align: center;
	position: relative;
}
header>div:nth-child(1){
	color: #ffffff;
box-shadow: 2px 2px 9px 0px 
		#01153b;
		font-size: 20px;
			line-height: 68px;
}

.headerLeft>div{
	width: 148px;
	height: 100%
}
.headerLeft .active{
	background: url('../assets/image/active1.png') no-repeat top center;
	background-size: 76% 85%; 
}
.time{
	position: absolute;
	left: 0;
	top:5px;
	color: #fff;
	font-size: 12px
}
.lefttab{
	position: absolute;
	right: 5px;
	top:12px;
	color: #fff;
	font-size: 12px
}
.lefttab>span{
	margin:0 5px;
}
.lefttab .active{
	color: #71ccde;
}
</style>

