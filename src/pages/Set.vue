<template>
    <div class="set">
        <group :cell-lists="cellLists1"></group>
        <div class="set-btn" @click="logout" v-show="loginStatus">
      		退出登录
        </div>
		<v-dialog v-show="dialog" :dialog-msg="dialogMsg" :link-url="linkUrl" @confirm="confirm" @cancel="cancel"></v-dialog>
    </div>
</template>

<script>
import group from '@/components/group'
import dialog from '@/components/dialog'

import { mapGetters } from 'vuex'
import * as _ from '../util/tool'

export default {

	components: {
		group,
        'v-dialog': dialog
	},
	data () {
		return {
			cellLists1: [
                { link: '', iconUrl: '', text: '消息推送', desc: '', more: true},
                { link: '', iconUrl: '', text: '版本更新', desc: '', more: true},     
                { link: '', iconUrl: '', text: '意见反聩', desc: '', more: true}, 
                { link: '', iconUrl: '', text: '给我评分', desc: '', more: true},
                { link: '', iconUrl: '', text: '关于我们', desc: '', more: true}    
            ],
			dialog: false,
            dialogMsg: '确认退出登录?',
            linkUrl: ''
		}
	},
    computed: {
		...mapGetters([
			'loginStatus'
		])
	},
	methods: {
		logout () {
			this.dialog = true
		},
		confirm() {
            this.dialog = false
			this.$store.dispatch('setSignOut')
			_.alert('退出登录成功')
			setTimeout(() => {
				this.$router.replace('/user')
			}, 500)
        },
        cancel() {
            this.dialog = false
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