<template>
	<div class="sports">
		<panel-list :sport-list="sportList"></panel-list>
	</div>
</template>

<script>

import panelList from 'components/panelList'

import { mapGetters } from 'vuex'

export default {

	components: {
		panelList
	},
	data() {
		return {
			
		}
	},
	computed: {
		...mapGetters([
			'sportList'
		])
	},
	mounted(){
		
    },
	methods: {
		
	}
}
</script>