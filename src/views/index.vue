<template>
  <div class="contain">
    <!-- <div class="mainHeader">
      <div class="el-b" v-if="show" :to="{ path: '/' }">首页</div>
      <el-breadcrumb separator="/" v-else>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="second" :to="{path:'/index/'+page}">{{page}}</el-breadcrumb-item>
        <el-breadcrumb-item v-else :to="{path:'/empty'}">{{page}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="xm" :to="{path:'/empty'}">{{xm}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="mainRight">
        <div>
          <span>项目：</span>
          <el-cascader :options="options" size="mini" @change="change" clearable></el-cascader>
        </div>
        <div>
          <span>时间：</span>
          <el-select v-model="value" size="mini" clearable placeholder="请选择">
            <el-option
              v-for="item in selectData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </div> -->
    <el-row :gutter="20">
      <el-col :span="12">
        <Left></Left>
      </el-col>
      <el-col :span="12">
        <Right></Right>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import Left from '../components/left'
import Right from '../components/right'
import county from '@/config/countyData'
export default {
  name: 'index',
  components: {
    Left: Left,
    Right: Right
  },
  data() {
    return {
      newsList: '',
      // page:this.$route.params.id,
      // show:true,
      // options: county,
      // xm:'',
      // second:false,
      //  selectData: [{
      //     value: '2015',
      //     label: '2015'
      //   }, {
      //     value: '2016',
      //     label: '2016'
      //   }, {
      //     value: '2017',
      //     label: '2017'
      //   }, {
      //     value: '2018',
      //     label: '2018'
      //   }, {
      //     value: '2019',
      //     label: '2019'
      //   }],
      //   value: ''
    }
  },
  created() { },
  mounted() {

  },
  methods: {
    //  change(){
    //    if(this.$route.path=='/'){
    //       this.to('/xm/school')
    //    }else{
    //      console.log(0)
    //      this.to('/index/'+this.page+'/school')
    //    }
    //  },
    // to(e) {
    //   window.scrollTo(0, 0)
    //   if (e != this.$route.path) {
    //     this.$router.push({
    //       path: e
    //     })
    //   }
    // }
  },
  watch: {
    //监听路由变化，自动缩减左边菜单栏目
    // $route(to,form){
    //   this.page=this.$route.params.id;
    //    if(this.$route.path=='/'){
    //     this.page='首页';
    //     this.show=true;
    //   }else{
    //     console.log(this.$route)
    //      this.show=false;
    //      if(this.$route.path=='/xm/school'){
    //         this.page='项目详情';
    //        this.xm='';
    //        this.second=false;
    //      }else if(this.$route.name=='index'){
    //        this.xm='';
    //        this.second=false;
    //      }else{
    //        this.xm='项目详情';
    //        this.second=true;
    //      }
    //   }
    // }
  },
}
</script>

<style lang="less" >
.contain {
  width: 98%;
  height: 91%;
  margin: 0 10px;
  box-sizing: border-box;
  .el-row {
    width: 100%;
    height: 100%;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      height: 100%;
    }
  }
}
// .mainHeader{
//   border: 1px solid #EBEEF5;
//     background-color: #FFF;
//     color: #303133;
//     -webkit-transition: .3s;
//     -o-transition: .3s;
//     transition: .3s;
//     line-height: 40px;
//     margin-bottom: 10px;
//     display: flex;
//     // justify-content: space-between;
//     box-sizing: border-box;
//     padding:0 10px;
// }
// .mainRight{
//   flex:1;
//   margin-left:60px;
//       display: flex;
//      justify-content: space-between;
//   >span{
//     font-size: 14px;
//     font-weight: 500;
//   }
// }
// .el-b{
//     font-size: 14px;
//     font-weight: 700;
//     text-decoration: none;
//     -webkit-transition: color .2s cubic-bezier(.645,.045,.355,1);
//     -o-transition: color .2s cubic-bezier(.645,.045,.355,1);
//     transition: color .2s cubic-bezier(.645,.045,.355,1);
//     color: #303133;
// }
// .el-page-header,.el-cascader--mini,.el-breadcrumb{
//   line-height: 40px;
// }
</style>