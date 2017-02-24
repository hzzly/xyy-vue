<template>
    <div class="cell">
        <ul class="detail-cell">
            <li><i class="icon">&#xe615;</i><span>活动时间：</span>{{beginTime}}--{{endTime}}</li>
            <li><i class="icon">&#xe615;</i><span>报名截止：</span>{{cantJoinTime}}</li>
            <li><i class="icon">&#xe600;</i><span>活动地址：</span>{{destination}}</li>
            <li><i class="icon">&#xe694;</i><span>是否收费：</span>否</li>
            <li><i class="icon">&#xe601;</i><span>发布人：</span>{{releaseUsername}}</li>
            <li></li>
        </ul> 
    </div>
</template>

<script>
export default {
    // props: [beginTime,endTime,cantJoinTime,destination,releaseUsername],
    props: {
        beginTime: Object,
        endTime: Object,
        cantJoinTime: Object,
        destination: String,
        releaseUsername: String,
    },
    data() {
        return {
            
        }
    },
    methods() {
        console.log(this.beginTime)
    },
    filters: {
        formatTime (value) {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../common/style/function';

.cell {
    background: #fff;
    .detail-cell {
        color: #999;
        border-bottom: 1px solid #EAEAEA;
        border-top: 10px solid #f1f1f1;
        font-size: 15px;
        li {
            border-top: 1px solid #f1f1f1;
            padding: px2rem(25px) px2rem(20px);
            &:nth-of-type(4) {
                color: red;
            }
        }
        .icon {
            color: #999;
            font-size: 17px;
            margin-right: px2rem(15px);
        }
    }
    

}
</style>