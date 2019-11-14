<template>
  <div class="contain flexbox">
    <el-row :gutter="20">
      <el-col :span="12"></el-col>
      <el-col :span="12"></el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'demo',
  components: {

  },
  data() {
    return {
      newsList: ''
    }
  },
  created() { },
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

<style lang="less" >
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