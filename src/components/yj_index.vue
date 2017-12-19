<!--模板-->
<template>
  <div id="yj_index">
    <!--header-杂项-->
    <div class="header">
      <div class="header_search">
        <div class="erweima"></div>
        <div class="search">
          <div class="search_tu"></div>
          <div class="search_input">
            <input type="text" value="搜索">
          </div>
        </div>
        <div class="user"></div>
      </div>
      <div class="header_fun">
        <div class="fun">
          <div class="fun_tu" id="recharge">
            <img src="../assets/images/index/index_recharge.png" alt="">
          </div>
          <div class="fun_word">充值</div>
        </div>
        <div class="fun">
          <div class="fun_tu" id="transfer_account">
            <img src="../assets/images/index/index_transfer_account.png" alt="">
          </div>
          <div class="fun_word">转账</div>
        </div>
        <div class="fun">
          <div class="fun_tu" id="recieve_account">
            <img src="../assets/images/index/index__recieve_account.png" alt="">
          </div>
          <div class="fun_word">收款</div>
        </div>
        <div class="fun">
          <div class="fun_tu" id="payment">
            <img src="../assets/images/index/index_payment.png" alt="">
          </div>
          <div class="fun_word">付款</div>
        </div>
      </div>
    </div>

    <!--'我的钱包'等功能-->
    <div class="moneyFun">
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
    <div class="balance">
      <div class="balanceTop">
        <img src="../assets/images/index/zhye.png" alt="账户余额">
        <p>账户余额</p>
      </div>
      <div class="balanceBot">
        <div class="balanceBG">
          <div class="balanceBGImg">
            <img src="../assets/images/index/tbzh.png" alt="通宝账户">
          </div>
          <div class="balanceBGWord">
            <p>通宝账户(元)</p>
            <p>8000</p>
          </div>
        </div>
        <div class="balanceBG">
          <div class="balanceBGImg">
            <img src="../assets/images/index/mbzh.png" alt="麦宝账户">
          </div>
          <div class="balanceBGWord">
            <p>麦宝账户(元)</p>
            <p>8000</p>
          </div>
        </div>
        <div class="balanceBG">
          <div class="balanceBGImg">
            <img src="../assets/images/index/edzh.png" alt="额度账户">
          </div>
          <div class="balanceBGWord">
            <p>额度账户(元)</p>
            <p>8000</p>
          </div>
        </div>
        <div class="balanceBG">
          <div class="balanceBGImg">
            <img src="../assets/images/index/xjzh.png" alt="现金账户">
          </div>
          <div class="balanceBGWord">
            <p>现金账户(元)</p>
            <p>8000</p>
          </div>
        </div>
      </div>

    </div>
    <!--我的卡卷-->
    <div class="card">

    </div>
    <!--背景图-->
    <div class="bg">

    </div>
    <!--我的消息-->
    <div class="message">

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

  *{
    padding: 0px;
    margin: 0px;
  }
  #yj_index{
    width: 750px;
    height: 2318px;
    background-color: #ECF0F7;
    margin: 0 auto;
  }


  /*header-杂项*/
  #yj_index>.header{
    width: 750px;
    height: 288px;
    background-color: #FF7400;
    margin-bottom: 20px;
  }

  #yj_index>.header>.header_search{
    height: 110px;
  }
  #yj_index>.header>.header_search>div{
    float: left;
    margin-right: 20px;
    margin-top: 50px;
  }
  #yj_index>.header>.header_search>.erweima{
    width: 55px;
    height: 55px;
    margin-left: 18px;
    background: url("../assets/images/index/index_photo.png") no-repeat center;
  }
  #yj_index>.header>.header_search>.search{
    width: 560px;
    height: 50px;
    border: 1px solid #F55700;
    border-radius: 25px;
    background-color: #F55700;
  }
  #yj_index>.header>.header_search>.search>div{
    float: left;
  }
  #yj_index>.header>.header_search>.search>.search_tu{
    margin-left: 10px;
    width: 40px;
    height: 50px;
    background: url("../assets/images/index/index_search.png") no-repeat center;
  }
  #yj_index>.header>.header_search>.search>.search_input{
    margin-top: 3px;
    width: 500px;
    height: 50px;
  }
  #yj_index>.header>.header_search>.search>.search_input>input{
    width: 490px;
    height: 40px;
    border: 1px solid #F55700;
    background-color: #F55700;
    color: white;
    font-size: 18px;
  }
  #yj_index>.header>.header_search>.search>.search_input>input:focus{
    border: 0px;
    outline: none;  /*设置四个边框的样式*/
  }
  #yj_index>.header>.header_search>.user{
    width: 55px;
    height: 55px;
    background: url("../assets/images/index/index_user.png") no-repeat center;
  }

  #yj_index>.header>.header_fun{
    height: 178px;
  }
  #yj_index>.header>.header_fun>.fun{
    width: 80px;
    height: 130px;
    margin-right: 105px;
    float: left;
    margin-top: 48px;
  }
  #yj_index>.header>.header_fun>.fun:last-child{
    margin-right: 0px;
  }
  #yj_index>.header>.header_fun>.fun:first-child{
    margin-left: 60px;
  }
  #yj_index>.header>.header_fun>.fun>.fun_tu{
    width: 80px;
    height: 80px;
  }
  #yj_index>.header>.header_fun>.fun>.fun_word{
    font-size: x-large;
    color: white;
  }


  /*'我的钱包'等功能*/
  #yj_index>.moneyFun{
    width: 750px;
    height: 410px;
    background-color: white;
    margin-bottom: 18px;
  }
  #yj_index>.moneyFun>.moneyFunSon{
    width: 250px;
    height: 205px;
    /*background-color: darkcyan;*/
    float: left;
  }
  #yj_index>.moneyFun>.moneyFunSon:nth-child(2n+1){
    /*background-color: white;*/
  }
  #yj_index>.moneyFun>.moneyFunSon>.moneyFunImg{
    width: 110px;
    height: 110px;
    /*background-color: antiquewhite;*/
    float: left;
    margin-left: 70px;
    margin-top: 20px;
  }
  #yj_index>.moneyFun>.moneyFunSon>.moneyFunWord{
    width: 110px;
    height: 40px;
    /*background-color: saddlebrown;*/
    float: left;
    margin-left: 70px;
    margin-top: 10px;
    font-size: 24px;
    color: darkgray;
  }


  /*账户余额*/
  #yj_index>.balance{
    width: 750px;
    height: 485px;
    background-color: white;
    margin-bottom: 18px;
  }
  #yj_index>.balance>.balanceTop{
    width: 750px;
    height: 103px;
    border-bottom: 2px solid darkgray;
  }
  #yj_index>.balance>.balanceTop>img,
  #yj_index>.balance>.balanceTop>p{
    float: left;
    margin-top: 30px;
    margin-left: 15px;
  }
  #yj_index>.balance>.balanceTop>p{
    color: darkgray;
    font-size: 22px;
    font-weight: bold;
    margin-top: 38px;
    margin-left: 10px;
  }


  #yj_index>.balance>.balanceBot>.balanceBG{
    width: 345px;
    height: 130px;
    background-color: darkcyan;
    float: left;
    margin-bottom: 20px;
  }
  #yj_index>.balance>.balanceBot>.balanceBG:nth-child(1){
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;

    background: -webkit-linear-gradient(right, #f4681b , #f78c22); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #f4681b, #f78c22); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #f4681b, #f78c22); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #f4681b , #f78c22); /* 标准的语法 */

  }
  #yj_index>.balance>.balanceBot>.balanceBG:nth-child(2){
    margin-top: 50px;
    margin-right: 0px;

    background: -webkit-linear-gradient(left, #acbe26 , #c1c024); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #acbe26, #c1c024); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #acbe26, #c1c024); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #acbe26 , #c1c024); /* 标准的语法 */
  }
  #yj_index>.balance>.balanceBot>.balanceBG:nth-child(3){
    margin-left: 20px;
    margin-right: 20px;

    background: -webkit-linear-gradient(left, #6834fd , #7575fe); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #6834fd, #7575fe); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #6834fd, #7575fe); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #6834fd , #7575fe); /* 标准的语法 */
  }
  #yj_index>.balance>.balanceBot>.balanceBG:nth-child(4){
    background: -webkit-linear-gradient(left, #fc4044 , #fd9b61); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #fc4044, #fd9b61); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #fc4044, #fd9b61); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #fc4044 , #fd9b61); /* 标准的语法 */
  }
  #yj_index>.balance>.balanceBot>.balanceBG>.balanceBGImg{
    width: 160px;
    height: 130px;
    background-color: saddlebrown;
    float: left;
  }
  #yj_index>.balance>.balanceBot>.balanceBG>.balanceBGWord{
    width: 160px;
    height: 80px;
    /*background-color: darkcyan;*/
    float: left;
    margin-top: 35px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
  }







  #yj_index>.card{
    width: 750px;
    height: 304px;
    background-color: gray;
    margin-bottom: 20px;
  }
  #yj_index>.bg{
    width: 750px;
    height: 225px;
    background-color: lemonchiffon;
    margin-bottom: 20px;
  }
  #yj_index>.message{
    width: 750px;
    height: 510px;
    background-color: gray;
  }


</style>
