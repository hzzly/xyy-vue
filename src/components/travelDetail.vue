<template>
    <div class="travel-detail">
        <div class="A-cimg activity-pic">
            <img :src="travel.travelPic">
            <span class="p-number"><i class="icon">&#xe62a;</i>{{travel.clicks}}</span>
            <h1>{{travel.title}}</h1>
            <router-link to="">{{travel.releaseUsername}}</router-link>
            <span>| {{travel.releaseTime}}</span>
        </div>     	
        <detail-cell
            :begin-time="travel.beginTime"
            :end-time="travel.endTime"
            :cant-join-time="travel.cantJoinTime"
            :destination="travel.destination"
            :release-username="travel.releaseUsername">
        </detail-cell>   
        <div class="activity-details">
            <p>{{travel.content}}</p>
        </div>
        <div class="btn-apply">
            <div @click="join">
                <i class="icon">&#xe678;</i>
                <span>去报名</span>
            </div>
        </div>
    </div>
</template>

<script>

import detailCell from 'components/detailCell'

import { post } from '../http'

import * as _ from '../config/whole'

export default {
    components: {
        detailCell
    },
    data () {
        return {
            objectId: '',
            travel: ''
        }
    },
    created () {
        this.objectId = this.$route.path.split('/')[2]
        this.$store.dispatch('travelClicks', this.objectId)

        post('/api/travelDetail', {travelId: this.objectId})
            .then(response => {
                this.travel = response.data.data
            })
    },
    mounted () {
        
    },
    methods: {
        join () {
            // this.$store.dispatch('showToast', true)
            // setTimeout(() => {
            //     this.$store.dispatch('showToast', false)
            // }, 2000)
            _.toast('报名成功', 'success')
            // _.toast('报名失败', 'fail')
            // _.loading()
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../common/style/function';

.travel-detail {
    .A-cimg {
        position: relative;
        padding-bottom: px2rem(20px);
        img {
            max-height: px2rem(350px);
            border: 0;
            vertical-align: middle;
            width: 100%;
        }
        .p-number {
            background-color: rgba(0, 0, 0, 0.37);
            color: #FFF;
            padding: px2rem(3px) px2rem(15px);
            font-size: 14px;
            position: absolute;
            top: px2rem(20px);
            right: 0px;
            border-radius: px2rem(20px) 0 0 px2rem(20px);
            .icon {
                font-size: 14px;
            }
        }
        h1 {
            font-weight: normal;
            font-size: 17px;
            padding: px2rem(20px) px2rem(20px) px2rem(15px);
        }
        a {
            color: #06F;
            margin-left: px2rem(20px);
            font-size: 16px;
        }
        span {
            color: #B9B9B9;
            font-size: 14px;
        }
    }
    .activity-pic {
        border-bottom: 1px solid #EAEAEA;
        background: #fff;
    }
    .activity-details {
        padding: px2rem(20px);
        border-top: px2rem(20px) solid #f1f1f1;
        margin-bottom: px2rem(20px);
        background: #fff;
    }
    .btn-apply {
        position: fixed;
        bottom: px2rem(40px);
        right: px2rem(30px);
        width: px2rem(110px);
        height: px2rem(110px);
        background-color: #76D49B;
        border-radius: 50%;
        text-align: center;
        z-index: 9;
        line-height: 1;
        display: block;
        font-size: 14px;
        div {
            .icon {
                display: block;
                line-height: px2rem(60px);
            }
            span {
                color: #fff;
            }
        }
    }
}
</style>