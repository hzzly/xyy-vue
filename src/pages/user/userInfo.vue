<template>
    <div class="set">

        <group :cell-lists="cellLists1"></group>
        <div class="set-btn" @click="logout">
      		修改
        </div>
    </div>
</template>

<script>
import group from 'components/group'

import { mapGetters } from 'vuex'

export default {

	components: {
		group
	},
	data () {
		return {

		}
	},
	methods: {
		logout () {
			alert('开发中')
		}
	},
	computed: {
		...mapGetters([
			'userState'
		]),

		cellLists1 () {
			let cellLists1 = [
				{ link: '', iconUrl: '', text: '头像', avatar: this.userState.avatar, more: true},
				{ link: '', iconUrl: '', text: '用户名', desc: this.userState.nickname},     
				{ link: '', iconUrl: '', text: '性别', desc: this.userState.sex},     
				{ link: '', iconUrl: '', text: '高校', desc: this.userState.universities},     
				{ link: '', iconUrl: '', text: '手机', desc: this.userState.mobilePhoneNumber},     
				{ link: '', iconUrl: '', text: '邮箱', desc: ''},     
				{ link: '', iconUrl: '', text: '签名', desc: ''},     
			]
			return cellLists1
		}
		
	}
}
</script>

<style lang="scss" scoped>
@import '../../common/style/function';

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