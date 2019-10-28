<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogFormVisible" 
            @close="$emit('update:show', false)" width='40%'
            :show="show">
  <el-form :model="form">
    <el-form-item label="总投入" :label-width="formLabelWidth">
      <el-col :span="16">
          <el-input v-model="form.touru" autocomplete="off" size='small' ></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
    <el-form-item label="LTE主设备1.8G" :label-width="formLabelWidth">
      <i :class="[icon[0],col]" @click='morecontent(0)'></i>
       <el-col :span="7">
          <el-input v-model="form.lteRate1" autocomplete="off" size='small' ></el-input>
        </el-col>
        <el-col class="line" :span="2">%</el-col>
        <el-col :span="7">
          <el-input v-model="form.lteValue1" :disabled="true" autocomplete="off" size='small'></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
    <Add :touru="form.touru" :inputIdx='0' :sumsync.sync='form.lteRate1'  v-show='addshow[0]'></Add>
    <el-form-item label="LTE主设备2.1G" :label-width="formLabelWidth">
       <i :class="[icon[1],col]" @click='morecontent(1)'></i>
       <el-col :span="7">
          <el-input v-model="form.lteRate2" autocomplete="off" size='small' ></el-input>
        </el-col>
        <el-col class="line" :span="2">%</el-col>
        <el-col :span="7">
          <el-input v-model="form.lteValue2" :disabled="true" autocomplete="off" size='small'></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
     <Add :touru="form.touru" :inputIdx='1' :sumsync.sync='form.lteRate2'  v-show='addshow[1]'></Add>
     <!-- <Add :touru="form.touru" :inputIdx='1' @sum='cc'  v-show='addshow[1]'></Add> -->
    <el-form-item label="LTE主设备800M" :label-width="formLabelWidth">
         <i :class="[icon[2],col]" @click='morecontent(2)'></i>
       <el-col :span="7">
          <el-input v-model="form.lteRate3" autocomplete="off" size='small' ></el-input>
        </el-col>
        <el-col class="line" :span="2">%</el-col>
        <el-col :span="7">
          <el-input v-model="form.lteValue3" :disabled="true" autocomplete="off" size='small'></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
     <!-- <Add :touru="form.touru" :inputIdx='2' @sum='cc'  v-show='addshow[2]'></Add> -->
       <Add :touru="form.touru" :inputIdx='2' :sumsync.sync='form.lteRate3'  v-show='addshow[2]'></Add>
    <el-form-item label="室内分布系统" :label-width="formLabelWidth">
         <i :class="[icon[3],col]" @click='morecontent(3)'></i>
      <el-col :span="7">
          <el-input v-model="form.lteRate4" autocomplete="off" size='small' ></el-input>
        </el-col>
        <el-col class="line" :span="2">%</el-col>
        <el-col :span="7">
          <el-input v-model="form.lteValue4" :disabled="true" autocomplete="off" size='small'></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
     <!-- <Add :touru="form.touru" :inputIdx='3' @sum='cc'  v-show='addshow[3]'></Add> -->
        <Add :touru="form.touru" :inputIdx='3' :sumsync.sync='form.lteRate4'  v-show='addshow[3]'></Add>
    <el-form-item label="无线网配套及其他" :label-width="formLabelWidth">
      <i :class="[icon[4],col]" @click='morecontent(4)'></i>
       <el-col :span="7">
          <el-input v-model="form.lteRate5" autocomplete="off" size='small' ></el-input>
        </el-col>
        <el-col class="line" :span="2">%</el-col>
        <el-col :span="7">
          <el-input v-model="form.lteValue5" :disabled="true" autocomplete="off" size='small'></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
     <!-- <Add :touru="form.touru" :inputIdx='4' @sum='cc'  v-show='addshow[4]'></Add> -->
      <Add :touru="form.touru" :inputIdx='4' :sumsync.sync='form.lteRate5'  v-show='addshow[4]'></Add>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
    <el-button type="primary" @click="onsubmit" size='small'>确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
