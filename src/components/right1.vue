<template>
  <div class="height">
    <div class="rightBottom">
      <el-row :gutter="20" class='height'>
        <el-col :span="12" style='height:100%'>
          <el-card class="height">
            <div slot="header" class="clearfix">
              <span class="cardHead cardTitle">
                <i class="el-icon-s-management"></i>投入
              </span>
              <el-select
                v-model="chooseData"
                class="elSelect"
                collapse-tags
                size="small"
                number="2"
                multiple
                placeholder="请选择"
                @change="change"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div id="pie" class="height"></div>
          </el-card>
        </el-col>
        <el-col :span="12" style='height:100%'>
          <el-card class="height">
            <div slot="header" class="clearfix">
              <span class="cardHead">
                <i class="el-icon-s-management"></i>产出
              </span>
            </div>
            <div id="pie1" class="height"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20" style="height:48%" class='marT'>
      <el-col :span="24" style='height:100%'>
        <el-card class="height">
          <div slot="header" class="clearfix">
            <span class="cardHead">
              <i class="el-icon-s-management"></i>河南省无线网投入产出比
            </span>
            <el-button
              type="primary"
              style="float: right;margin-top: -6px;"
              size="small"
              icon="el-icon-edit"
              @click="open"
            >调配预测</el-button>
          </div>
          <div id="bar" class="height"></div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 弹出框 -->
    <eDialog :show.sync="show" :title="title" @close="close"></eDialog>
  </div>
</template>

