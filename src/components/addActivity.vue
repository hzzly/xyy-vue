<template>
    <div class="add-activity">
        <form class="create-event " id="create_event" method="post" data-abide="" prevent-submit="true" novalidate="">
		    <input type="hidden" name="userId" value="5836c4ea67f3560065f52b5d">
			<div class="form-group">
				<span class="icon">&#xe61e;</span>
				<input type="text" class="form-control title" placeholder="活动主题" required name="title" value="" maxlength="100">
			</div>
			<div class="form-group datetime">
				<span class="icon">&#xe615;</span>
				<input type="text" class="form-control beginTime" value="" id='datetime-picker' placeholder="活动开始时间" required name="beginTime" value="" readonly="">
			</div>
			<div class="form-group datetime">
				<span class="icon">&#xe615;</span>
				<input type="text" class="form-control endTime" value="" id='datetime-picker2' placeholder="活动结束时间" name="endTime" value="" readonly="">
			</div>
			<div class="form-group datetime">
				<span class="icon">&#xe615;</span>
				<input type="text" class="form-control cantJoinTime" value="" id='datetime-picker3' placeholder="报名截止时间" required name="cantJoinTime" value="" readonly="">
			</div>
			<div class="form-group">
				<span class="icon">&#xe627;</span>
				<input type="text" class="form-control destination1" name="destination1" placeholder="地点" required id='city-picker' readonly="" value="">
			</div>
			<div class="form-group">
				<span class="icon">&#xe600;</span>
				<input type="text" class="form-control" placeholder="详细地址" required name="destination2" value="">
			</div>
			<div class="form-group">
				<span class="icon">&#xe638;</span>
				<input type="text" class="form-control joinMax" placeholder="人数" required name="joinMax" value="" onblur="isNull()">
			</div>
			<div class="event-edit form-group">
		        <span class="icon">&#xe660;</span>
		        <textarea id="" class="form-control textarea" cols="30" rows="10" placeholder="添加活动介绍，让小伙伴更好的了解活动～" required name="content" data-abide-validator="minLength"></textarea>
	      	</div>
	      	<div class="A-cimg travelPic">
	      		<img src="">
	      	</div>
	      	<input id="" type="button" class="btn cy-btn" style="margin: 10px 0;cursor: pointer;" value="上传海报图" data-toggle="modal" data-target="#myModal1">
            <input id="btn_create_event" type="submit" class="btn cy-btn" value="确定发布">
        </form>
    </div>
</template>

<script>
export default {
    props: {
        
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
@import '../common/style/function';

.add-activity {
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