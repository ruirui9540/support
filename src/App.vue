<template>
  <div id="app" class='height'>
    <Nav></Nav>
    <div class="height">
      <Header></Header>
      <router-view />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Header from './components/head'
import Nav from './components/nav'
export default {
  name: 'app',
  data() {
    return {
      HeaderShow: false,
      FooterShow: false
    }
  },
  components: {
    Header: Header,
    Nav: Nav
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>

</style>
