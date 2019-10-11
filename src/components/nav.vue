<template>
  <div class="nav flexbox">
    <div class="navcontent" v-show="showNav">
      <div style="height:18%"></div>
      <div class="navtab">
        <div class="active">
          <img src="@/assets/image/school.png" alt />
          <div>高校</div>
        </div>
        <div>
          <img src="@/assets/image/home.png" alt />
          <div>住宅区</div>
        </div>
        <div>
          <img src="@/assets/image/build.png" alt />
          <div>写字楼</div>
        </div>
        <div>
          <img src="@/assets/image/gongye.png" alt />
          <div>工业园区</div>
        </div>
      </div>
    </div>
    <div class="logo" @click="navclick">
      <img src="@/assets/image/nav.png" alt="13" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Nav',
  data() {
    return {
      page: this.$route.path,
      showNav: false
    }
  },
  created() { },
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
    navclick() {
      this.showNav = !this.showNav
    }
  }
}
</script>

<style lang="less" scoped>
.navcontent {
  width: 76px;
  height: 93%;
  padding: 0.5em 0 0.35em;
  position: relative;
  color: #7a98db;
  font-size: 12px
}
.navcontent::after {
  background: #090f40;
  transform: perspective(15px) rotateY(2deg);
  border: 2px solid #0b5eb4; /*描边*/
  background-image: linear-gradient(
    rgba(11, 94, 180, 0.8),
    rgba(11, 94, 180, 0)
  ); /*添加一层白色的渐变*/
  box-shadow: 0 0.1em #0b5eb4 inset; /*白色的内阴影，打造高光的效果*/
  top: 38px;
  box-sizing: border-box;
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1
}
.navtab {
  width: 100%;
  height: 50%;
  text-align: center;
  font-size: 12px;
  box-sizing: border-box;
  padding-right: 5px;
}
.navtab > div {
  height: 65px;
  line-height: 16px;
  cursor: pointer
}
.navtab img {
  width: 24px;
  margin-top: 10px
}
.navtab .active {
  background-color: #0d59b3;
  color: #fff
}
.danwei {
  font-size: 12px;
  margin-left: 5px
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
  z-index: 2
}
.nav .logo {
  position: relative;
  top: 50%;
  left: -3px;
  z-index: 2;
  height: 135px;
  width: 20px;
  cursor: pointer;
  margin-top: -67px
}
.logo img {
  width: 20px
}
</style>