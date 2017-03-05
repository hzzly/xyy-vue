<template>
    <div class="navbar">
        <nav class="nav-box clearfix">
            <ul class="nav-bar">
                <li v-for="(item, index) in itemTab" class="nav-bar-item" :class="{'nav-bar-active':initIndex === index}" @click="changeTab(index)">
                    {{item.title}}
                </li>
            </ul>
        </nav>
        <section class="scroll-list">
            <travel v-for="(item,index) in travelsList" :travel="item" v-show="initIndex == 0"></travel>
            <panel v-for="(item,index) in sportsList" :sport="item" v-show="initIndex == 1"></panel>
        </section>
        <div class="btn-apply" id="drag1">
            <div @click="post">
                <i class="icon">&#xe678;</i>
                <span>去发布</span>
            </div>
        </div>
    </div>
</template>

<script>
    import travel from '@/components/travel'
    import panel from '@/components/panel'

    import api from '../fetch/api.js'
    import * as _ from '../util/tool'
    import { mapGetters } from 'vuex'

    export default {

        components: {
            travel,
            panel
        },
        data() {
            return {
                initIndex: 0,
                itemTab: [
                    { 'title': '约跑', 'type': 'sport' },
                    { 'title': '约行', 'type': 'travel' }
                ],
                travelsList: [],
                sportsList: []
            }
        },
        created() {
            api.getMyTravel(this.userInfo.objectId)
                .then(res => {
                    this.travelsList = res.data
                })
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        methods: {
            changeTab(index) {
                window.scroll(0, 0)
                this.initIndex = index
            },
            post() {
                this.$router.push('/user/post')
            },
        },
        mounted() {
            var obj1 = document.getElementById('drag1');
            obj1.addEventListener('touchmove', function (event) {

                if (event.targetTouches.length == 1) {
                    event.preventDefault();// 阻止浏览器默认事件，重要 
                    var touch = event.targetTouches[0];
                    // 把元素放在手指所在的位置
                    obj1.style.left = touch.pageX - 50 + 'px';
                    obj1.style.top = touch.pageY - 50 + 'px';
                }
            }, false);
        }
    }

</script>

<style lang="scss" scoped>
    @import '../assets/css/function';
    .navbar {
        .nav-box {
            position: fixed;
            top: px2rem(100px);
            z-index: 1;
            width: 100%;
            height: px2rem(100px);
            line-height: px2rem(100px);
            text-align: center;
            background: #fff;
            .nav-bar {
                display: flex;
                .nav-bar-item {
                    flex: 1;
                    font-size: 14px;
                }
                .nav-bar-active {
                    border-bottom: 3px solid #76D49B;
                    color: #76D49B;
                }
            }
        }
        .scroll-list {
            margin-top: px2rem(100px);
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