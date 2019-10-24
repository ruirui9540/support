<template>
  <div class="contain flexbox">
    <el-row :gutter="20">
      <el-col :span="12"><Left></Left></el-col>
      <el-col :span="12"><Right1></Right1></el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import Left from '../components/left'
import Right1 from '../components/right1'
export default {
  name: 'home',
  data() {
    return {
      newsList: ''
    }
  },
  components: {
    Left: Left,
    Right1: Right1
  },
  created() {},
  methods: {
    to(e) {
      console.log(e)
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>

  .contain{
  width:100%;
  height:calc(100% - 95px);
  margin:20px;
  box-sizing: border-box;
  .el-row {
    width:100%;
    height:100%;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col{
      height:100%;
    }
  }
}
</style>