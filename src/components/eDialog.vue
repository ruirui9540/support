<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogFormVisible" 
            @close="$emit('update:show', false)" width='40%'
            :show="show">
  <el-form :model="form">
    <el-form-item label="总投入" :label-width="formLabelWidth">
      <el-col :span="12">
          <el-input v-model="form.touru" autocomplete="off" size='small' ></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
    <el-form-item label="LTE主设备1.8G" :label-width="formLabelWidth">
       <el-col :span="5">
          <el-input v-model="form.lteRate1" autocomplete="off" size='small' ></el-input>
        </el-col>
        <el-col class="line" :span="2">%</el-col>
        <el-col :span="5">
          <el-input v-model="form.lteValue1" :disabled="true" autocomplete="off" size='small'></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
    <el-form-item label="LTE主设备2.1G" :label-width="formLabelWidth">
       <el-col :span="5">
          <el-input v-model="form.lteRate2" autocomplete="off" size='small' ></el-input>
        </el-col>
        <el-col class="line" :span="2">%</el-col>
        <el-col :span="5">
          <el-input v-model="form.lteValue2" :disabled="true" autocomplete="off" size='small'></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
    <el-form-item label="LTE主设备800M" :label-width="formLabelWidth">
       <el-col :span="5">
          <el-input v-model="form.lteRate3" autocomplete="off" size='small' ></el-input>
        </el-col>
        <el-col class="line" :span="2">%</el-col>
        <el-col :span="5">
          <el-input v-model="form.lteValue3" :disabled="true" autocomplete="off" size='small'></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
    <el-form-item label="室内分布系统" :label-width="formLabelWidth">
      <el-col :span="5">
          <el-input v-model="form.lteRate4" autocomplete="off" size='small' ></el-input>
        </el-col>
        <el-col class="line" :span="2">%</el-col>
        <el-col :span="5">
          <el-input v-model="form.lteValue4" :disabled="true" autocomplete="off" size='small'></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
    <el-form-item label="无线网配套及其他" :label-width="formLabelWidth">
       <el-col :span="5">
          <el-input v-model="form.lteRate5" autocomplete="off" size='small' ></el-input>
        </el-col>
        <el-col class="line" :span="2">%</el-col>
        <el-col :span="5">
          <el-input v-model="form.lteValue5" :disabled="true" autocomplete="off" size='small'></el-input>
        </el-col>
      <el-col class="line" :span="3">亿元</el-col>
    </el-form-item>
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
export default {
  name: 'eDialog',
  data() {
    return {
      page: this.$route.path,
      dialogFormVisible: this.show,
       form: {
          touru:'100',
          lteRate1:'20',
          lteValue1:'20',
          lteRate2:'20',
          lteValue2:'20',
          lteRate3:'20',
          lteValue3:'20',
          lteRate4:'20',
          lteValue4:'20',
          lteRate5:'20',
          lteValue5:'20',
        },
        formLabelWidth: '160px'
    }
  },
  props: {
    show: {
        type: Boolean,
        default: false
      },
      title:{
        type:String
      }
  },
  created() { 
    console.log(this.title)
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
        this.touru=val.touru;
        this.form.lteValue1=val.touru*(val.lteRate1/100);
        this.form.lteValue2=val.touru*(val.lteRate2/100);
        this.form.lteValue3=val.touru*(val.lteRate3/100);
        this.form.lteValue4=val.touru*(val.lteRate4/100);
        this.form.lteValue5=val.touru*(val.lteRate5/100);
        
      },
      deep: true //对象的深度验证
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
        this.show = false;
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
 
</style>