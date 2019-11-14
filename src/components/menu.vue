<template>
  <el-row class="tac">
  <el-col :span="24">
    <div class='icondiv'><i :class='[icon]' @click="collapse" class='icon'></i></div>
    <el-divider></el-divider>
    <el-menu
      class="el-menu-vertical-demo"
      router
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#C7A150"  :default-active="currentMenu" :collapse="isCollapse">

      <el-submenu v-for="(item,index) in menu" :index="item.id" :key="item.id">
        <template slot="title">
          <i :class="[item.icon]"></i>
          <span v-text="item.name"></span>
        </template>
        <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName+index">
          <el-menu-item :index="sub.componentName" v-text="sub.name">
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-col>
</el-row>
</template>


<script>
  import menu from '@/config/menu_config'

  export default {
    data () {
      return {
        menu: menu,
        currentMenu:this.$route.name,
        isCollapse: true,
        icon:'el-icon-s-unfold'
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      collapse(){
        this.isCollapse=!this.isCollapse;
        if(this.icon=='el-icon-s-fold'){
          this.icon='el-icon-s-unfold'
        }else{
          this.icon='el-icon-s-fold'
        }
      }
    },
    watch: {
      $route(to,from){
         this.currentMenu=to.name
          console.log(to.path);
        }
    },
    mounted(){
        console.log(this.$route.name)
        if(this.$route.name==null){
          this.currentMenu='/index'
        }
    }
  }
</script>
<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.menu,.tac,ul,.el-col-24{
   height: 100%
}
.icon{
  color: #fff;
  font-size:22px;
}
.tac{
  background: #545c64;
  height:100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
}
.icondiv{
  height:32px;
  line-height:32px;
  padding:10px 20px;
  box-sizing: border-box;
  width: 100%;
    border-right: solid 1px #e6e6e6;
    margin: 0;
}
</style>
