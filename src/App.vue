<template>
  <div id="app">
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

export default {
  name: 'app'，
  components: {
    'v-tabar': tabar,
    'v-header': header,
    'v-sidebar': sidebar,
    'v-toast': toast,
    'v-loading': loading,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
