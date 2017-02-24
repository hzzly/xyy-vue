import Vue from 'vue'

import Vuex from 'vuex'

import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

// 状态集合， 全局管理的引起界面状态改变的值
const state = {
	sportLists: [],
	travelLists: [],
	user: {},
	showToast: false,
	showSuccess: true,
	showFail: false,
	toastMsg: '操作成功',
	showLoading: false,
	showSidebar: false
};

export default new Vuex.Store({
	state,      /*状态*/
	mutations,  /*状态改变*/
	actions,     /*状态改变de动作*/
	getters
})