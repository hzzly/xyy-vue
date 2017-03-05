<template>
    <div class="set">

        <group :cell-lists="cellLists1"></group>
        <div class="set-btn" @click="submit">
      		修改
        </div>
    </div>
</template>

<script>
import group from '@/components/group'

import { mapGetters } from 'vuex'
import * as _ from '../util/tool'

export default {

	components: {
		group
	},
	data () {
		return {

		}
	},
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            if(!vm.loginStatus) {
                vm.$router.push('/user/login')
            }
        })
    },
	methods: {
		submit () {
			_.alert('开发中')
		}
	},
	computed: {
		...mapGetters([
			'userInfo',
            'loginStatus'
		]),

		cellLists1 () {
			let cellLists1 = [
				{ link: '', iconUrl: '', text: '头像', avatar: this.userInfo.avatar, more: true},
				{ link: '', iconUrl: '', text: '用户名', desc: this.userInfo.nickname},     
				{ link: '', iconUrl: '', text: '性别', desc: this.userInfo.sex},     
				{ link: '', iconUrl: '', text: '高校', desc: this.userInfo.universities},     
				{ link: '', iconUrl: '', text: '手机', desc: this.userInfo.mobilePhoneNumber},     
				{ link: '', iconUrl: '', text: '邮箱', desc: ''},     
				{ link: '', iconUrl: '', text: '签名', desc: ''},     
			]
			return cellLists1
		}
		
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';

.set {
	.set-btn {
		background: #fff;
		height: px2rem(100px);
		line-height: px2rem(100px);
		margin-top: px2rem(20px);
		text-align: center;
		color: red;
		font-size: 15px;
	}
}
</style>