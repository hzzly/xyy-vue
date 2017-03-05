<template>
    <div class="login">
        <div class="title"></div>
        <div class="coordinates-icon">
            <div class="coordinates topAct">
                <img src="../assets/images/logo.png" />
            </div>
            <div class="circle-1-1 circle-show-2"></div>
            <div class="circle-2-2 circle-show-1"></div>
            <div class="circle-3-3 circle-show"></div>
        </div>
        <div class="login-form">
            <form action="#">
                <div class="user-name common-div">
                    <span class="eamil-icon common-icon">
                        <i class="icon">&#xe601;</i>
                    </span>
                    <input type="text" name="username" v-model="username" placeholder="手机号" />        
                </div>
                <div class="user-pasw common-div">
                    <span class="pasw-icon common-icon">
                        <i class="icon">&#xe687;</i>
                    </span>
                    <input type="password" name="password" v-model="password" placeholder="密码" />        
                </div>
                <div class="login-btn" @click="_login">登录</div>
            </form>
        </div>
        <div class="forgets">
            <router-link to="">忘记密码?</router-link>
            <router-link to="regist">新来的?注册</router-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import api from '../fetch/api'
import * as _ from '../util/tool'

export default {

    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions({ setUserInfo: 'setUserInfo' }),

        // 用户登录
        _login() {
            if (!this.username || !this.password) {
                _.alert('请填写完整')
                return
            }
            let data = {
                username: this.username,
                password: this.password
            }
            this.$store.dispatch('setLoadingState', true)
            api.Login(data)
                .then(res => {
                    console.log(res)
                    if(res.success) {
                        // let userInfo = Object.assign()
                        this.$store.dispatch('setLoadingState', false)
                        this.setUserInfo(res.data)
                        this.$router.replace('/home')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';


.login{
    width:100%;
    height: 100%;
    overflow:hidden;
    background-color: #323542;
    padding-bottom: px2rem(260px);
    .title{
        width:100%;
        height:auto;
        overflow:hidden;
        font-size:18px;
        text-align:center;
        height:px2rem(200px);
        color:#fff;
    }
    .coordinates-icon{
        width:px2rem(400px);
        height:px2rem(250px);
        margin:px2rem(50px) auto;
        position:relative;
        .coordinates{
            width:px2rem(150px);
            overflow:hidden;
            position:absolute;
            z-index:8;
            left: 32%;
            img{
                width:100%;
                height:auto;
            }
        }
        .circle-1-1{
            width:100%;
            height:px2rem(150px);
            overflow:hidden;
            border:1px solid rgba(255,255,255,0.5);
            border-radius:100%;
            background-color:#3a3d4a;
            position:absolute;
            bottom:0;
            z-index:1;
            opacity:0;
        }
        .circle-2-2{
            width:px2rem(230px);
            height:px2rem(80px);
            overflow:hidden;
            border:1px solid rgba(255,255,255,0.4);
            border-radius:100%;
            background-color:#4e515c;
            left:75%;
            margin-left:px2rem(-217px);
            bottom:px2rem(35px);
            position:absolute;
            z-index:2;
            opacity:0;
        }
        .circle-3-3{
            width:px2rem(130px);
            height:px2rem(50px);
            overflow:hidden;
            border:1px solid rgba(255,255,255,0.3);
            border-radius:100%;
            background-color:#71747d;
            z-index:3;
            left:35%;
            margin-left:px2rem(-8px);
            bottom:px2rem(50px);
            position:absolute;
            opacity:0;
        }
    }
    .login-form{
        width:px2rem(600px);
        height:auto;
        margin:0 auto;
        .common-div{
            width:100%;
            height:px2rem(80px);
            overflow:hidden;
            border-radius:4px;
            margin-bottom: px2rem(50px);
            >.common-icon{
                float:left;
                width:px2rem(40px);
                height:px2rem(40px);
                line-height: px2rem(40px);
                overflow:hidden;
                margin:px2rem(20px);
                text-align: center;
                img{
                    width:100%;
                    height:auto;
                }
            }
            >input{
                float:left;
                line-height: px2rem(80px);
                background-color:transparent;
                border:none;
                outline:none;
                font-size:16px;
                color:#fff;
            }
        }
        .user-name,.user-pasw{
            background-color:rgba(255,255,255,0.1);
        }
        .login-btn{
            background-color:#0bd38a;
            color:#fff;
            font-size:20px;
            text-align:center;
            height:px2rem(100px);
            line-height:px2rem(100px);
            margin-bottom: px2rem(50px);
            border-radius:4px;
        }
    }
    .forgets{
        width:px2rem(600px);
        height:auto;
        margin:0 auto;
        >a{
            color:#fff;
            opacity:0.2;
            font-size:16px;
            +a{
                float:right;
            }
        }
    }
}

.topAct{
    animation:topAct 3s ease-in-out infinite;
    -webkit-animation:topAct 3s ease-in-out infinite;
    -moz-animation:topAct 3s ease-in-out infinite;
    -o-animation:topAct 3s ease-in-out infinite;
    -ms-animation:topAct 3s ease-in-out infinite;
}
@keyframes topAct
{
    0% {top:px2rem(-100px);}
    50% {top:px2rem(-30px);}
    100%{top:px2rem(-100px);}
}
@-webkit-keyframes topAct
{
    0% {top:px2rem(-100px);}
    50% {top:px2rem(-30px);}
    100%{top:px2rem(-100px);}
}
@-moz-keyframes topAct
{
    0% {top:px2rem(-100px);}
    50% {top:px2rem(-30px);}
    100%{top:px2rem(-100px);}
}

.circle-show{
    animation:circleShow 3s ease-in-out infinite 1s;
    -webkit-animation:circleShow 3s ease-in-out infinite 1s;
    -moz-animation:circleShow 3s ease-in-out infinite 1s;
    -ms-animation:circleShow 3s ease-in-out infinite 1s;
    -o-animation:circleShow 3s ease-in-out infinite 1s;
}
@keyframes circleShow
{
    0% {opacity:0;}
    50% {opacity:1;}
    100%{opacity:0;}
}
@-webkit-keyframes circleShow
{
    0% {opacity:0;}
    50% {opacity:1;}
    100%{opacity:0;}
}
@-moz-keyframes circleShow
{
    0% {opacity:0;}
    50% {opacity:1;}
    100%{opacity:0;}
}

.circle-show-1{
    animation:circleShow1 3s ease-in-out infinite 1.2s;
    -webkit-animation:circleShow1 3s ease-in-out infinite 1.2s;
    -moz-animation:circleShow1 3s ease-in-out infinite 1.2s;
    -ms-animation:circleShow1 3s ease-in-out infinite 1.2s;
    -o-animation:circleShow1 3s ease-in-out infinite 1.2s;
}
@keyframes circleShow1
{
    0% {opacity:0;}
    50% {opacity:1;}
    100%{opacity:0;}
}
@-webkit-keyframes circleShow1
{
    0% {opacity:0;}
    50% {opacity:1;}
    100%{opacity:0;}
}
@-moz-keyframes circleShow1
{
    0% {opacity:0;}
    50% {opacity:1;}
    100%{opacity:0;}
}

.circle-show-2{
    animation:circleShow2 3s ease-in-out infinite 1.4s;
    -webkit-animation:circleShow2 3s ease-in-out infinite 1.4s;
    -moz-animation:circleShow2 3s ease-in-out infinite 1.4s;
    -ms-animation:circleShow2 3s ease-in-out infinite 1.4s;
    -o-animation:circleShow2 3s ease-in-out infinite 1.4s;
}
@keyframes circleShow2
{
    0% {opacity:0;}
    50% {opacity:1;}
    100%{opacity:0;}
}
@-webkit-keyframes circleShow2
{
    0% {opacity:0;}
    50% {opacity:1;}
    100%{opacity:0;}
}
@-moz-keyframes circleShow2
{
    0% {opacity:0;}
    50% {opacity:1;}
    100%{opacity:0;}
}
</style>