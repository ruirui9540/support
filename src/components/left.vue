<template>
  <div>
    <div class="top flexbox">
      <div class="flex mar1 flexbox">
        <div class="topimg">
          <img src="../assets/image/topdiv1.png" alt />
        </div>
        <div class="topcon">
          <div>物业点数量</div>
          <div>131400</div>
        </div>
      </div>
      <div class="flex mar1 flexbox">
        <div class="topimg">
          <img style="width: 19px" src="../assets/image/topdiv2.png" alt />
        </div>
        <div class="topcon">
          <div>室分已建设</div>
          <div>131400</div>
        </div>
      </div>
      <div class="flex flexbox">
        <div class="topimg">
          <img style="width: 26px" src="../assets/image/topdiv3.png" alt />
        </div>
        <div class="topcon">
          <div>深度挖掘</div>
          <div>131400</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="commontitle">物业点分布图</div>
      <div id="map"></div>
      <div class="seach">
        <input type="text" placeholder="查询" />
        <img src="../assets/image/seach.png" alt />
      </div>
    </div>
  </div>
</template>

<script src="../assets/js/henan.js"></script>
<script>
import Vue from 'vue';
//import '../assets/js/henan.js';
//require('../assets/js/henan.js')  //引入china.js地图文件
//import '../../node_modules/echarts/map/js/province/henan'
//import "echarts/map/js/province/henan.js";
import "echarts/map/js/province/zhengzhou.js";
//import zhengzhou from "../assets/js/map/zhengzhou/zhengzhou.js";
//import anyang from "../assets/js/map/anyang/anyang.js";

export default {
  name: 'Left',
  data() {
    return {
      page: this.$route.path,
    }
  },
  created() { },
  mounted() {
    this.drawmap()
    this.drawbar()
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
    drawmap() {
      var data = [{ name: 'x', value: [113.849023, 36.093163, 9] },
      { name: 'x1', value: [113.835578, 35.955491, 1] },
      { name: 'x2', value: [114.465333, 35.922329, 12] },
      { name: 'x3', value: [114.459019, 35.00147, 19] }];
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return params.name + ' : ' + params.value[2];
          }
        },
        geo: {
          map: 'zhengzhou',
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: '12',
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(147, 235, 248, 1)',
              borderWidth: 1,
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(147, 235, 248, .1)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(128, 217, 248, 1)',
              // shadowColor: 'rgba(255, 255, 255, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10
            },
            emphasis: {
              areaColor: '#389BB7',
              borderWidth: 0
            }
          },
          roam: true,
          zoom: 1.0,
          layoutCenter: ['45%', '50%'],
          layoutSize: "100%",
        },
        series: [{
          name: '散点',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: data,
          symbolSize: 6,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            emphasis: {
              borderColor: '#fff',
              borderWidth: 1
            }
          }
        },]
      }
      var chart = this.$echarts.init(document.getElementById('map'));//获取容器元素
      window.onresize = chart.resize;
      chart.setOption(option);
    },
    drawbar() {
      var data = {
        "yaxis": [
          "轻载",
          "中载",
          "重载",
        ],
        "wkksl": [{
          "name": "好",
          "value": 300,
          'yAxis': '轻载'
        },
        {
          "name": "好",
          "value": 280,
          'yAxis': '中载'
        },
        {
          "name": "好",
          "value": 240,
          'yAxis': '重载'
        },

        ],
        "tdksl": [{
          "name": "差",
          "value": 300,
          'yAxis': '轻载'
        },
        {
          "name": "差",
          "value": 280,
          'yAxis': '中载'
        },
        {
          "name": "差",
          "value": 240,
          'yAxis': '重载'
        },
        ]
      }
      var yaxis = data.yaxis;
      var xaxisLabelColor = '#fff';
      var wkkslData = data.wkksl;
      var wkkslName = wkkslData[0].name;

      var tdkslData = data.tdksl;
      var tdkslName = tdkslData[0].name;
      var option = {
        legend: {
          data: ['好', '差'],
          top: 0,
          right: 10,
          itemGap: 18,
          textStyle: {
            color: '#fff'
          },
        },
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: function (params) {
            var str = '网络体验口碑 ' + params.name + '<br/>' + params.data.yAxis + ' : ' + params.value;
            return str
          }
        },
        grid: [{
          show: false,
          left: 15,
          top: 35,
          bottom: 38,
          containLabel: true,
          width: '40%'
        },
        {
          show: false,
          left: '52.5%',
          top: 63.5,
          bottom: 41,
          width: '0%'
        },
        {
          show: false,
          right: '15',
          top: 35,
          bottom: 38,
          containLabel: true,
          width: '40%'
        }
        ],
        xAxis: [{
          splitNumber: 4,
          type: 'value',
          inverse: true,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          position: 'top',
          // offset: -10,
          axisLabel: {
            show: true,
            textStyle: {
              color: xaxisLabelColor,
              fontSize: 12
            },
          },
          splitLine: {
            show: false
          }
        },
        {
          gridIndex: 1,
          show: false,
        },
        {
          gridIndex: 2,
          splitNumber: 4,
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          position: 'top',
          // offset: -10,
          axisLabel: {
            show: true,
            textStyle: {
              color: xaxisLabelColor,
              fontSize: 12,
            },
          },
          splitLine: {
            show: false
          },
        },
        ],
        yAxis: [{
          type: 'category',
          inverse: true,
          position: 'right',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
          },
          data: [],

        },
        {
          gridIndex: 1,
          type: 'category',
          inverse: true,
          position: 'left',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            align: 'center',
            color: '#fff'
          },
          data: yaxis,
        },
        {
          gridIndex: 2,
          type: 'category',
          inverse: true,
          position: 'left',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
          },
          data: [],
        },
        ],
        series: [{
          name: wkkslName,
          type: 'bar',
          barGap: '30%',
          barWidth: '20',
          itemStyle: {
            normal: {
              barBorderRadius: 20,
              borderWidth: 0,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#14ff93' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#004eff' // 100% 处的颜色14ff93
              }], false),
            }
          },
          data: wkkslData
        },
        {
          name: tdkslName,
          type: 'bar',
          barGap: '30%',
          barWidth: '20',
          itemStyle: {
            normal: {
              barBorderRadius: 20,
              borderWidth: 0,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#ff5a1f' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#ffc31f' // 100% 处的颜色
              }], false),
            }
          },
          xAxisIndex: 2,
          yAxisIndex: 2,
          barCategoryGap: 5,
          barGap: 5,
          data: tdkslData
        }
        ]
      };
      var chart = this.$echarts.init(document.getElementById('bar'));
      chart.setOption(option);
      window.onresize = function () {
        chart.resize();
      }
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  margin: 0 0 14px 0;
}

