<template>
	<div class="travels">
		<travel-list :travel-lists="travelsList"></travel-list>
	</div>
</template>

<script>

import travelList from '@/components/travelList'

import { mapGetters } from 'vuex'

export default {

	components: {
		travelList
	},
    created() {
        if (this.travelsList.length == 0) {
            this.$store.dispatch('getTravelsList')
        }
    },
	computed: {
		...mapGetters([
			'travelsList'
		])
	},
	data() {
		return {
			
		}
	},
}
</script>

<style lang="scss" scoped>

.travels {
	padding-top: 1px;
}
</style>