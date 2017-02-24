<template>
	<div class="travels">
		<travel-list :travel-lists="travelList"></travel-list>
	</div>
</template>

<script>

import travelList from 'components/travelList'

import { mapGetters } from 'vuex'

export default {

	components: {
		travelList
	},
	computed: {
		...mapGetters([
			'travelList'
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