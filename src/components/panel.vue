<template>
    <div class="panel">
        <router-link :to="{ path: '/sport/'+ sport.objectId }">
            <h4 class="title">{{sport.title}}</h4>
            <p class="desc">{{sport.content}}</p>
            <ul>
                <li class="username">{{sport.releaseUsername}}</li>
                <li class="datetime">{{sport.releaseTime}}</li>
            </ul>
            <span class="isover">正在报名</span>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        sport: Object
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
@import '../assets/css/function';

.panel {
    margin: px2rem(20px) 0 0;
    font-size: 14px;
    background: #fff;

    a {
        display: block;
        color: #555;
        padding: px2rem(30px);
        position: relative;
        .title {
            font-weight: 400;
            font-size: 16px;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            word-wrap: break-word;
            word-break: break-all;
        }
        .desc {
            color: #999;
            font-size: 13px;
            line-height: 1.5;
            margin: px2rem(10px) 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        ul {
            display: flex;
            li {
                margin-right: px2rem(20px);
                font-size: 13px;
                color: #cecece;
            }
        }
        .isover {
            position: absolute;
            right: px2rem(20px);
            top: px2rem(10px);
            width: px2rem(150px);
            height: px2rem(50px);
            line-height: px2rem(50px);
            background: rgba(0,125,255,0.48);
            text-align: center;
            color: #fff;
        }
    }
}
</style>