<script>
import Vue from 'vue'
import eDialog from '../components/eDialog'
export default {
  name: 'Right',
  components: {
    eDialog: eDialog,
  },
  data() {
    return {
      page: this.$route.path,
      options: [{
        value: 'ALL_SELECT',
        label: '全选'
      },{
        value: '选项1',
        label: '2015'
      }, {
        value: '选项2',
        label: '2016'
      }, {
        value: '选项3',
        label: '2017'
      }, {
        value: '选项4',
        label: '2018'
      }, {
        value: '选项5',
        label: '2019'
      }],
      chooseData: [],
      oldChooseData:[],
      show: false,
      title: '无线网'
    }
  },
  created() { },
  mounted() {
    this.drawPie()
    this.drawLine()
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
    open() {
      this.show = true;
    },
    close() {
      this.show = false
    },
    change(val) {
       const allValues = this.options.map(item => {
        return item.value;
      });
      // 用来储存上一次选择的值，可进行对比
      const oldVal = this.oldChooseData.length > 0 ? this.oldChooseData : [];
 
      // 若选择全部
      if (val.includes('ALL_SELECT')) {
        this.chooseData = allValues;
      }
 
      // 取消全部选中， 上次有， 当前没有， 表示取消全选
      if (oldVal.includes('ALL_SELECT') && !val.includes('ALL_SELECT')) {
        this.chooseData = [];
      }
 
      // 新老数据都有全部选中,那就说明除了全选以外的被选择，所以去掉全选
      if (oldVal.includes('ALL_SELECT') && val.includes('ALL_SELECT')) {
        const index = val.indexOf('ALL_SELECT');
        val.splice(index, 1); // 排除全选选项
        this.chooseData = val;
      }
 
      // 全选未选，但是其他选项都全部选上了，则全选选上
      if (!oldVal.includes('ALL_SELECT') && !val.includes('ALL_SELECT')) {
        if (val.length === allValues.length - 1) {
          this.chooseData = ['ALL_SELECT'].concat(val);
        }
      }
 
      // 储存当前选择的最后结果 作为下次的老数据
      this.oldChooseData = this.chooseData;

    },
    drawPie() {
      var colorList = ['#006EDD', '#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c', "rgba(250,250,250,0.5)"];
      var option = {
        title: {
          subtext: '总投入',
          x: '38%',
          y: '42%',
          textStyle: {
            fontSize: 30,
            fontWeight: 'normal',
            color: ['#333']
          },
          subtextStyle: {
            color: '#666',
            fontSize: 16
          },
        },
        grid: {
          bottom: 150,
          left: 0,
          right: '10%'
        },
        legend: {
          show: false,
          orient: 'vertical',
          top: "middle",
          right: "5%",
          textStyle: {
            color: '#f2f2f2',
            fontSize: 25,

          },
          icon: 'roundRect'
        },
        series: [
          // 主要展示层的
          {
            radius: ['30%', '56%'],
            center: ['45%', '50%'],
            type: 'pie',
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex]
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 10,
                length2: 80,
                lineStyle: {
                  color: '#d3d3d3'
                },
                align: 'left'
              },
              color: "#000",
              emphasis: {
                show: true
              }
            },
            label: {
              normal: {
                formatter: function (params) {
                  var str = '';
                  switch (params.name) {
                    case '待摊投资': str = '{nameStyle|待摊投资 }' + '{rate|' + params.value + '%}'; break;
                    case '设备投资': str = '{nameStyle|设备投资 }' + '{rate|' + params.value + '%}'; break;
                    case '建安投资': str = '{nameStyle|建安投资 }' + '{rate|' + params.value + '%}'; break;
                  }
                  return str
                },
                padding: [0, -80],
                height: 50,
                rich: {
                  nameStyle: {
                    fontSize: 12,
                    color: "#555",
                    align: 'left'
                  },
                  rate: {
                    fontSize: 14,
                    color: "#1ab4b8",
                    align: 'left'
                  }
                }
              }
            },
            data: [
              { value: 17, name: '建安投资' },
              { value: 23, name: '设备投资' },
              { value: 27, name: '待摊投资' },]
          },
          // 边框的设置
          {
            radius: ['52%', '56%'],
            center: ['45%', '50%'],
            type: 'pie',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            animation: false,
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                color: 'rgba(250,250,250,0.5)'
              }
            },
            data: [{
              value: 1,
            }],
          }
        ]
      };
      var chart = this.$echarts.init(document.getElementById('pie'));//获取容器元素
      window.onresize = chart.resize;
      chart.setOption(option);
      // 处理点击事件并且跳转到相应的百度搜索页面
      chart.on('click', function (params) {
        console.log(params)
        var name=param.name;
      });

    },
    drawLine() {
      var category = ['2015', '2016', '2017', '2018', '2019'];
      var dottedBase = [];
      var lineData = [18092, 20728, 24045, 28348, {        value: 32800,
        itemStyle: {
          borderType: 'dotted',
          color: '#007d87'
        }
      }];
      var barData = [4600, 50000, 5500, 25000, {        value: 12500,
        itemStyle: {
          borderType: 'dotted',
          color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0.4,
            color: "rgba(255,252,0,1)"
          },
          {
            offset: 1,
            color: "rgba(8,228,222,0.2)"
          }
          ])
        }
      }];
      var rateData = []; var dot = []
      for (var i = 0; i < 5; i++) {
        var bar = barData[i];
        if (barData[i].value) {
          bar = barData[i].value
        }
        var line = lineData[i]
        if (lineData[i].value) line = lineData[i].value;
        var rate = bar / line;
        if (i == 4) {
          rateData[i] = '-'
        } else {
          rateData[i] = rate.toFixed(2);
        }
        dot[i] = rate.toFixed(2)
      }
      // option
      var option = {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(0,0,0,0.8)',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              backgroundColor: '#7B7DDC',
            },
          },
          textStyle: {
            color: '#fff'
          },
          formatter(param) {
            var str = param[0].name + '<br/>'
            for (var i = 1; i < param.length; i++) {
              if (param[i].seriesName == '投入产出比') {
                str += param[i].seriesName + ' : ' + param[i].value * 100 + '%' + '<br/>'
              } else {
                str += param[i].seriesName + ' : ' + param[i].value + '<br/>'
              }
            }
            return str
          }
        },
        legend: {
          data: ['产出', '投入', '投入产出比',],
          textStyle: {
            color: '#333'
          },
          top: '1%',
        },
        grid: {
          x: '8%',
          width: '82%',
          y: '10%',
          bottom: '12%'
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: '#666'
            }
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: [{
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#666',
            }
          },
          axisLabel: {
            formatter: '{value} ',
          }
        },
        {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#666',
            }
          },
          axisLabel: {
            formatter: '{value} ',
          }
        }],
        series: [
          {
            stack: '温度1',
            name: '投入产出比',
            type: 'line',
            smooth: false,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: '#00d488',
                lineStyle: {   //系列级个性化折线样式
                  width: 2,
                  type: 'solid'
                }
              }
            },
            data: rateData
          },
          {
            stack: '温度2',
            name: '投入产出比',
            type: 'line',
            smooth: false,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: '#00d488',
                lineStyle: {   //系列级个性化折线样式
                  width: 2,
                  type: 'dashed'
                }
              }
            },
            data: dot
          },
          {
            name: '产出',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#3ab8f2' },
                    { offset: 1, color: '#006EDD' }
                  ]
                )
              }
            },
            data: barData
          },
          { // 背景色
            type: 'pictorialBar',
            stack: '总量',
            symbol: 'fixed',
            name: '投入',
            symbolSize: [15, 3],
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            symbolBoundingData: 500000,
            z: -10,
            data: lineData,
            itemStyle: {
              normal: {
                color: '#a5e6e6'
              }
            }
          },
        ]
      };
      var chart = this.$echarts.init(document.getElementById('bar'));//获取容器元素
      window.onresize = chart.resize;
      chart.setOption(option);
    }
  }
}
</script>

<style lang="less" scoped>
.rightBottom {
  width: 100%;
  height: 48%;
}
.elSelect {
  float: right;
  vertical-align: middle;
  width: 45%;
  margin-top: -6px;
}
</style>