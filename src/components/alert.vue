<template>
    <div class="alert">
        <div class="alert-wrap">
            <div class="text">
                {{alertMsg}}
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {

            }
        },
        computed: mapState({
            alertMsg: state => state.com.alertMsg
        })
    }

</script>

<style lang="scss" scoped>
    @import '../assets/css/function';
    .alert {
        z-index: 1000;
        .alert-wrap {
            position: fixed;
            width: px2rem(250px);
            height: px2rem(90px);
            line-height: px2rem(90px);
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: px2rem(45px);
            background: rgba(0, 0, 0, 0.6);
            .text {
                font-size: 14px;
                color: #fff;
            }
        }
    }
</style>