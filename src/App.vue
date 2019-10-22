<template>
  <div id="app" class='height'>
    <div class="height">
      <Header></Header>
      <router-view />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Header from './components/head'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    Header: Header,
  },
  methods:{

  }
}
</script>
