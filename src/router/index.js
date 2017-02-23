import Vue from 'vue'
import Router from 'vue-router'

/*4个主要页面结构*/
import home from 'pages/home/home'
import sports from 'pages/sports/sports'
import travels from 'pages/travels/travels'
import user from 'pages/user/user'

import set from 'pages/user/set'
import login from 'pages/user/login'
import register from 'pages/user/register'
import userInfo from 'pages/user/userInfo'
import travelDetail from 'components/travelDetail'
import sportDetail from 'components/sportDetail'
import addActivity from 'components/addActivity'
import userMsg from 'components/userMsg'

Vue.use(Router)

const router = new Router({
	linkActiveClass: 'active',
	routes: [
		{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/sports',
			name: 'sports',
			component: sports
		},
		{
			path: '/travels',
			name: 'travels',
			component: travels
		},
		{
			path: '/user',
			name: 'user',
			component: user
		},
		{
			path: '/user/login',
			component: login
		},
		{
			path: '/user/register',
			component: register
		},
		{
			path: '/user/info',
			component: userInfo
		},
		{
			path: '/user/set',
			component: set
		},
		{
			path: '/user/eadit',
			component: addActivity
		},
		{
			path: '/user/msg',
			component: userMsg
		},
		{
			path: '/travels/:id',
			component: travelDetail
		},
		{
			path: '/sports/:id',
			component: sportDetail
		}
	]
})

router.push('/home')

export default router
