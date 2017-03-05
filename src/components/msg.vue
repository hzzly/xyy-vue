<template>
    <div class="msg">
        <router-link to="" class="unread">
            <div class="content-w">
                <div class="title">
                    <h2><nobr>消息标题</nobr></h2>
                </div>
                <div class="divider"></div>
                <div class="message-text">
                    <p>消息主体消息主体消息主体消息主体消息主体消息主体消息主体</p>
                </div>
                <div class="time">
                    <span>2017-2-20 9:59:59</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        // link: String,
        // text: String,
        // desc: String
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

.msg {
    a {
        display: block;
        background: #fff;
        margin: px2rem(20px);
        position: relative;
        .content-w {
            padding: 0 px2rem(20px);
            .title {
                height: px2rem(80px);
                line-height: px2rem(80px);
                h2 {
                    width: px2rem(650px);
                    height: px2rem(100px);
                    color: #000;
                    font-size: 16px;
                    padding: 0 px2rem(10px);
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .divider{
                width: 100%;
                border: 1px dashed #d9d9d9;
            }
            .message-text{
                padding-top: px2rem(25px);
                padding-left: px2rem(10px);
                font-size: 14px;
                color: #999;
                p{
                    width: px2rem(660px);
                    height: px2rem(90px);
                    line-height: px2rem(40px);
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: normal!important;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
            .time{
                padding: px2rem(25px) px2rem(10px) px2rem(30px);
                font-size: px2rem(26px);
                color: #999;
            }
        }
        /*&:last-child{
            margin-bottom: px2rem(30px);
        }*/
    }
    .unread{
        position: relative;
        &::after{
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            background: #ff3824;
            border-radius: 100%;
            top: px2rem(-8px);
            right: px2rem(-8px);
        }
    }
}
</style>