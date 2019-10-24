<template>
  <div>
    <header class='flexbox'>
		<div class='flex'>中国电信河南公司投资收益评估系统</div>
    <!-- <div class='flex caidan'>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="/">标签一</el-tab-pane>
        <el-tab-pane label="配置管理" name="/home">标签二</el-tab-pane>
      </el-tabs>
    </div> -->
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
      page: this.$route.path,
      activeName: '/'
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
    },
    handleClick(tab, event){
      console.log(tab, event)
      var name=tab.name;
      this.to(name)
    }
  }
}
</script>

<style lang="less" scoped>
header{
	width:100%;
	height:60px;
	text-align: left;
	position: relative;
	background-color: #115dab;
	box-shadow: inset 0px -1px 0px 0px 
		rgba(5, 65, 110, 0.7);
	color: #fff;
	padding:0 20px;
	line-height: 60px;
	box-sizing: border-box;
		.admin{
			font-size:14px;
		}

}
header>div:nth-child(1){
	color: #ffffff;
	font-size: 20px;
}
.on{
  text-decoration: underline;
  background: #fff;
  color:#333;
  width:60px;
}
.caidan>div{
  display:inline-block;
  text-align: center
  }
</style>

