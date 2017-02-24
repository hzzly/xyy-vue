<template>
  <div id="app">
      <!--<transition name="fade">-->
        <v-toast v-show="showToast"></v-toast>
      <!--</transition>-->
      <v-loading v-show="showLoading"></v-loading>
      <v-header :title="title" :menu-display="menuDisplay" :back-display="backDisplay" :map-display="mapDisplay"></v-header>
      <div class="content" :class="{tabar: tabar}">
        <transition name="slide-left">
          <router-view></router-view>
        </transition>  
      </div>

      <v-tabar></v-tabar>
      <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import tabar from 'components/tabar'
import header from 'components/header'
import sidebar from 'components/sidebar'
import toast from 'components/toast'
import loading from 'components/loading'

export default {
  name: 'app',
  components: {
    'v-tabar': tabar,
    'v-header': header,
    'v-sidebar': sidebar,
    'v-toast': toast,
    'v-loading': loading,
  },
  data () {
    return {
      
    }
  },
  mounted () {
    
  },
  computed: {
      title () {
        switch (this.$route.path.split('/')[1]) {
            case 'home':
              return "Qu约"
            case 'sports':
              return "约跑"
            case 'travels':
              return "约行"
            case 'user':
              return "我的"
        }
      },
      tabar () {
        return this.$route.path.split('/').length > 2 ? false : true
      },
      menuDisplay () {
        if (this.$route.path.split('/')[1] == 'home') {
          return false
        }
        return this.$route.path.split('/').length > 2 ? false : true
      },
      backDisplay () {
        return this.$route.path.split('/').length > 2 ? true : false
      },
      mapDisplay () {
        if (this.$route.path.split('/')[1] == 'home') {
          return true
        }
        return false
      },
      showToast () {
        return this.$store.state.showToast
      },
      showLoading () {
        return this.$store.state.showLoading
      }
  }
}
</script>

<style lang="scss">
@import './common/style/index';

@font-face {
  font-family: 'icon';  /* project id 172436 */
  src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot');
  src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.svg#iconfont') format('svg');
}
.icon {
    font-family:"icon" !important;
    font-size:18px;
    font-style:normal;
    color: #ffffff;
}

html,body {
  height: 100%;
}

a.active {
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #F5F5F5;
  .content{
    padding-top: px2rem(100px);
    background: #F5F5F5;
  }
  .tabar {
    margin-bottom: px2rem(120px);
  }
  .slide-left-enter-active {
    animation: slideLeft .3s;
  }
}

@keyframes slideLeft {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}


</style>