import Vue from 'vue'
import Add from '../components/add'
export default {
  name: 'eDialog',
  data() {
    return {
      page: this.$route.path,
      dialogFormVisible: this.show,
       form: {
          touru:'6.1954',
          lteRate1:'15',
          lteValue1:'15',
          lteRate2:'15',
          lteValue2:'15',
          lteRate3:'38',
          lteValue3:'38',
          lteRate4:'12',
          lteValue4:'12',
          lteRate5:'20',
          lteValue5:'20',
        },
        formLabelWidth: '160px',
        icon:['el-icon-circle-plus-outline','el-icon-circle-plus-outline','el-icon-circle-plus-outline','el-icon-circle-plus-outline','el-icon-circle-plus-outline'],
        icon1:'el-icon-circle-plus-outline',
        col:'col',
        addshow:[false,false,false,false,false],
        sumrate:0,
        sum:[],
       // change: JSON.parse(localStorage.getItem('hou'))，
       sumsync:{}
    }
  },
   components: {
    Add: Add,
  },
  props: {
    show: {
        type: Boolean,
        default: false
      },
      title:{
        type:String
      },
      
  },
  created() { 
    this.$nextTick(() => {
          this.form.lteValue1=this.form.touru*(this.form.lteRate1/100);
          this.form.lteValue2=this.form.touru*(this.form.lteRate2/100);
          this.form.lteValue3=this.form.touru*(this.form.lteRate3/100);
          this.form.lteValue4=this.form.touru*(this.form.lteRate4/100);
          this.form.lteValue5=this.form.touru*(this.form.lteRate5/100);
       });
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    },
    show(){
      this.dialogFormVisible = this.show;
    },
    // 'form.touru':function(val){
    //   this.form.lteValue1=val*(this.form.lteRate1/100);
    //   this.form.lteValue2=val*(this.form.lteRate2/100);
    //   this.form.lteValue3=val*(this.form.lteRate3/100);
    //   this.form.lteValue4=val*(this.form.lteRate4/100);
    //   this.form.lteValue5=val*(this.form.lteRate5/100)
    // },
     form: {
      handler: function (val) {
        console.log(val)
        this.touru=val.touru;
        this.form.lteValue1=val.touru*(val.lteRate1/100);
        this.form.lteValue2=val.touru*(val.lteRate2/100);
        this.form.lteValue3=val.touru*(val.lteRate3/100);
        this.form.lteValue4=val.touru*(val.lteRate4/100);
        this.form.lteValue5=val.touru*(val.lteRate5/100);
      },
      deep: true //对象的深度验证
    },
    sumsync: {
      handler(val) {
        console.log(val)
        //var idx=val.index+1
      this.sumsync=val
      },
      deep: true,
    },
  },
  computed: {
    
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
    cc(e){
      console.log(e)
      var idx=e.index+1
      this.form['lteRate'+idx]=e.sum
    },
    morecontent(idx){
      var that=this;
      if(this.icon[idx]==='el-icon-remove-outline'){
        this.$set(this.icon,idx,'el-icon-circle-plus-outline')
      }else{
        this.$set(this.icon,idx,'el-icon-remove-outline')
      }
       this.$set(this.addshow,idx,!this.addshow[idx])
    },
    onsubmit(){
      var val=this.form;
       var num=Number(val.lteRate1)+Number(val.lteRate2)+Number(val.lteRate3)+Number(val.lteRate4)+Number(val.lteRate5)
      if(num!=100){
           this.$message({
            message: '各项比例相加不等于100哦！',
            type: 'warning'
          });
          return
        }
        this.dialogFormVisible = false;
        this.$emit('close',this.form.touru)
        
    }
  }
}
</script>

<style lang="less" scoped>
.ipt{
  width:50%;
  margin-right:10px;
}
.smallipt{
  width:22%;
  margin-right:10px;
}
.marL{
  margin-left:10px;
}
.el-dialog{
 max-height: calc(100% - 30px);
  max-width: calc(100% - 30px)
}
.el-form-item{
margin-bottom:10px;
}
 .col{
   cursor: pointer;
    color: #559ae7;
    font-size:20px;
 }
 .tips{
   margin-left:10%;
   min-height:100px;
   width:80%
 }
 .col1{
   margin-left:20px;
 }
</style>