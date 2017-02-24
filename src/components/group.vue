<template>
    <div class="group">
        <cell v-for="(item,index) in cellLists" 
            :link="item.link" 
            :icon-url="item.iconUrl" 
            :text="item.text" 
            :desc="item.desc" 
            :badg="item.badg"
            :more="item.more"
            :avatar="item.avatar">
        </cell>
    </div>
</template>

<script>
import cell from 'components/userCell'

export default {
    props: {
        cellLists: Array
    },
    components: {
        cell
    },
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import '../common/style/function';

.group {
    margin-bottom: px2rem(20px);
    // .cell {
    //     &:last-child {
    //         a{
    //             border-bottom: none;
    //         }         
    //     }
    // }
}

</style>