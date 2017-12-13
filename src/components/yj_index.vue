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
            <input type="text">
          </div>
        </div>
        <div id="user"></div>
      </div>
      <div id="header_fun">

      </div>

    </div>
    <!--'我的钱包'等功能-->
    <div id="moneyFun">

    </div>
    <!--账户余额-->
    <div id="balance">

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
    background-color: silver;
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
    background: url("../assets/images/index/erweima.png") no-repeat center;
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
    background: url("../assets/images/index/search.png") no-repeat center;
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
  }
  #yj_index>#header>#header_search>#user{
    width: 55px;
    height: 55px;
    background: url("../assets/images/index/user.png") no-repeat center;
  }

  #yj_index>#header>#header_fun{
    height: 178px;
    background-color: darkgray;
  }






  #yj_index>#moneyFun{
    width: 750px;
    height: 410px;
    background-color: gray;
    margin-bottom: 18px;
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
