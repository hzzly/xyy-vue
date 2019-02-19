<template>
  <div class="travel-detail">
    <div class="A-cimg activity-pic">
      <img :src="detail.travelPic" v-show="detail.travelPic">
      <span class="p-number" v-show="detail.clicks"><i class="icon">&#xe62a;</i>{{detail.clicks}}</span>
      <h1>{{detail.title}}</h1>
      <router-link to="">{{detail.releaseUsername}}</router-link>
      <span>| {{detail.releaseTime | formatTime}}</span>
    </div>     	
    <detail-cell
      :begin-time="detail.beginTime"
      :end-time="detail.endTime"
      :cant-join-time="detail.cantJoinTime"
      :destination="detail.destination"
      :release-username="detail.releaseUsername">
    </detail-cell>   
    <v-dialog v-show="dialog" :dialog-msg="dialogMsg" :link-url="linkUrl" @confirm="confirm" @cancel="cancel"></v-dialog>
    <div class="activity-details">
      <p>{{detail.content}}</p>
    </div>
    <div class="btn-apply">
      <div @click="join">
        <i class="icon">&#xe678;</i>
        <span>去报名</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import detailCell from "@/components/detailCell";
import dialog from "@/components/dialog";

import * as _ from "../util/tool";

export default {
  components: {
    detailCell,
    "v-dialog": dialog
  },
  data() {
    return {
      dialog: false,
      dialogMsg: "确认报名?",
      linkUrl: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.detail = "";
      vm.getDetailData(vm);
    });
  },
  computed: {
    detail: {
      get() {
        return this.$store.getters.detail;
      },
      set() {}
    }
  },
  methods: {
    getDetailData(el) {
      window.scroll(0, 0);
      let id = el.$route.params.id;
      let router = this.$route.path.split("/")[1];
      let params = {
        id,
        router
      };
      el.$store.dispatch("getDetail", params);
      // if (router == "travel") {
      //   el.$store.dispatch("travelClicks", id);
      // }
    },
    confirm() {
      this.dialog = false;
      _.toast("报名成功", "success");
    },
    cancel() {
      this.dialog = false;
    },
    join() {
      // _.toast('报名成功', 'success')
      this.dialog = true;
    }
	},
	filters: {
    formatTime(value) {
			moment.locale('zh-cn')
			return moment(value).fromNow()
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/function";

.travel-detail {
  .A-cimg {
    position: relative;
    padding-bottom: px2rem(20px);
    img {
      max-height: px2rem(350px);
      border: 0;
      vertical-align: middle;
      width: 100%;
    }
    .p-number {
      background-color: rgba(0, 0, 0, 0.37);
      color: #fff;
      padding: px2rem(3px) px2rem(15px);
      font-size: 14px;
      position: absolute;
      top: px2rem(20px);
      right: 0px;
      border-radius: px2rem(20px) 0 0 px2rem(20px);
      .icon {
        font-size: 14px;
      }
    }
    h1 {
      font-weight: normal;
      font-size: 17px;
      padding: px2rem(20px) px2rem(20px) px2rem(15px);
    }
    a {
      color: #06f;
      margin-left: px2rem(20px);
      font-size: 16px;
    }
    span {
      color: #b9b9b9;
      font-size: 14px;
    }
  }
  .activity-pic {
    border-bottom: 1px solid #eaeaea;
    background: #fff;
  }
  .activity-details {
    padding: px2rem(20px);
    border-top: px2rem(20px) solid #f1f1f1;
    margin-bottom: px2rem(20px);
    background: #fff;
  }
  .btn-apply {
    position: fixed;
    bottom: px2rem(40px);
    right: px2rem(30px);
    width: px2rem(110px);
    height: px2rem(110px);
    background-color: #76d49b;
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