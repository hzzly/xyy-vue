<template>
	<div class="home">
		<div class="banner">
			 <swiper :options="swiperOption" class="swiper-box">
					<swiper-slide class="swiper-item"><img src="../assets/images/y-banner01.jpg" alt="..."></swiper-slide>
					<swiper-slide class="swiper-item"><img src="../assets/images/y-banner03.jpg" alt="..."></swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<v-nav></v-nav>
		<travel-list :travel-lists="travelListIndex"></travel-list>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import nav from '@/components/nav'
import travelList from '@/components/travelList'

import { mapGetters } from 'vuex'

export default {
	
	components: {
		swiper,
		swiperSlide,
		'v-nav': nav,
		travelList
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				slidesPerView: 1,
				autoplay: 5000,
				paginationClickable: true,
				spaceBetween: 30,
				loop: true
			}
		}
	},
	created() {
        if (this.travelListIndex.length == 0) {
            this.$store.dispatch('getTravelsList')
        }
    },
	computed: {
		...mapGetters([
			'travelListIndex'
		])
	},
	mounted(){
		
    },
	methods: {
		
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';

.banner {
	.swiper-box {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		.swiper-item {
			height: px2rem(380px);
			text-align: center;
			font-size: 18px ;
			background: #fff;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			align-items: center;
			img {
				width: 100%;
			}
		}
	}
}


</style>