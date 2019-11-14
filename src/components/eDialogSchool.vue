<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogFormVisible"
      @close="$emit('update:show', false)"
      width="50%"
      :show="show"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="校园：" prop="school">
          <el-radio-group v-model="ruleForm.school" size="medium">
            <el-radio  label="中学"></el-radio>
            <el-radio  label="小学"></el-radio>
            <el-radio  label="幼儿园"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="人数规模：" prop="person">
          <el-radio-group v-model="ruleForm.person" size="medium">
            <el-radio  label="100人以下"></el-radio>
            <el-radio  label="100人-300人"></el-radio>
            <el-radio  label="300人-500人"></el-radio>
            <el-radio  label="500人以上"></el-radio>
          </el-radio-group>
        </el-form-item>
          <el-form-item label="区域：" prop="area">
          <el-radio-group v-model="ruleForm.area" size="medium">
            <el-radio   label="城市"></el-radio>
            <el-radio   label="乡镇"></el-radio>
            <el-radio   label="农村"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="投资金额：" prop="num">
           <el-col :span="8">
            <el-input v-model="ruleForm.num" type='number'></el-input>
           </el-col>
            <el-col :span="2">万元</el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="submitForm('ruleForm')" size="small">立即创建</el-button>
        <el-button type="primary" @click="resetForm('ruleForm')" size="small">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
//import Add from '../components/add'
export default {
  name: 'eDialog',
  data() {
    return {
      page: this.$route.path,
      dialogFormVisible: this.show,
      ruleForm: {
        school: '',
        person: '',
        area: '',
        num: '',
      },
      rules: {
        num: [
          { required: true, message: '投资金额不能为空'},
          { type: 'number', message: '投资金额必须为数字值'}
        ],
        school: [
          {required: true, message: '请选择一个学校', trigger: 'change' }
        ],
        person: [
          { required: true, message: '请选择人数规模', trigger: 'change' }
        ],
        area: [
          { required: true, message: '区域', trigger: 'change' }
        ],
      },

    }
  },
  components: {
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },

  },
  created() {
    this.$nextTick(() => {
      //console.log(this.$commonJS.test() )
    });
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    },
    show() {
      this.dialogFormVisible = this.show;
    },
    // 'form.touru':function(val){
    // },
    form: {
      handler: function (val) {

      },
      deep: true //对象的深度验证
    },
    sumsync: {
      handler(val) {
        console.log(val)
        this.sumsync = val
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

  }
}
</script>

<style lang="less" scoped>
.ipt {
  width: 50%;
  margin-right: 10px;
}
.smallipt {
  width: 22%;
  margin-right: 10px;
}
.marL {
  margin-left: 10px;
}
.el-dialog {
  max-height: calc(100% - 30px);
  max-width: calc(100% - 30px);
}
.el-form-item {
  margin-bottom: 10px;
}
.col {
  cursor: pointer;
  color: #559ae7;
  font-size: 20px;
}
.tips {
  margin-left: 10%;
  min-height: 100px;
  width: 80%;
}
.col1 {
  margin-left: 20px;
}
.text-color {
  color: #fc6e09;
  font-size: 16px;
  font-weight: bold;
  margin: 0 5px;
}
</style>