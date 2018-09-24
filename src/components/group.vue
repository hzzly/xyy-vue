<template>
  <div class="group">
    <user-cell v-for="(item,index) in cellLists"
      :link="item.link"
      :icon="item.icon"
      :text="item.text"
      :desc="item.desc"
      :badg="item.badg"
      :more="item.more"
      :avatar="item.avatar"
      :key="index">
    </user-cell>
  </div>
</template>

<script>
import userCell from "@/components/userCell";

export default {
  props: {
    cellLists: Array
  },
  components: {
    userCell
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/function";

.group {
  margin-bottom: px2rem(20px);
}
</style>