.top > div {
  font-size: 14px;
  color: #00ffff;
  padding: 5px;
  text-align: center;
  line-height: 38px;
  position: relative;
  background: url(../assets/image/top.png) top left no-repeat;
  background-size: 100% 100%;
  height: 80px;
}
.top > div::after {
  content: "";
  width: 100%;
  height: 100%;
  display: inline-block;
  background: url(../assets/image/top-left.png) top left no-repeat,
    url("../assets/image/top-right.png") top right no-repeat,
    url("../assets/image/bottom-left.png") bottom left no-repeat,
    url("../assets/image/bottom-right.png") bottom right no-repeat;
  background-size: 3.5%;
  position: absolute;
  top: 0;
  left: 0;
}
.boder {
  width: 1px;
  height: 60%;
  background-color: #7ca1d2;
  padding: 0;
  margin-top: 5%;
}
.topcon > div:nth-child(2) {
  font-family: Hooge0555;
  font-size: 20px;
  color: #fff;
}
.topimg {
  width: 36%;
  text-align: center;
  height: 100%;
  line-height: 72px;
}
.topimg > img {
  width: 14px;
  vertical-align: middle;
}
.title > span {
  width: 5px;
  height: 20px;
  background-color: #00ffff;
  display: inline-block;
  vertical-align: middle;
}
.title {
  color: #0096ff;
  line-height: 20px;
  margin-bottom: 10px;
}

#map {
  width: 100%;
  height: 92%;
  z-index: 1;
  position: relative;
}

.seach {
  position: absolute;
  right: 10px;
  top: 10px;
  border: 1px solid #00ffff;
  border-radius: 15px;
  height: 24px;
  z-index: 3;
}
.seach input {
  border: 0;
  outline: none;
  background-color: transparent;
  height: 100%;
  line-height: 24px;
  color: #fff;
  margin-left: 10px;
  font-size: 12px;
}
.seach img {
  vertical-align: middle;
  width: 12px;
  margin-right: 5px;
}
input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #aab2bd;
  /* placeholder字体大小  */
  font-size: 12px;
  /* placeholder位置  */
  text-align: left;
}
</style>