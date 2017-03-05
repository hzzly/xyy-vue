<template>
	<div class="tabar" v-show="isShowTabbar">
		<div class="tab">
			<div class="tab-item">
				<router-link to="/home">
					<div class="tab-icon"><img src="../assets/images/tab_home.png" alt=""></div>
					<div class="tab-text">首页</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/sport">
					<div class="tab-icon"><img src="../assets/images/tab_running.png" alt=""></div>
					<div class="tab-text">约跑</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/travel">
					<div class="tab-icon"><img src="../assets/images/tab_travel.png" alt=""></div>
					<div class="tab-text">约行</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/user">
					<div class="tab-icon"><img src="../assets/images/tab_user.png" alt=""></div>
					<div class="tab-text">我的</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	computed: {
		isShowTabbar () {
			let routeLength = this.$route.path.split('/').length
			return routeLength > 2 ? false : true
		}
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';

.tabar{
	.tab{
		position: fixed;
		bottom: 0;
		left: 0;
	    display: flex;
	    width: 100%;
	    height: px2rem(120px);
	    line-height: px2rem(120px);
	    background: #fff;
		box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
	    &:after{
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			border-top: 1px solid rgba(7, 17, 27, 0.1);
			content: '';
		}
	    .tab-item{
	    	flex: 1;
	    	text-align: center;
			a{
				display: block;
				font-size: 14px;
					color: rgb(77, 85, 93);
					&.active{
						color: #76D49B;
						text-decoration: none;
					}
				.tab-icon{
					width: px2rem(50px);
					height: px2rem(50px);
					margin: 0 auto;
					img{
						width: 100%;
					}
				}
				.tab-text{
					height: px2rem(80px);
					line-height: px2rem(80px);
				}
			}
			
	    }
	}
}
</style>