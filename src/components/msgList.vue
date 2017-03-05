<template>
	<div class="msg-list">
        <msg v-for="(item,index) in msgLists"></msg>
	</div>
</template>

<script>
import msg from '@/components/msg'

export default {
    components: {
        msg
    },
	data() {
		return {
            msgLists: [
                { id:1 },
                { id:1 },
                { id:1 },
                { id:1 },
                { id:1 },
                { id:1 },
                { id:1 },
            ]
		}
	}
}
</script>
