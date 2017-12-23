<!--模板-->
<template>
  <div id="yj_topUP">
    <div class="blank"></div>
    <div class="backPro">
      <div class="rBack">
        <img src="../assets/images/topUP/lBack.png" alt="返回">
      </div>
      <div class="czTitle">
        充值
      </div>
    </div>
    <div class="czbg">
      <img src="../assets/images/topUP/czBG.png" alt="充值背景图">
    </div>
    <div class="czClassify">
      <div>
        <div class="logo">
          <img src="../assets/images/topUP/xjzhcz.png" alt="现金账户充值">
        </div>
        <div class="word">
          现金账户充值
        </div>
        <div class="rBack">
          <img src="../assets/images/topUP/rBack.png" alt="下一步">
        </div>
      </div>
      <div>
        <div class="logo">
          <img src="../assets/images/topUP/10200cz.png" alt="10200充值">
        </div>
        <div class="word">
          10200充值
        </div>
        <div class="rBack">
          <img src="../assets/images/topUP/rBack.png" alt="下一步">
        </div>
      </div>
      <div>
        <div class="logo">
          <img src="../assets/images/topUP/dkhcz.png" alt="大客户充值">
        </div>
        <div class="word">
          大客户充值
        </div>
        <div class="rBack">
          <img src="../assets/images/topUP/rBack.png" alt="下一步">
        </div>
      </div>
      <div>
        <div class="logo">
          <img src="../assets/images/topUP/dbjmcz.png" alt="代表加盟充值">
        </div>
        <div class="word">
          代表加盟、升级等业务充值
        </div>
        <div class="rBack">
          <img src="../assets/images/topUP/rBack.png" alt="下一步">
        </div>
      </div>
    </div>
  </div>

</template>

<!--Vue-->
<script>
  export default {
    name: 'yj_topUP',
    data: function () {
      return {
          msg: 'Welcome to my App!'
      }
    }
  }

</script>

<!--样式-->
<style>
  #yj_topUP{
    background-color: #fc6b1b;
    width: 750px;
    height: 1334px;
    margin: 0 auto;
  }

  #yj_topUP>.blank{
    width: 100%;
    height: 40px;
  }

  /*back*/
  #yj_topUP>.backPro{
    width: 100%;
    height: 60px;
    /*background-color: seagreen;*/
  }
  #yj_topUP>.backPro>.rBack{
    width: 60px;
    height: 50px;
    background-color: sandybrown;
    float: left;
    margin-left: 15px;
    margin-top: 5px;
  }
  #yj_topUP>.backPro>.czTitle{
    width: 80px;
    height: 60px;
    /*background-color: skyblue;*/
    float: left;
    margin-left:260px;
    font-size: 24px;
    color: white;
    font-weight: bold;
    line-height: 60px;

  }

  /*BG*/
  #yj_topUP>.czbg{
    width: 100%;
    height: 372px;
    /*background-color: darkblue;*/
  }

  /*classify*/
  #yj_topUP>.czClassify>div{
    width: 695px;
    height: 150px;
    background-color: white;
    float: left;
    margin-bottom: 30px;
    margin-left: 27px;
    border-radius: 20px;
  }
  #yj_topUP>.czClassify>div>.logo{
    width: 60px;
    height: 50px;
    background-color: darkblue;
    float: left;
    margin-left: 15px;
    margin-right: 20px;
    margin-top: 50px;
  }
  #yj_topUP>.czClassify>div>.word{
    width: 500px;
    height: 60px;
    /*background-color: gold;*/
    float: left;
    margin-right: 20px;
    margin-top: 45px;
    text-align: left;
    font-size: 22px;
    line-height: 60px;
    font-weight: bold;
  }
  #yj_topUP>.czClassify>div>.rBack{
    width: 60px;
    height: 50px;
    background-color: darkcyan;
    float: left;
    margin-right: 20px;
    margin-top: 50px;
  }



</style>
