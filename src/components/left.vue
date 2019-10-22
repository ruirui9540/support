<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class='cardHead'><i class='el-icon-s-management'></i>无线网投入产出比</span>
    </div>
    <div id='map'></div>
  </el-card>
</template>

<script src="../assets/js/henan.js"></script>
<script>
import Vue from 'vue';
//import '../assets/js/henan.js';
//require('../assets/js/henan.js')  //引入china.js地图文件
//import '../../node_modules/echarts/map/js/province/henan'
//import "echarts/map/js/china.js";
import "echarts/map/js/province/henan.js";
//import zhengzhou from "../assets/js/map/zhengzhou/zhengzhou.js";
//import anyang from "../assets/js/map/anyang/anyang.js";

export default {
  name: 'Left',
  data() {
    return {
      page: this.$route.path,
      data:[]
    }
  },
  created() { },
  mounted() {
    this.drawMap()
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    }
  },
  methods: {
    to(e) {
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    },
    drawMap(){
var data = [{name: "安阳市", value: "705.67"},
            {name: "新乡市", value: "772.46"},
            {name: "濮阳市", value: "578.88"},
            {name: "焦作市", value: "608.03"},
            {name: "鹤壁市", value: "250.26"},
            {name: "三门峡市", value: "448.68"},
            {name: "信阳市", value: "2069.85"},
            {name: "南阳市", value: "936.26"},
            {name: "周口市", value: "1247.13"},
            {name: "商丘市", value: "1076.15"},
            {name: "平顶山市", value: "2267.64"},
            {name: "开封市", value: "748.57"},
            {name: "洛阳市", value: "2036.49"},
            {name: "济源市", value: "100.83"},
            {name: "漯河市", value: "592.77"},
            {name: "许昌市", value: "877.30"},
            {name: "郑州市", value: "2761.25"},
            {name: "驻马店市", value: "2876.34"}];
  var geoCoordMap = { // 地图数据
            "郑州市":[113.43808,34.619528],
            "安阳市":[114.336098,36.082031],
            "濮阳市":[115.031171,35.75372],
            "新乡市":[113.916985,35.287443],
            "鹤壁市":[114.301029,35.733213],
            "焦作市":[113.249221,35.186851],
            "济源市":[112.546961,35.088732],
            "三门峡市":[110.816448,34.47742],//[110.985491,34.610972],
            "洛阳市":[112.21811,34.494904],
            "南阳市":[112.446926,32.938165],
            "平顶山市":[113.078183,33.805632],
            "许昌市":[113.874441,34.12038],
            "开封市":[114.53157,34.637588],
            "商丘市":[115.688587,34.399763],
            "周口市":[114.858122,33.747057],
            "漯河市":[114.023344,33.699014],
            "驻马店市":[114.048353,32.963372],
            "信阳市":[114.963906,32.215873]
        };
    var mapName = 'henan'
var max = 480,
    min = 9; // todo 
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};
var option = {
    tooltip: {
        padding: 0,
        enterable: true,
        transitionDuration: 1,
        textStyle: {
            color: '#000',
            decoration: 'none',
        },
        // position: function (point, params, dom, rect, size) {
        //   return [point[0], point[1]];
        // },
        formatter: function(params) {
            // console.log(params)
            var tipHtml = '';
            tipHtml = '<div style="width:200px;height:100px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">'
            +'<div style="width:80%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">'+'<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">'+'</i>'
            +'<span style="margin-left:10px;color:#fff;font-size:16px;">'+params.name+'</span>'+'</div>'
            +'<div style="padding:12px">'
            +'<p style="color:#fff;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
            +'无线网项目数量：'+'<span style="color:#11ee7d;margin:0 6px;">'+1+'</span>'+'个'+'</p>'
            +'<p style="color:#fff;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
            +'投入产出比：'+'<span style="color:#f48225;margin:0 6px;">'+2+'</span>'+'%'+'</p>'
            +'</div>'+'</div>';
            return tipHtml;
        }
        
    },
   
    visualMap: {
        show: true,
        min: 0,
        max: 3000,
        left: '0',
        top: 'bottom',
        calculable: true,
        seriesIndex: [1],
        // inRange: {
        //     color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
        // }
        inRange: {
             color: ['#E6FFFF', '#3ab8f2','#006EDD'] // 蓝绿
        }
    },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#023677',
                borderColor: '#1180c7',
            },
            emphasis: {
                areaColor: '#4499d0',
            }
        },
        zoom:1.2,
       layoutCenter: ['40%', '50%'],
    },
    series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 300;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                    color:'#666'
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#FF7F50'
                }
            }
        },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 10)),
            symbolSize: function(val) {
                return val[2] / 300;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#FF7F50',
                    shadowBlur: 10,
                    shadowColor: '#FF7F50'
                }
            },
            zlevel: 1
        },

    ]
};

 var chart = this.$echarts.init(document.getElementById('map'));//获取容器元素
      window.onresize = chart.resize;
      chart.setOption(option);
    }
   
  }
}
</script>

<style lang="less" scoped>
 .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card ,#map{
    width: 100%;
    height:99%;
  }
 
  
</style>