<template>
    <el-row :gutter="20" class='school'>
        <el-col :span="6" style='height:88%'>
            <div class='flexbox title'>
                <div class='tit'></div>投资回收期
                </div>
            <!-- <el-card class="box-card height"> -->
                <!-- <div slot="header" class="clearfix">
                <span class='cardHead'><i class='el-icon-s-management'></i>无线网投入产出比</span>
                </div> -->
                <div id='demo1' class='height'></div>
            <!-- </el-card> -->
        </el-col>
        <el-col :span="18" style='height:88%'>
            <div class='flexbox title'><div class='tit'></div>产出
                <div class='flex' style="text-align: right">
                    <el-button type="primary"  size="small" style='margin-top:-6px' @click="open"
              icon="el-icon-edit">项目投资推演</el-button>
                </div>
            </div>
            <el-card class="box-card height">
                <!-- <div slot="header" class="clearfix">
                <span class='cardHead'><i class='el-icon-s-management'></i>无线网投入产出比</span>
                </div> -->
                <div id='demo'></div>
            </el-card>
        </el-col>
          <!-- 弹出框 -->
    <eDialog :show.sync="show" :title="title" @close="close"></eDialog>
    </el-row>
  
</template>

<script src="../assets/js/henan.js"></script>
<script>
import Vue from 'vue';
import 'echarts-liquidfill/src/liquidFill.js';
import eDialog from '../components/eDialogSchool'
export default {
  name: 'Left',
  data() {
    return {
      page: this.$route.path,
      show:false,
      title:'项目投资推演',
      data:[
              {
            "value": 302,
            "name": "建设投入", 
            "path": "建设投入",
              itemStyle: {
                color: '#CC355B',
               // colorSaturation: 0.35,
               // colorAlpha: 1
            },
            "children": [
                {
                    "value": 90,
                    "name": "接入以上投入",
                    "path": "建设投入/接入以上投入",
                     itemStyle: {
                                colorSaturation: 0.50,
                                colorAlpha: 1
                            },
                    "children": [
                        {
                            "value": 90,
                            "name": "接入以上投入",
                            "path": "建设投入/接入以上投入/接入以上投入",
                            itemStyle: {
                                colorSaturation: 0.50,
                                colorAlpha: 1
                            },
                        },
                        
                    ]
                },
                {
                    "value": 92,
                    "name": "接入投入",
                    "path": "建设投入/接入投入",
                    itemStyle: {
                        colorSaturation: 0.6,
                        colorAlpha: 1
                    },
                    "children": [
                        {
                            "value": 24,
                            "name": "接入光缆长度",
                            "path": "建设投入/接入投入/接入光缆长度"
                        },
                        {
                            "value": 16,
                            "name": "接入光缆投资",
                            "path": "建设投入/接入投入/接入光缆投资"
                        },
                        {
                            "value": 20,
                            "name": "OUN设备数量",
                            "path": "建设投入/接入投入/OUN设备数量"
                        },
                        {
                            "value": 16,
                            "name": "OUN设备型号",
                            "path": "建设投入/接入投入/OUN设备型号"
                        },
                        {
                            "value": 16,
                            "name": "OUN投资",
                            "path": "建设投入/接入投入/OUN投资"
                        }
                    ]
                },
                {
                    "value": 120,
                    "name": "平台投入",
                    "path": "建设投入/平台投入",
                    itemStyle: {
                        colorSaturation: 0.65,
                        colorAlpha: 1
                    },
                    "children": [
                        {
                            "value": 40,
                            "name": "信息化平台",
                            "path": "建设投入/平台投入/信息化平台"
                        },
                        {
                            "value": 40,
                            "name": "集聚类设备投资",
                            "path": "建设投入/平台投入/集聚类设备投资"
                        },{
                            "value": 40,
                            "name": "其他",
                            "path": "建设投入/平台投入/其他"
                        }
                    ]
                }
            ]
        },
        {
            "value": 194,
            "name": "运营投入",
            "path": "运营投入",
            itemStyle: {
                color: '#7591CC',
            },
            "children": [
                {
                    "value": 74,
                    "name": "年度人力投资",
                    "path": "运营投入/年度人力投资",
                      itemStyle: {
                       //color: '#7591CC',
                        colorSaturation: 0.45,
                        colorAlpha: 0.8
                    },
                    "children": [
                        {
                            "value": 74,
                            "name": "人工费",
                            "path": "运营投入/年度人力投资/人工费",
                              itemStyle: {
                       //color: '#7591CC',
                        colorSaturation: 0.45,
                        colorAlpha: 0.8
                    },
                        }
                    ]
                },
                {
                    "value": 120,
                    "name": "配套投资",
                    "path": "运营投入/配套投资",
                    itemStyle: {
                    //  color: '#f3aa02',
                        colorSaturation: 0.35,
                        colorAlpha: 1
                    },
                    "children": [
                        {
                            "value": 40,
                            "name": "光缆维护",
                            "path": "运营投入/配套投资/光缆维护"
                        },
                        {
                            "value": 40,
                            "name": "机房维护",
                            "path": "运营投入/配套投资/机房维护"
                        },
                        {
                            "value": 40,
                            "name": "电力消耗",
                            "path": "运营投入/配套投资/电力消耗"
                        }
                    ]
                },
            ]
        },
    ],
    chart:''
    }
  },
    components: {
        eDialog:eDialog
  },
  created() { },
  mounted() {
      this.drawjuxingtu(this.data)
      this.drawPie()
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    }
  },
  methods: {    
    drawjuxingtu(data){
        var option=this.$commonJS.diskdata(data);
         this.chart = this.$echarts.init(document.getElementById('demo'));//获取容器元素
        window.onresize = this.chart.resize;
        this.chart.setOption(option,true);
    },
    drawPie(){
        var value = 0.3
        var data = []
        data.push(value)
        data.push(value)
        data.push(value)
        data.push(value)
        data.push(value)
        var option = {
            series: [{
                type: 'liquidFill',
                radius: '80%',
               // data: data,
                backgroundStyle: {
                    borderWidth: 5,
                    borderColor: 'rgba(255,255,255,0.5)',
                    color: '#E3F7FF',
                    
                },
                data: [0.6, 0.5, 0.4, 0.3],
                outline: {
                    show: false
                },
                // shape: 'diamond',
                 shape: 'path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z',
                label: {
                    normal: {
                        formatter: value*10 + '年',
                        textStyle: {
                            fontSize: 40,
                            //color:'#fff'
                        }
                    }
                }
            }]
        }
        var chart = this.$echarts.init(document.getElementById('demo1'));//获取容器元素
                window.onresize = chart.resize;
                chart.setOption(option,true);
    },
    close(e) {
        this.show = false;
    },
    open() {
      this.show = true;
    },
  }
}
</script>

<style lang="less" scoped>
 #demo{
     width:100%;
     height:100%
 }
 .tit{
   width: 6px;
	height: 20px;
  background-color: #0a9cf5;
  margin-right:10px;
 }
 .title{
   margin-bottom: 0;
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
 
</style>