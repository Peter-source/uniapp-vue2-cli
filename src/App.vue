<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
    console.log("====================================");
    console.log(process.env.NODE_ENV, "process.env.NODE_ENV");
    console.log(process.env.VUE_APP_API_URL, "process.env.VUE_APP_API_URL");
    switch (uni.getSystemInfoSync().platform) {
      case "android":
        console.log("运行在Android上");
        break;
      case "ios":
        console.log("运行在IOS上");
        break;
      default:
        console.log("运行在开发者工具上");
        break;
    }
    // #ifdef MP-WEIXIN
    console.log("微信平台");
    // #endif
    // #ifdef H5
    console.log("H5");
    // #endif
    console.log("====================================");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "uview-ui/index.scss";
</style>
