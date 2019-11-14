<template>
  <div id="app" class='height'>
    <el-container class='height'>
      <el-header><Header></Header></el-header>
      <el-container>
        <Menu></Menu>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
    <!-- <Header></Header>
    <div class="height flexbox">
      <Menu></Menu>
      <div class='flex'>
        <router-view></router-view>
      </div>
    </div> -->
  </div>
</template>
<script>
import Vue from 'vue'
import Header from './components/head'
import Menu from './components/menu'
export default {
  name: 'app',
  data() {
    return {
     
    }
  },
  components: {
    Header: Header,
    Menu:Menu
  },
  methods:{
     handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
     
  },
   watch:{
      //监听路由变化，自动缩减左边菜单栏目
      $route(){
        let width=document.body.clientWidth;
        if(width>=700){
          this.isCollapse = false;     
        }else{
          this.isCollapse = true;     
        }
      }
    },
}
</script>
<style scoped lang="less">
  // @import "../../static/css/base.scss";
.el-header{
  padding:0
}
.el-container{
  height:100%
}
  </style>

