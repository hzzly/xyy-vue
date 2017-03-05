<template>
    <div class="add-activity">
        <time-picker v-show="showTimePicker" @confirm="confirm"></time-picker>
        <form class="create-event " method="post" data-abide="" prevent-submit="false" novalidate="">
			<div class="form-group">
				<span class="icon">&#xe61e;</span>
				<input type="text" class="form-control title" placeholder="活动主题" required v-model="title" maxlength="100">
			</div>
			<div class="form-group datetime">
				<span class="icon">&#xe615;</span>
				<input type="text" class="form-control beginTime"  placeholder="活动开始时间" required v-model="beginTime" readonly="" @click="showPicker">
			</div>
			<div class="form-group datetime">
				<span class="icon">&#xe615;</span>
				<input type="text" class="form-control endTime" placeholder="活动结束时间" v-model="endTime" readonly="" @click="showPicker">
			</div>
			<div class="form-group datetime">
				<span class="icon">&#xe615;</span>
				<input type="text" class="form-control cantJoinTime" placeholder="报名截止时间" required v-model="cantJoinTime" readonly="">
			</div>
			<div class="form-group">
				<span class="icon">&#xe627;</span>
				<input type="text" class="form-control destination1" id="multiPickerInput" v-model="destination1" placeholder="地点" required readonly="">
			</div>
			<div class="form-group">
				<span class="icon">&#xe600;</span>
				<input type="text" class="form-control" placeholder="详细地址" required v-model="destination2">
			</div>
			<div class="form-group">
				<span class="icon">&#xe638;</span>
				<input type="text" class="form-control joinMax" placeholder="人数" required v-model="joinMax">
			</div>
			<div class="event-edit form-group">
		        <span class="icon">&#xe660;</span>
		        <textarea class="form-control textarea" cols="30" rows="10" placeholder="添加活动介绍，让小伙伴更好的了解活动～" required v-model="content" data-abide-validator="minLength"></textarea>
	      	</div>
	      	<div class="A-cimg travelPic">
	      		<img src="">
	      	</div>
	      	<input type="button" class="btn cy-btn" style="margin: 10px 0;cursor: pointer;" value="上传海报图">
            <input id="btn_create_event" type="button" @click="post" class="btn cy-btn" value="确定发布">
        </form>

        <div id="address-select">
            
        </div>
    </div>
</template>

<script>

import timePicker from '@/components/timePicker'

import { mapState } from 'vuex'

import * as _ from '../util/tool'
import api from '../fetch/api'

require('../util/city-picker.js')

import $city from '../util/city.js'

export default {
    components: {
        timePicker
    },
    data() {
        return {
            title: '',
            beginTime: '',
            endTime: '',
            cantJoinTime: '',
            destination1: '',
            destination2: '',
            joinMax: '',
            content: ''
        }
    },
    computed: mapState({
        showTimePicker: state => state.com.showTimePicker
    }),
    methods: {
        showPicker() {
            this.$store.dispatch('showTimePicker', true)
        },
        confirm(startDate, endDate) {
			this.beginTime = startDate
			this.endTime = endDate
		},
        post() {
            _.alert('开发中')
        },
        address() {
            api.getAddressJson()
                .then(res => {
                    console.log(res.data)
                })
        }
    },
    mounted() {
		new MultiPicker({
		    input: 'multiPickerInput',//点击触发插件的input框的id
		    container: 'address-select',//插件插入的容器id
		    jsonData: $city,
		    success: (arr) => {
		        console.log(arr)
                switch(arr.length) {
                    case 2:
                        this.destination1 = arr[0].value + ' ' + arr[1].value
                        break
                    case 3:
                        this.destination1 = arr[0].value + ' ' + arr[1].value + ' ' + arr[2].value
                        break
                }
		    }//回调
	    });
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';
@import '../../static/css/city-picker.css';

.add-activity {
    position: relative;
    background: #fff;
    padding-bottom: px2rem(50px);
    .create-event {
        .form-group {
            display: flex;
            border-bottom: 1px solid #d8d8d8;
            line-height: px2rem(100px);
            .icon {
                color: #76D49B;
                padding: 0 px2rem(20px);
            }
            input {
                border: none;
                width: 100%;
                height: px2rem(80px);
                line-height: px2rem(80px);
                margin-top: px2rem(10px);
                box-shadow: none;
            }
            textarea {
                box-sizing: border-box;
                width: 100%;
                margin-top: px2rem(15px);
                padding: px2rem(20px) 0;
                height: px2rem(300px);
                border: none;
                overflow: hidden;
                resize: none;
                outline: none;
                overflow: auto;
            }
        }
        .btn {
            width: 100%;
            height: px2rem(100px);
            line-height: px2rem(100px);
        }
        #btn_create_event {
            background: #76D49B;
            color: #fff;
            font-size: 14px;
        }
    }
    
}


</style>