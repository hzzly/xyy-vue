<template>
	<div class="sidebar">
		<div class="sidebar-con" :class="{showbar: showbar}">
	      	<div class="sidebar_head" v-if="loginStatus">
	        	<div class="user">
	          		<img :src="userInfo.avatar" alt="">
	          		<span>{{userInfo.username}}</span>
	        	</div>
	        	<div class="function">
	          		<div class="function_sub">
	          			<router-link to="">
	          				<i class="icon">&#xe626;</i>
	              			<span>我的参加</span>
	          			</router-link>	
	          		</div>
	          		<div class="function_sub">
	          			<a href="javascript:;" @click="logout">
	          				<i class="icon">&#xe674;</i>
	                		<span>退出登录</span>
	          			</a>	
	          		</div>
	        	</div>
	      	</div>
			<div class="sidebar_head" v-else>
	        	<div class="user">
	          		<span>请登录</span>
	        	</div>
	        	<div class="function">
	          		<div class="function_sub">
	          			<router-link to="">
	          				<i class="icon">&#xe626;</i>
	              			<span>我的参加</span>
	          			</router-link>	
	          		</div>
	          		<div class="function_sub">
	          			<router-link to="user/login" @click="hidebar">
	          				<i class="icon">&#xe601;</i>
	                		<span>去登录</span>
	          			</router-link>	
	          		</div>
	        	</div>
	      	</div>
	      	<div class="sidebar_list">
	        	<div class="sidebar_list_first">
	        		<router-link to="/home" @click="hidebar">
	          			<i class="icon" style="color: #76D49B; font-size: 20px;">&#xe60a;</i>
	          			<span>首页</span>
	          		</router-link>	          		
	        	</div>
	        	<ul class="sidebar_list_ul">
	          		<li>
	          			<router-link to="">
		          			我的约行
	              			<span>+</span>
		          		</router-link>
	          		</li>
	          		<li>
	          			<router-link to="">
		          			我的约跑
	              			<span>+</span>
		          		</router-link>
	          		</li>
	        	</ul>
	      	</div>
	    </div>
	    <div v-show="showbar" class="sidebar_mask" @click="hidebar"></div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

import * as _ from '../util/tool'

export default {
	data () {
		return {
			
		}
	},
	// created () {
	// 	let userId = localStorage.userId
	// 	let phone = localStorage.phone
	// 	if (userId && phone) {
	// 		this.isLogin = true
	// 	} else {
	// 		this.isLogin = false
	// 	}
	// },
	computed: {
		...mapGetters([
			'loginStatus',
            'userInfo'
		]),
		showbar () {
			return this.$store.state.com.leftNavStatus
		}
	},
	methods: {
		hidebar () {
			this.$store.dispatch('setNavState', false)
		},
		logout () {
			this.$store.dispatch('setSignOut')
			_.alert('退出登录成功')
			setTimeout(() => {
				this.$router.replace('/user')
			}, 500)
		}
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';

.sidebar {
	.sidebar-con {
	    position: fixed;
	    top: 0;
	    left: px2rem(-600px);
	    transform: translateZ(0);
	    width: px2rem(600px);
	    z-index: 1002;
	    background: #fff;
	    height: 100%;
	    overflow: auto;
	    transition: all .3s ease;
	    &.showbar {
	    	transform: translateX(px2rem(600px));
	    }
	    .sidebar_head{
		    padding: px2rem(35px) px2rem(35px) 0;
		    color: #fff;
		    background: #76D49B;
		    .user {
				img {
				    width: px2rem(100px);
				    height: px2rem(100px);
				    border-radius: 50%;
				    vertical-align: middle;
				}
				span{
				    padding-left: px2rem(15px);
				    font-size: 22px;
				}
			}
			.function{
			    display: flex;
			    margin-top: px2rem(20px);
			    .function_sub{
				    flex: 1;
				    padding-left: px2rem(30px);
				    height: px2rem(100px);
				    line-height: px2rem(100px);
				    a {
				    	display: block;
					    color: #fff;
					}
				}
			}
		}
		.sidebar_list {
			.sidebar_list_first{
			    height: px2rem(100px);
			    line-height: px2rem(100px);
			    font-size: 19px;
			    padding-left: px2rem(35px);
			    a {
			    	display: block;
					color: #76D49B;
			    }
			}
			.sidebar_list_ul{
			    line-height: px2rem(100px);
			    li{
				    height: px2rem(100px);
				    padding-left: px2rem(40px);
				    a{
					    display: block;
					}
					span{
					    float: right;
					    margin-right: px2rem(50px);
					    font-size: 16px;
					    opacity: 0.7; 
					}
				}
			}
		}
		.icon {
			vertical-align: middle;
		}
	}
	.sidebar_mask{
	    position: fixed;
	    width: 100%;
	    margin: 0 auto;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    z-index: 1001;
	    background: rgba(0,0,0,.7);
	}
}

</style>