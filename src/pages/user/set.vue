<template>
    <div class="set">
        <group :cell-lists="cellLists1"></group>
        <div class="set-btn" @click="logout" v-show="logoutBtn">
      		退出登录
        </div>
    </div>
</template>

<script>
import group from 'components/group'

export default {

	components: {
		group
	},
	data () {
		return {
			cellLists1: [
                { link: '/', iconUrl: '', text: '消息推送', desc: '', more: true},
                { link: '/', iconUrl: '', text: '版本更新', desc: '', more: true},     
                { link: '/', iconUrl: '', text: '意见反聩', desc: '', more: true}, 
                { link: '/', iconUrl: '', text: '给我评分', desc: '', more: true},
                { link: '/', iconUrl: '', text: '关于我们', desc: '', more: true}    
            ]
		}
	},
	methods: {
		logout () {
			this.$store.state.user = {}
			localStorage.removeItem('userId')
			localStorage.removeItem('phone')
			alert('退出登录成功')
			this.$router.replace('/user');
		}
	},
	computed: {
		logoutBtn () {
			if (localStorage.userId && localStorage.phone) {
				return true
			} else {
				return false
			}
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