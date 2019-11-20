<template>
  <div id="app" class='height'>
    <el-container class='height'>
      <el-header><Header></Header></el-header>
      <el-container>
        <Menu></Menu>
        <div class='main'>
          <div class='mainHeader'>
            <div class='el-b' v-if='show' :to="{ path: '/' }">首页</div>
            <el-breadcrumb separator="/" v-else>
              <el-breadcrumb-item :to="{ path: '/' }" >首页</el-breadcrumb-item>
              <el-breadcrumb-item v-if='second' :to="{path:'/index/'+page}">{{page}}</el-breadcrumb-item>
              <el-breadcrumb-item v-else :to="{path:'/empty'}">{{page}}</el-breadcrumb-item>
              <el-breadcrumb-item v-if="xm">{{xm}}</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- <el-page-header @back="to('/')" v-else :content='page'></el-page-header> -->
            <div class='mainRight'>
               <span> 项目：</span><el-cascader :options="options" size='mini' @change='change' clearable></el-cascader>
            </div>
            
          </div>
          <router-view></router-view>
        </div>
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
import county from '@/config/countyData'
// import { api1 } from '@/core/net/http'// 导入我们的api接口
export default {
  name: 'app',
  data() {
    return {
      page:this.$route.params.id,
      show:false,
      options: county,
      xm:'',
      second:false
    }
  },
  components: {
    Header: Header,
    Menu:Menu
  },
  methods:{
     change(){
       if(this.$route.path=='/'){
          this.to('/index/项目详情')
       }else{
         console.log(0)
         this.to('/index/'+this.page+'/school')
       }
     },
    to(e) {
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    }
  },
   watch:{
      //监听路由变化，自动缩减左边菜单栏目
      $route(to,form){
        this.page=this.$route.params.id;
         if(this.$route.path=='/'){
          this.page='首页';
          this.show=true;
        }else{
          console.log(this.$route)
           this.show=false;
           if(this.$route.name=='school'){
             this.xm='项目详情';
             this.second=true
           }else{
             this.xm='';
              this.second=false
           }
        }
      }
    },
    mounted(){
      // this.$get('http://127.0.0.1:5000/ ').then(res=>{
      //   console.log(res)
      // })
      // api1({}).then(res => {
      //   // success
      //   console.log(res)
      // }).catch((error) => {
      //   // error
      //   console.log(error)
      // })
    }
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
.main{
  display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    -webkit-flex-basis: auto;
    flex-basis: auto;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.mainHeader{
  border: 1px solid #EBEEF5;
    background-color: #FFF;
    color: #303133;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    line-height: 40px;
    margin-bottom: 10px;
    display: flex;
    // justify-content: space-between;
    box-sizing: border-box;
    padding:0 10px;
}
.el-page-header,.el-cascader--mini,.el-breadcrumb{
  line-height: 40px;
}
.mainRight{
  margin-left:60px;
  >span{
    font-size: 14px;
    font-weight: 500;
  }
}
.el-b{
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    -webkit-transition: color .2s cubic-bezier(.645,.045,.355,1);
    -o-transition: color .2s cubic-bezier(.645,.045,.355,1);
    transition: color .2s cubic-bezier(.645,.045,.355,1);
    color: #303133;
}
  </style>

