<template>
    <div class="login">
        <div class="title">welcome to Qu约</div>
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
                    <input type="text" v-model="username" placeholder="手机号" />  
                </div>
                <div class="user-pasw common-div">
                    <span class="pasw-icon common-icon">
                        <i class="icon">&#xe687;</i>
                    </span>
                    <input type="password" v-model="password" placeholder="密码" />        
                </div>
                <div class="user-code common-div">
                    <span class="pasw-icon common-icon">
                        <i class="icon">&#xe687;</i>
                    </span>
                    <input type="text" style="width: 50%;" v-model="verificode" placeholder="验证码" />
                    <span class="verifi-code" @click="getVerifiCode" v-show="!sendCode">
                        获取验证码
                    </span>
                    <span class="verifi-code readonly" v-show="sendCode">
                        {{timeOut}}秒重新获取
                    </span>
                </div>
                <div class="login-btn" @click="regist">注册</div>
            </form>
        </div>
        <div class="forgets">
            <router-link to=""></router-link>
            <router-link to="/user/login">已有账号?登录>></router-link>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

const REG_PHONE = '/^1[34578]\d{9}$/'

import api from '../fetch/api'
import * as _ from '../util/tool'

export default {

    data() {
        return {
            username: '',
            password: '',
            verificode: '',
            sendCode: false,
            timeOut: 60
        }
    },
    // computed: {
    //     sendCode() {

    //     }
    // },
    methods: {
        getVerifiCode () {
            if (!this.username) {
                _.alert('请输入手机号')
                return
            }
            api.RegistVerifiCode(this.username)
                .then(res => {
                    this.sendCode = true
                    this.setTimeOut()
                })
                .catch(err => {
                    _.alert('短信发送失败')
                })
            // if (!REG_PHONE.test(this.username)) {
            //     alert('请输入有效手机号')
            //     return
            // }
        },
        setTimeOut () {
            let timer = setTimeout(() => {
                this.setTimeOut()
                if(this.timeOut > 0) {
                    this.timeOut--
                }
            }, 1000)
            if(this.timeOut <= 0) {
                this.sendCode = false
                this.timeOut = 60
                clearTimeout(timer)
            }
        },
        regist () {
            if (!this.username || !this.password || !this.verificode) {
                _.alert('请填写完整')
                return
            }
            // if (!('/^1[34578]\d{9}$/').test(this.username)) {
            //     alert('请输入有效手机号')
            //     return
            // }
            // if (!('/^\w{6,15}$/').test(this.password)) {
            //     alert('请设置6－15位密码，可以使用数字、字母及下划线')
            //     return;
            // }
            let data = {
                tellphone: this.username,
                password: this.password,
                verificode: this.verificode
            }
            this.$store.dispatch('setLoadingState', true)
            api.Regist(data)
                .then(res => {
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
        line-height:px2rem(200px);
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
            .verifi-code {
                display: inline-block;
                width: px2rem(200px);
                height: px2rem(80px);
                line-height: px2rem(80px);
                background: #0bd38a;
                color: #fff;
                text-align: center;
                padding-left: px2rem(20px);
            }
            .readonly {
                background: #eee;
                color: #555;
            }
        }
        .user-name,.user-pasw,.user-code{
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