<template>
  <div class="height">
    <el-row :gutter="20" style="height:48%">
      <el-col :span="24">
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
    <div class="rightBottom marT">
      <el-row :gutter="20">
        <el-col :span="14">
          <el-card class="height">
            <div slot="header" class="clearfix">
              <span class="cardHead cardTitle">
                <i class="el-icon-s-management"></i><span @click='back' class='back'>投入</span><span>{{pieheader}}</span>
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
        <el-col :span="10">
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
      }, {
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
      oldChooseData: [],
      show: false,
      title: '无线网',
      piedata: [
        { value: 30, name: '建安投资' },
        { value: 50, name: '设备投资' },
        { value: 20, name: '待摊投资' }],
      sumdata: [
        { value: 30, name: '建安投资' },
        { value: 50, name: '设备投资' },
        { value: 20, name: '待摊投资' }],
      jianan: [
        { value: 17, name: '材料费' },
        { value: 23, name: '施工费' },
      ],
      daitan:[
        { value: 17, name: '建设单位管理费' },
        { value: 23, name: '征地及补偿费' },
        { value: 27, name: '可行性研究费' },
        { value: 23, name: '勘察设计费' },
        { value: 27, name: '合同公证及监理费' },
        { value: 23, name: '资本化借款利息' },
        { value: 27, name: '中介机构审计费' },
        { value: 23, name: '汇兑损益' },
        { value: 27, name: '税金' },
        { value: 23, name: '工程损失' },
        { value: 27, name: '系统集成费' },
        { value: 23, name: '安全生产费' },
        { value: 27, name: '工程招标代理费' },
        { value: 23, name: '环境影响评价费' },
        { value: 27, name: '其他' },
      ],
      shebei:[
        { value: 27, name: 'LTE主设备1.8G' },
        { value: 23, name: 'LTE主设备2.1G' },
        { value: 27, name: 'LTE主设备800M' },
        { value: 23, name: '室内分布系统' },
        { value: 27, name: '无线网配套及其他' },
      ],
      pietitle:'总投入',
      pieheader:'',
      touruNum:[177133, 169043, 156670, 123908, {        value: 61954,
        itemStyle: {
          borderType: 'dotted',
          color: '#ffdcc3'
        }
      }],
      chanchu:[96083, 246140, 318999, 408068, {value: 521779.48,
        itemStyle: {
          borderType: 'dotted',
          barBorderColor:'#ffdcc3',
          color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0.4,
            color: "#FF7F50"
          },
          {
            offset: 1,
            color: "#ffdcc3" 
          }
          ])
        }
      }],
      sumNum:0
    }
  },
  created() { },
  mounted() {
    this.chart = this.$echarts.init(document.getElementById('pie'));//获取容器元素
    this.drawPie1()
    this.drawPie(this.piedata)
    this.drawLine()
    this.clickPie()
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    },
    piedata:{
      deep:true,
      handler:function(newval,oldval){
        if(newval){
            this.drawPie(newval)
        }else{
          this.drawPie(oldval)
          console.log(this.pietitle)
        }
      }
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
    back(){
      this.piedata=this.sumdata
      this.pietitle='总投入',
      this.pieheader=''
    },
    open() {
      this.show = true;
    },
    close(e) {
      this.show = false;
      this.sumNum=e
      var len=this.piedata;
      //0 建安
      this.$set(this.piedata[0], 'value', Number(e*this.randomFrom(25,30)/100).toFixed(2))
      //1 设备
      this.$set(this.piedata[1], 'value', Number(e*this.randomFrom(55,65)/100).toFixed(2))
     var val=100-Number(this.piedata[0].value)-Number(this.piedata[1].value);
      this.$set(this.piedata[2], 'value', (e*val/100).toFixed(2))
      console.log(this.touruNum)
      this.$set(this.touruNum[4], 'value', e*10000)
      this.$set(this.chanchu[4], 'value', this.randomFrom(this.chanchu[3]*0.8,this.chanchu[3]*1.5))
      this.drawLine()
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
    drawPie(piedata) {
      var that=this;
      var colorList = ['#6990D5', '#FF7F50', '#3feed4', '#00d488', '#afa3f5', '#f1bb4c', "#6A9DFF",'#ffc257','rgba(5, 65, 110, 1)', '#3bafff', '#ffedcc','#fd6f97', '#fed4e0','#a181fc','#115dab', '#e3d9fe'];
      var option = {
        title: {
          subtext: that.pietitle,
          x: '42%',
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
         tooltip: {
        trigger: 'item',
        
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
            center: ['50%', '50%'],
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
                length: 14,
                length2: 90,
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
                  str = '{nameStyle|' + params.name + ' }' + '{rate|' + params.value + '%}';
                  return str
                },
                padding: [0, -96],
                height: 30,
                rich: {
                  nameStyle: {
                    fontSize: 11,
                    color: "#555",
                    align: 'left'
                  },
                  rate: {
                    fontSize: 12,
                    color: "#1ab4b8",
                    align: 'left'
                  }
                }
              }
            },
            data: piedata
          },
          // 边框的设置
          {
            radius: ['52%', '56%'],
            center: ['50%', '50%'],
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
      
      window.onresize = this.chart.resize;
      this.chart.setOption(option);
    },
    clickPie(){
      var that=this;
// 处理点击事件并且跳转到相应的百度搜索页面
      this.chart.on('click', function (param) {
        var name = param.name;
        if (name === '待摊投资') {
          that.pietitle='待摊投资';
          that.pieheader=' > '+'待摊投资'
          that.piedata=that.daitan
        }else if(name === '设备投资'){
           that.piedata=that.shebei
            that.pietitle='设备投资';
          that.pieheader=' > '+'设备投资'
        }else if(name === '建安投资'){
           that.piedata=that.jianan
            that.pietitle='建安投资';
          that.pieheader=' > '+'建安投资'
        }
      });
    },
    drawLine() {
      var category = ['2015', '2016', '2017', '2018', '2019'];
      var dottedBase = [];
      var lineData = this.touruNum;
      var barData = this.chanchu
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
                color: '#3feed4',
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
                color: '#3feed4',
                lineStyle: {   //系列级个性化折线样式
                  width: 2,
                  type: 'dashed'
                }
              }
            },
            data: dot
          },
          {
            name: '投入',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: 'rgb(215,215,215)'
              }
            },
            data: lineData
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
                     { offset: 0, color: '#6990D5' },
                    { offset: 1, color: '#3ab8f2' }
                  ]
                )
              }
            },
            data: barData
          },
        ]
      };
      var chart = this.$echarts.init(document.getElementById('bar'));//获取容器元素
      window.onresize = chart.resize;
      chart.setOption(option);
    },
    drawPie1() {
      var data = [
        {
          name: '回本周期(月)',
          value: 36
        }, {
          name: 'APPU值(亿元)',
          value: 44
        }]

      var titleArr = [], seriesArr = [];
      var colors = [['#6990D5', '#dfeaff'], ['#FF7F50', '#ffdcc3'], ['#ffc257', '#ffedcc'], ['#fd6f97', '#fed4e0'], ['#a181fc', '#e3d9fe']]
      data.forEach(function (item, index) {
        titleArr.push(
          {
            text: item.name,
            left: index * 50 + 24 + '%',
            top: '75%',
            textAlign: 'center',
            textStyle: {
              fontWeight: 'normal',
              fontSize: '16',
              color: colors[index][0],
              textAlign: 'center',
            },
          }
        );
        seriesArr.push(
          {
            name: item.name,
            type: 'pie',
            clockWise: false,
            radius: [40, 50],
            itemStyle: {
              normal: {
                color: colors[index][0],
                shadowColor: colors[index][0],
                shadowBlur: 0,
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
              }
            },
            hoverAnimation: false,
            center: [index * 50 + 24 + '%', '45%'],
            data: [{
              value: item.value,
              label: {
                normal: {
                  formatter: function (params) {
                    return params.value + '';
                  },
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold',
                    color: colors[index][0]
                  }
                }
              },
            }, {
              value: 100 - item.value,
              name: 'invisible',
              itemStyle: {
                normal: {
                  color: colors[index][1]
                },
                emphasis: {
                  color: colors[index][1]
                }
              }
            }]
          }
        )
      });
      var option = {
        title: titleArr,
        series: seriesArr
      }
      var chart = this.$echarts.init(document.getElementById('pie1'));//获取容器元素
      window.onresize = chart.resize;
      chart.setOption(option);
    },
    randomFrom(lowerValue,upperValue){
      return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
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
.back:hover{
  text-decoration: underline;
}
</style>