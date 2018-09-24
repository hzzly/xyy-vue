<template>
	<div class="travel">
    <router-link :to="{ path: '/travel/'+ travel.objectId }">
      <div class="A-cimg">
        <img :src="travel.travelPic" alt="">
        <span class="i-activity p-free">免费</span>
        <span class="i-activity p-number">{{travel.joinNum}}人报名</span>
        <span class="activity-s activity-s-1">正在报名</span>
      </div>
      <div class="A-info">
        <div>
          <span class="title">{{travel.title}}</span>
          <span class="see"><i class="icon">&#xe62a;</i>{{travel.clicks}}</span>
        </div>
        <div>
          <span class="username">{{travel.releaseUsername}}</span>
          <span class="time">{{travel.releaseTime | formatTime}}</span> 
        </div>
      </div> 
    </router-link>
	</div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    travel: Object
  },
  data() {
    return {};
  },
  filters: {
    formatTime(value) {
      return moment(value).format("YYYY-MM-DD");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/css/function";

.travel {
  padding: px2rem(10px);
  font-size: 14px;
  a {
    display: block;
    text-decoration: none;
    border-bottom: 1px solid #f1f1f1;
    .A-cimg {
      position: relative;
      min-height: px2rem(100px);
      img {
        width: 100%;
        max-height: px2rem(300px);
      }
      .i-activity {
        background: rgba(0, 0, 0, 0.37);
        color: #fff;
        padding: px2rem(6px);
        position: absolute;
        top: px2rem(35px);
      }
      .p-free {
        border-radius: 4px;
        left: px2rem(30px);
        background: rgba(4, 255, 4, 0.48);
      }
      .p-number {
        right: 0px;
        border-radius: 10px 0 0 10px;
      }
      .activity-s {
        position: absolute;
        bottom: px2rem(30px);
        left: px2rem(30px);
        padding: px2rem(10px) px2rem(20px);
        color: #fff;
      }
      .activity-s-1 {
        background: rgba(0, 125, 255, 0.48);
      }
      .activity-s-2 {
        background: rgba(4, 255, 4, 0.48);
      }
      .activity-s-3 {
        background: rgba(255, 204, 0, 0.52);
      }
      .activity-s-4 {
        background: rgba(0, 0, 0, 0.66);
      }
    }
    .A-info {
      padding: px2rem(10px) px2rem(15px);
      > div {
        display: flex;
        justify-content: space-between;
        height: px2rem(45px);
        line-height: px2rem(45px);
      }
      .title {
        font-size: px2rem(35px);
        color: #000;
      }
      .see {
        .icon {
          color: #7e8c8d;
          font-size: px2rem(30px);
          padding-right: 3px;
        }
      }
      .username {
        color: #007aff;
        font-size: px2rem(28px);
      }
    }
  }
}
</style>