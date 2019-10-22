<template>
  <div>
    <header class='flexbox'>
		<div class='flex'>场景化深度挖掘分析评估系统</div>
		<div class='admin'>欢迎您，admin</div>
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
	width:100%;
	height:68px;
	text-align: left;
	position: relative;
	background-color: #0b5288;
	box-shadow: inset 0px -1px 0px 0px 
		rgba(5, 65, 110, 0.7);
	color: #fff;
	padding:0 20px;
	line-height: 68px;
	box-sizing: border-box;
		.admin{
			font-size:14px;
		}

}
header>div:nth-child(1){
	color: #ffffff;
	font-size: 20px;

}

</style>

