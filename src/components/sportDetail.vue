<template>
    <div class="travel-detail">
        <div class="A-cimg activity-pic">
            <h1>{{sport.title}}</h1>
            <router-link to="">{{sport.releaseUsername}}</router-link>
            <span>| {{sport.releaseTime}}</span>
        </div>     	
        <detail-cell
            :begin-time="sport.beginTime"
            :end-time="sport.endTime"
            :cant-join-time="sport.cantJoinTime"
            :destination="sport.destination"
            :release-username="sport.releaseUsername">
        </detail-cell>   
        <div class="activity-details">
            <p>{{sport.content}}</p>
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

export default {
    components: {
        detailCell
    },
    data () {
        return {
            objectId: '',
            sport: ''
        }
    },
    created () {
        this.objectId = this.$route.path.split('/')[2]
        // this.$store.dispatch('travelDetail', objectId)
        post('/api/sportDetail', {sportId: this.objectId})
            .then(response => {
                this.sport = response.data.data
            })
    },
    mounted () {
        
    },
    methods: {
        join () {
            alert('报名'+this.objectId)
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