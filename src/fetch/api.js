import axios from 'axios'
import qs from 'qs'

import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c6b6b1815b74a0aacc7a902/xyy';

//POST传参序列化
axios.interceptors.request.use((config) => {
	if (config.method === 'post') {
		config.data = qs.stringify(config.data);
	}
	return config;
}, (error) => {
	_.toast("错误的传参", 'fail');
	return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
	if (!res.data.success) {
		// _.toast(res.data.msg);
		return Promise.reject(res);
	}
	return res;
}, (error) => {
	_.toast("网络异常", 'fail');
	return Promise.reject(error);
});

export function fetchPost(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err);
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: param
      })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
	/**
	 * 用户登录
	 */
	Login(params) {
		return fetchPost('/users/api/userLogin', params)
	},

	/**
	 * 用户注册
	 */
	Regist(params) {
		return fetchPost('/users/api/userRegist', params)
	},

	/**
	 * 发送注册验证码
	 */
	RegistVerifiCode(tellphone) {
		return fetchPost('/users/api/registVerifiCode', { tellphone: tellphone })
	},

	/**
	 * 获取约跑步列表
	 */
	SportsList() {
		return fetchGet('/api/sportList')
	},

	/**
	 * 获取约出行列表
	 */
	TravelsList() {
		return fetchGet('/api/travelList')
	},

	/**
	 * 获取约跑步详情
	 */
	SportsDetail(id) {
		return fetchGet(`/api/sportDetail/${id}`)
	},

	/**
	 * 获取约出行详情
	 */
	TravelsDetail(id) {
		return fetchGet(`/api/travelDetail/${id}`)
	},

	/**
	 * 获取出行活动点击次数
	 */
	travelClicks(id) {
		return fetchGet(`/api/travelClickNum/${id}`)
	},

	/**
	 * 获取用户信息
	 */
	UserInfo(id) {
		return fetchGet(`/api/userInfo/${id}`)
	},

	/**
	 * 获取用户发布约行个数
	 */
	getPubTotravelNum(id) {
		return fetchGet(`/api/getPubTotravelNum/${id}`)
	},

	/**
	 * 获取用户自己发布的约行
	 */
	getMyTravel(id) {
		return fetchGet(`/api/myTravel/${id}`)
	},

	/**
	 * 发布约行活动
	 */
	PostTravel(params) {
		return fetch()
	},

	/**
	 * 获取全国JSON数据
	 */
	getAddressJson() {
		return fetch('/api/address')
	}
}
