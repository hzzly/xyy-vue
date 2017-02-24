// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from './http'
import store from './store'
import { getAllTravelLists, getAllSportLists, setStateUser } from './store/actions'

// import VueAwesomeSwiper from 'vue-awesome-swiper'

// Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  template: '<App/>',
  components: { App }
})

getAllTravelLists(store)
getAllSportLists(store)

if (localStorage.userId && localStorage.phone) {
  setStateUser(store, localStorage.userId)
}