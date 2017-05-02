<template>
  <div class="wrapper">
    <me-sidebar :menus="sideMenus"></me-sidebar>
    <div class="main">
      <me-header></me-header>
      <me-headerbar :menus="headerMenus"></me-headerbar>
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
      <me-footer></me-footer>
    </div>
  </div>
</template>

<script>
import Util from '../util'
import Nav from '../config/nav'
import meSidebar from './sidebar.vue'
import meHeaderbar from './headerbar.vue'
import meHeader from './header.vue'
import meFooter from './footer.vue'
export default {
  data() {
    return {
      sideMenus: []
    }
  },
  computed: {
    headerMenus() {
      return this.$store.getters.headerMenus
    },
  },
  components: {
    meSidebar, 
    meHeaderbar,
    meHeader,
    meFooter
  },
  mounted() {
    let self = this
    Util.navAuthFilter(Nav).then(newNav => {
      self.sideMenus = newNav
    })
    //页面加载时美化URL（去除url后面ticket等参数）
    window.location.href = Util.beautyUrl();
  }
}
</script>
<style lang="sass">
  *, :after, :before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #app, .wrapper {
    height: 100%;
  }
  body {
    font-family: "Helvetica Neue", "Helvetica", "Microsoft YaHei", "arial", "STHeiTi", "sans-serif";
  }
  .wrapper {
    display: flex;
    flex-direction: row;
  }
  .main {
    display: flex;
    flex-direction: column;
    flex: auto;
    margin-left: 200px;
    overflow:hidden;
  }
  .content {
    padding: 20px;
    flex: auto;
  }
  a { 
    text-decoration: none; 
  }
</style>