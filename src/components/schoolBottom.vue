<template>
    <el-row :gutter="20" class='school'>
        <el-col :span="12">
            <div class='flexbox title'><div class='tit'></div>
              <span @click='goback'>投入</span><span @click='secondback'>{{secondName}}</span><span>{{thirdName}}</span>
            </div>
            <el-card class="box-card">
                <!-- <div slot="header" class="clearfix">
                <span class='cardHead'><i class='el-icon-s-management'></i>投入</span>
                </div> -->
                <div id='schoolBar'></div>
            </el-card>
        </el-col>
        <el-col :span="12">
          <div class='flexbox title'><div class='tit'></div>产出</div>
            <el-card class="box-card">
                <!-- <div slot="header" class="clearfix">
                <span class='cardHead'><i class='el-icon-s-management'></i>产出</span>
                </div> -->
                <div id='schoolLine'></div>
            </el-card>
        </el-col>
    </el-row>
  
</template>

<script src="../assets/js/henan.js"></script>
<script>
import Vue from 'vue';
export default {
  name: 'Left',
  data() {
    return {
      page: this.$route.path,
      data:[],
      barchart:'',
      secondName:'',
      thirdName:'',
      linechart:'',
      chartBarData:{
        sum:{
          name:'',
          xdata: ['建设投入', '运营投入'],
          datanow:[220, 182],
          dataold:[200,150]
        },
        jianshe:{
          sum:{
            name:'建设投入',
            xdata: ['接入以上投入', '接入投入','平台投入'],
            datanow:[220, 182,209],
            dataold:[200,150,200]
          },
          jieruyishang:{
            name:'接入以上投入',
            xdata: ['接入以上投入'],
            datanow:[220],
            dataold:[200]
          },
          jieru:{
            name:'接入投入',
            xdata: ['接入光缆长度','接入光缆投资','OUN设备数量','OUN设备型号','OUN投资'],
          datanow:[220, 182,220, 182,220],
          dataold:[200,150,200,150,200]
          },
          pingtai:{
              name:'平台投入',
            xdata: ['信息化平台', '集聚类设备投资','其他',],
            datanow:[220, 182,220],
            dataold:[200,150,200]
          }
        },
        touru:{
          xdata: ['信息化平台', '集聚类设备投资','其他',],
          datanow:[220, 182,220],
          dataold:[200,150,200]
        }
      }
    }
  },
  created() { },
  mounted() {
    this.drawBar(this.chartBarData.sum)
    this.clickBar()
    this.darwLine()
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    }
  },
  methods: {    
      drawBar(data){
        var option=this.$commonJS.echartsBar(data);
         this.barchart = this.$echarts.init(document.getElementById('schoolBar'));//获取容器元素
        window.onresize = this.barchart.resize;
        this.barchart.setOption(option,true);
      },
      clickBar(){
        var that=this;
    // 处理点击事件并且跳转到相应的
          that.barchart.on('click', function (param) {
            var name = param.name;
            console.log(that.chartBarData.jianshe)
            var data;
            if (name === '建设投入') {
            data=that.chartBarData.jianshe.sum;
            that.secondName=' > 建设投入'
            }else if(name === '运营投入'){
              data=that.chartBarData.touru;
              that.secondName=' > 运营投入'
            }
            that.drawBar(data)
          });
      },
      goback(){
        this.drawBar(this.chartBarData.sum)
        this.secondName='';
        this.thirdName=''
      },
      secondback(){
        var that=this;var data;
        if(this.secondName=='建设投入'){
           data=that.chartBarData.jianshe.sum;
        }else{
          data=that.chartBarData.touru;
          }
            that.thirdName=''
          that.drawBar(data)
      },
      darwLine(){
        var option=this.$commonJS.chartLine();
         this.linechart = this.$echarts.init(document.getElementById('schoolLine'));//获取容器元素
        window.onresize = this.linechart.resize;
        this.linechart.setOption(option,true);
      }
  }
}
</script>

<style lang="less" scoped>
 #schoolBar,#schoolLine{
   width:100%;
   height:100%
 }
 .el-card__body{
     height:100%!important
 }
 .el-col-12{
   height:100%
 }
 .el-card{
   height:calc(100% - 30px)
 }
 .tit{
   width: 6px;
	height: 20px;
  background-color: #0a9cf5;
  margin-right:10px;
 }
 .title{
   margin-bottom: 10px;
   font-family: SourceHanSansSC-Medium;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
  color: #333333;
      line-height: 18px;
      margin-left:10px;
      span{
        cursor: pointer;
      }
 }
//  .el-row{
//    margin:0!important
//  }
</style>