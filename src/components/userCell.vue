<template>
    <div class="cell">
        <router-link :to="link">
            <div class="cell-l">
                <img :src="iconUrl" class="cell-icon" v-show="iconUrl" alt="">
                <span class="text">{{text}}</span>
            </div>
            <div class="cell-r">
                <span class="text" v-show="desc" style="vertical-align: sub;">{{desc}}</span>
                <span class="badg" v-show="badg" style="vertical-align: middle;">{{badg}}</span>
                <span class="avatar" v-how="avatar"><img :src="avatar" alt=""></span>
                <img v-show="more" src="../assets/images/more.png" class="more" alt="">
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        link: String,
        iconUrl: String,
        text: String,
        desc: String,
        badg: String,
        avatar: String,
        more: Boolean
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

.cell {
    background: #fff;
    position: relative;
    a {
        display: flex;
        justify-content: space-between;
        height: px2rem(95px);
        line-height: px2rem(95px);
        margin: 0 px2rem(20px);
        border-bottom: 1px solid #f5f5f5;
        .cell-l {
            color: #555;
            .cell-icon {
                width: px2rem(42px);
                height: px2rem(42px);
                vertical-align: middle;
            }
            span {
                font-size: 14px;
                margin-left: px2rem(10px);
            }
        }
        .cell-r {
            .badg {
                display: inline-block;
                color: #fff;
                width: px2rem(35px);
                height: px2rem(35px);
                line-height: px2rem(38px);
                text-align: center;
                background: red;
                border-radius: 50%;
            }
            .avatar {
                position: absolute;
                top: px2rem(10px);
                right: px2rem(55px);
                width: px2rem(80px);
                height: px2rem(80px);
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
            .more {
                width: px2rem(35px);
                height: px2rem(35px);
                vertical-align: middle;
            }
        }
    }
    

}
</style>