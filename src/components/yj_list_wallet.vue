<!--模板-->
<template>
  <div class="yj_list_wallet">
      <div class="outer"></div>
  </div>

</template>

<!--Vue-->
<script>
  export default {
    name: 'yj_list_wallet',
    data: function () {
      return {
          msg: 'Welcome to my App!'
      }
    }
  }

</script>

<!--样式-->
<style lang="less">
  .yj_list_wallet{
    .outer{
      width: 750px;
      height: 250px;
      background-color: sandybrown;
      margin-bottom: 20px;
    }
  }

</style>
