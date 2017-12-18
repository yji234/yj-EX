<!--模板-->
<template>
  <div id="yj_index">
    <!--header-杂项-->
    <div id="header">
      <div id="header_search">
        <div id="erweima"></div>
        <div id="search">
          <div id="search_tu"></div>
          <div id="search_input">
            <input type="text" value="搜索">
          </div>
        </div>
        <div id="user"></div>
      </div>
      <div id="header_fun">
        <div class="fun">
          <div class="fun_tu" id="recharge"></div>
          <div class="fun_word">充值</div>
        </div>
        <div class="fun">
          <div class="fun_tu" id="transfer_account"></div>
          <div class="fun_word">转账</div>
        </div>
        <div class="fun">
          <div class="fun_tu" id="recieve_account"></div>
          <div class="fun_word">收款</div>
        </div>
        <div class="fun">
          <div class="fun_tu" id="payment"></div>
          <div class="fun_word">付款</div>
        </div>
      </div>
    </div>

    <!--'我的钱包'等功能-->
    <div id="moneyFun">
      <div class="moneyFunSon">
        <div class="moneyFunImg">
          <img src="../assets/images/index/wdqb.png" alt="我的钱包">
        </div>
        <div class="moneyFunWord">我的钱包</div>
      </div>
      <div class="moneyFunSon">
        <div class="moneyFunImg">
          <img src="../assets/images/index/tbdh.png" alt="通宝兑换">
        </div>
        <div class="moneyFunWord">通宝兑换</div>
      </div>
      <div class="moneyFunSon">
        <div class="moneyFunImg">
          <img src="../assets/images/index/sqmg.png" alt="神奇米缸">
        </div>
        <div class="moneyFunWord">神奇米缸</div>
      </div>
      <div class="moneyFunSon">
        <div class="moneyFunImg">
          <img src="../assets/images/index/gqxt.png" alt="股权系统">
        </div>
        <div class="moneyFunWord">股权系统</div>
      </div>
      <div class="moneyFunSon">
        <div class="moneyFunImg">
          <img src="../assets/images/index/xhjy.png" alt="现货交易">
        </div>
        <div class="moneyFunWord">现货交易</div>
      </div>
      <div class="moneyFunSon">
        <div class="moneyFunImg">
          <img src="../assets/images/index/xfqf.png" alt="消费全返">
        </div>
        <div class="moneyFunWord">消费全返</div>
      </div>
    </div>


    <!--账户余额-->
    <div id="balance">
      <div class="balanceTop"></div>
      <div class="balanceBot"></div>

    </div>
    <!--我的卡卷-->
    <div id="card">

    </div>
    <!--背景图-->
    <div id="bg">

    </div>
    <!--我的消息-->
    <div id="message">

    </div>
  </div>

</template>

<!--Vue-->
<script>
  export default {
    name: 'yj_index',
    data: function () {
      return {
          msg: 'Welcome to my App!'
      }
    }
  }

</script>

<!--样式-->
<style>
  #yj_index{
    width: 750px;
    height: 2318px;
    background-color: #ECF0F7;
    margin: 0 auto;
  }


  /*头部*/
  #yj_index>#header{
    width: 750px;
    height: 288px;
    background-color: #FF7400;
    margin-bottom: 20px;
  }

  #yj_index>#header>#header_search{
    height: 110px;
  }
  #yj_index>#header>#header_search>div{
    float: left;
    margin-right: 20px;
    margin-top: 50px;
  }
  #yj_index>#header>#header_search>#erweima{
    width: 55px;
    height: 55px;
    margin-left: 18px;
    background: url("../assets/images/index/index_photo.png") no-repeat center;
  }
  #yj_index>#header>#header_search>#search{
    width: 560px;
    height: 50px;
    border: 1px solid #F55700;
    border-radius: 25px;
    background-color: #F55700;
  }
  #yj_index>#header>#header_search>#search>div{
    float: left;
  }
  #yj_index>#header>#header_search>#search>#search_tu{
    margin-left: 10px;
    width: 40px;
    height: 50px;
    background: url("../assets/images/index/index_search.png") no-repeat center;
  }
  #yj_index>#header>#header_search>#search>#search_input{
    margin-top: 3px;
    width: 500px;
    height: 50px;
  }
  #yj_index>#header>#header_search>#search>#search_input>input{
    width: 490px;
    height: 40px;
    border: 1px solid #F55700;
    background-color: #F55700;
    color: white;
    font-size: 18px;
  }
  #yj_index>#header>#header_search>#search>#search_input>input:focus{
    border: 0px;
    outline: none;  /*设置四个边框的样式*/
  }
  #yj_index>#header>#header_search>#user{
    width: 55px;
    height: 55px;
    background: url("../assets/images/index/index_user.png") no-repeat center;
  }

  #yj_index>#header>#header_fun{
    height: 178px;
  }
  #yj_index>#header>#header_fun>.fun{
    width: 80px;
    height: 130px;
    margin-right: 105px;
    float: left;
    margin-top: 48px;
  }
  #yj_index>#header>#header_fun>.fun:last-child{
    margin-right: 0px;
  }
  #yj_index>#header>#header_fun>.fun:first-child{
    margin-left: 60px;
  }
  #yj_index>#header>#header_fun>.fun>.fun_tu{
    width: 80px;
    height: 80px;
  }
  #yj_index>#header>#header_fun>.fun>.fun_tu#recharge{
    background: url("../assets/images/index/index_recharge.png") no-repeat center;
  }
  #yj_index>#header>#header_fun>.fun>.fun_tu#transfer_account{
    background: url("../assets/images/index/index_transfer_account.png") no-repeat center;
  }
  #yj_index>#header>#header_fun>.fun>.fun_tu#recieve_account{
    background: url("../assets/images/index/index__recieve_account.png") no-repeat center;
  }
  #yj_index>#header>#header_fun>.fun>.fun_tu#payment{
    background: url("../assets/images/index/index_payment.png") no-repeat center;
  }
  #yj_index>#header>#header_fun>.fun>.fun_word{
    font-size: x-large;
    color: white;
  }



  #yj_index>#moneyFun{
    width: 750px;
    height: 410px;
    background-color: white;
    margin-bottom: 18px;
  }
  #yj_index>#moneyFun>.moneyFunSon{
    width: 250px;
    height: 205px;
    /*background-color: darkcyan;*/
    float: left;
  }
  #yj_index>#moneyFun>.moneyFunSon:nth-child(2n+1){
    /*background-color: white;*/
  }
  #yj_index>#moneyFun>.moneyFunSon>.moneyFunImg{
    width: 110px;
    height: 110px;
    /*background-color: antiquewhite;*/
    float: left;
    margin-left: 70px;
    margin-top: 20px;
  }
  #yj_index>#moneyFun>.moneyFunSon>.moneyFunWord{
    width: 110px;
    height: 40px;
    /*background-color: saddlebrown;*/
    float: left;
    margin-left: 70px;
    margin-top: 10px;
    font-size: 24px;
    color: darkgray;
  }








  #yj_index>#balance{
    width: 750px;
    height: 485px;
    background-color: lemonchiffon;
    margin-bottom: 18px;
  }
  #yj_index>#card{
    width: 750px;
    height: 304px;
    background-color: gray;
    margin-bottom: 20px;
  }
  #yj_index>#bg{
    width: 750px;
    height: 225px;
    background-color: lemonchiffon;
    margin-bottom: 20px;
  }
  #yj_index>#message{
    width: 750px;
    height: 510px;
    background-color: gray;
  }


</style>
