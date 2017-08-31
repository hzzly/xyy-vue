import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/Home')
const Sport = () => import('@/pages/Sport')
const Travel = () => import('@/pages/Travel')
const User = () => import('@/pages/User')

const Login = () => import('@/pages/Login')
const Regist = () => import('@/pages/Regist')
const Post = () => import('@/pages/Post')
const PostTab = () => import('@/pages/PostTab')

const UserInfo = () => import('@/pages/UserInfo')
const Msg = () => import('@/pages/Msg')
const Set = () => import('@/pages/Set')

const Detail = () => import('@/pages/Detail')
const NotFound = () => import('@/pages/NotFound')

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sport',
      name: 'sport',
      component: Sport
    },
    {
      path: '/sport/:id',
      name: 'sport-detail',
      component: Detail
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel
    },
    {
      path: '/travel/:id',
      name: 'travel-detail',
      component: Detail
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      children: [{
        path: 'user-info',
        name: 'user-info',
        component: UserInfo
      }, {
        path: 'msg',
        name: 'msg',
        component: Msg
      }, {
        path: 'set',
        name: 'set',
        component: Set
      }, {
        path: 'login',
        name: 'login',
        component: Login
      }, {
        path: 'regist',
        name: 'regist',
        component: Regist
      }, {
        path: 'post',
        name: 'post',
        component: Post
      }, {
        path: 'post-tab',
        name: 'post-tab',
        component: PostTab
      }]
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
