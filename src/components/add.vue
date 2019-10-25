<template>
  <div>
      <el-collapse-transition>
      <div class='tips'>
          <span>新建<i :class="[icon1,col1,col]" @click='add'></i><i :class="[icon,col1,col]" @click='remove'></i></span>
           <el-divider></el-divider>
           <div v-for='(col,i) in titleData' :key='i'>
            <el-row style='line-height: 30px;text-align: center;margin-bottom:6px;' :gutter="20" >
              <el-col :span="7">
                <el-select v-model="newselect[i]" placeholder="请选择" size='small'>
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-input v-model="col.rate" @blur='onBlur'  autocomplete="off" size='small'></el-input>
              </el-col>
              <el-col class="line" :span="1">%</el-col>
              <el-col :span="6">
                <el-input v-model="col.value" :disabled="true" autocomplete="off" size='small'></el-input>
              </el-col>
            <el-col class="line" :span="3">亿元</el-col>
          </el-row>
           </div>
           <el-divider v-if='titleData.length>0'></el-divider>
           <span>扩容<i :class="[icon1,col1,col]" @click='add1'></i><i :class="[icon,col1,col]" @click='remove1'></i></span>
           <el-divider></el-divider>
           <div v-for='(col,i) in kuorongData' :key="'info2-'+i">
            <el-row style='line-height: 30px;text-align: center;margin-bottom:6px;' :gutter="20" >
              <el-col :span="7">
                <el-select v-model="kuorong[i]" placeholder="请选择" size='small'>
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-input v-model="col.rate" @blur='onBlur'  autocomplete="off" size='small'></el-input>
              </el-col>
              <el-col class="line" :span="1">%</el-col>
              <el-col :span="6">
                <el-input v-model="col.value" :disabled="true" autocomplete="off" size='small'></el-input>
              </el-col>
            <el-col class="line" :span="3">亿元</el-col>
          </el-row>
           </div>
           <el-divider v-if='kuorongData.length>0'></el-divider>
            <span>更新改造<i :class="[icon1,col1,col]" @click='add1'></i><i :class="[icon,col1,col]" @click='remove1'></i></span>
           <el-divider></el-divider>
           <div v-for='(col,i) in gengxinData' :key="'info3-'+i">
            <el-row style='line-height: 30px;text-align: center;margin-bottom:6px;' :gutter="20" >
              <el-col :span="7">
                <el-select v-model="gengxin[i]" placeholder="请选择" size='small'>
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-input v-model="col.rate" @blur='onBlur'  autocomplete="off" size='small'></el-input>
              </el-col>
              <el-col class="line" :span="1">%</el-col>
              <el-col :span="6">
                <el-input v-model="col.value" :disabled="true" autocomplete="off" size='small'></el-input>
              </el-col>
            <el-col class="line" :span="3">亿元</el-col>
          </el-row>
           </div>
           <el-divider></el-divider>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'add',
  data() {
    return {
      page: this.$route.path,
         icon:'el-icon-remove-outline',
        icon1:'el-icon-circle-plus-outline',
        col:'col',
        show1:false,
        options:[{
          value: '选项1',
          label: '城市'
        }, {
          value: '选项2',
          label: '乡镇'
        }, {
          value: '选项3',
          label: '乡镇以下'
        }],
        col1:'col1',
        newselect:[''],
        titleData:[{rate:0,value:0}],
        kuorong:[''],
        kuorongData:[{rate:0,value:0}],
        gengxin:[''],
        gengxinData:[{rate:0,value:0}],
        sumrate:this.sum
    }
  },
  props:['touru','inputIdx','sum'],
  created() {
    console.log(this.sum)
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    },
     titleData:{
      handler: function (val) {
       this.watchdata()
      },
      deep: true //对象的深度验证
    },
    kuorongData:{
      handler: function (val) {
        this.watchdata()
      },
      deep: true //对象的深度验证
    },
    gengxinData:{
      handler: function (val) {
        this.watchdata()
      },
      deep: true //对象的深度验证
    }
  },
  methods: {
    add(){
      this.changeData(this.titleData,this.newselect)
    },
    remove(){
      this.titleData.pop()
    },
    add1(){
      this.changeData(this.kuorongData,this.kuorong)
    },
    remove1(){
      this.kuorongData.pop()
    },
    add2(){
      this.changeData(this.gengxinData,this.gengxin)
    },
    remove2(){
      this.gengxinData.pop()
    },
    onBlur(){
        this.watchdata()
    },
    changeData(data,select){
        if(data.length<3){
                data.push({rate:0,value:0})
                select.push('')
              }else{
                alert('选项已经够了，不需要在添加了哦!')
              }
    },
    watchdata(){
       var v=this.titleData; let sum = 0;
        for(var i=0;i<v.length;i++){
          this.titleData[i].value=v[i].rate/100*this.touru
          sum += Number(v[i].rate);
        }
        this.kuorongData.forEach((item) => {
          sum += Number(item.rate);
        });
        this.gengxinData.forEach((item) => {
          sum += Number(item.rate);
        });
        this.sumrate=sum;
        //this.$emit('updata:sum', sum ); //触发showbox方法，true为向父组件传递的数据
        console.log(this.inputIdx)
        var s={
          sum:sum,
          index:this.inputIdx
        }
        console.log(s)
        this.$emit('cc', s ); //触发showbox方法，true为向父组件传递的数据
    },
    dd(){
      alert(3)
      this.$emit('cc', 3 ); //触发showbox方法，true为向父组件传递的数据
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/common.less';
.col{
   cursor: pointer;
    color: #559ae7;
    font-size:20px;
 }
 .tips{
   margin-left:30%;
   min-height:100px;
   width:70%
 }
 .col1{
   margin-left:20px;
 }
</style>

