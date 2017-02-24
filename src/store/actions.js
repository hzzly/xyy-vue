
import * as types from './mutation-types'

import router from '../router'

import * as axios from '../http'

import * as _ from '../config/whole'

export const getAllTravelLists = ({ commit }) => {
	axios.post('/api/travelList')
         .then(response => {
			 commit(types.TRAVEL_LISTS, response.data.data)
         })
}


export const getAllSportLists = ({ commit }) => {
	axios.post('/api/sportList')
         .then(response => {
			 commit(types.SPORT_LISTS, response.data.data)
         })
}

export const setStateUser = ({ commit }, id) => {
	axios.post('users/api/userInfo', {userId: id})
         .then(response => {
			 commit(types.SET_USER, response.data.data)
         })
}

export const travelClicks = ({ commit }, id) => {
	axios.post('/api/travelClickNum', {travelId: id})
         .then(response => {
			//  console.log(response)
			//  commit(types.TRAVEL_CLICKS, response.data.data)
         })
}

export const travelDetail = ({ commit }, id) => {
	axios.post('/api/travelDetail', {travelId: id})
         .then(response => {
			 commit(types.TRAVEL_DETAIL, response.data.data)
         })
}

export const sportDetail = ({ commit }, id) => {
	axios.post('/api/sportDetail', {sportId: id})
         .then(response => {
			 commit(types.TRAVEL_DETAIL, response.data.data)
    })
}

export const regist = ({ commit }, data) => {
	axios.post('users/api/userRegist', data)
         .then(response => {
			 alert('注册成功')
			 commit(types.REGIST, response.data.data)
			 localStorage.setItem('userId', response.data.data.objectId)
			 localStorage.setItem('phone', response.data.data.mobilePhoneNumber)
			 router.replace('/user')
    	 })
}

export const showToast = ({ commit }, palyload) => {
	commit(types.SHOW_TOAST, palyload)
}

export const showSuccess = ({ commit }, palyload) => {
	commit(types.SHOW_SUCCESS, palyload)
}

export const showFail = ({ commit }, palyload) => {
	commit(types.SHOW_FAIL, palyload)
}

export const toastMsg = ({ commit }, palyload) => {
	commit(types.TOAST_MSG, palyload)
}

export const showSidebar = ({ commit }, palyload) => {
	commit(types.SHOW_SIDEBAR, palyload)
}

export const showLoading = ({ commit }, palyload) => {
	commit(types.SHOW_LOADING, palyload)
}

export const login = ({ commit }, data) => {
 	_.loading()             //loding开始
  	return new Promise((resolve, reject)=> { 
		axios.post('users/api/userLogin', data)
			 .then(response => {
				 console.log(response)
				//  alert('登录成功')
				_.leave()
				 commit(types.LOGIN, response.data.data); //获得的数据通过mutation，存入store中
				 localStorage.setItem('userId', response.data.data.objectId)
			 	 localStorage.setItem('phone', response.data.data.mobilePhoneNumber)
				 resolve(response);
			 })
  	});
}



