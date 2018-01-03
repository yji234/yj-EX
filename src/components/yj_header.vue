<!--模板-->
<template>
  <div class="yj_header">
    <div class="backArrows">
      <img v-bind:src="header.backArrows" alt="返回">
    </div>
    <div class="title">{{ header.title }}</div>
  </div>

</template>

<!--Vue-->
<script>
  export default {
    name: 'yj_header',
    props: {
      header: {
          type: Object,
          required: true
      }
    }
  }

</script>

<!--样式-->
<style lang="less">
  *{
    margin: 0px;
    padding: 0px;
  }
  @headerBG: #FF7400;
  @titleColor: #ffffff;
  .yj_header{
    width: 750px;
    height: 80px;
    background-color: @headerBG;
    position: relative;

    .backArrows{
      width: 50px;
      height: 50px;
      background-color: skyblue;
      position: absolute;
      top:15px;
      left: 25px;
    }

    .title{
      width: 180px;
      height: 60px;
      /*background-color: khaki;*/
      position: absolute;
      top:10px;
      left: 285px;
      font-size: 40px;
      line-height: 60px;
      color: @titleColor;
    }
  }

</style>
