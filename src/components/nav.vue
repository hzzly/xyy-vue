<template>
	<div class="y-nav">
        <div class="y_nav_h">
			<img src="../assets/images/homepage_man.png" alt="">年轻哪能不放纵，约起来
		</div>
        <ul>
			<li>
				<router-link to="/user/regist">
					<i class="icon">&#xe733;</i>
					<span>新用户</span>
				</router-link>
			</li>
			<li>
				<router-link to="/user/navbar">
					<i class="icon">&#xe666;</i>
					<span>我的约跑</span>
				</router-link>
			</li>
			<li>
				<router-link to="/user/navbar">
					<i class="icon">&#xe6bd;</i>
					<span>我的约行</span>
				</router-link>
			</li>
			<li>
				<router-link to="/user/post">
					<i class="icon">&#xe63c;</i>
					<span>去发布</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';

.y-nav {
    background: #fff;
    padding-bottom: px2rem(20px);
	.y_nav_h {
		width: px2rem(380px);
		margin: 0 auto;
		text-align: center;
		padding-top: 5px;
		position: relative;
		padding-bottom: 3px;
		border-bottom: 1px solid #000;
		img {
			width: px2rem(60px);
			height: px2rem(55px);
			margin-left: -5px;
			vertical-align: middle;
		}
	}
	ul {
		display: flex;
        margin-top: px2rem(15px);
		li {
			width: 25%;
			text-align: center;
			.icon {
				display: block;
				width: px2rem(110px);
				height: px2rem(110px);
				line-height: px2rem(110px);
				background: #2ad2c9;
				font-size: 22px;
				margin: 0 auto;
				border-radius: 45%;
                margin-bottom: px2rem(15px);
			}
            span {
                font-size: 13px;
            }
		}
	}
}

</style>