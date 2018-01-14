<!--模板-->
<template>
  <div class="yj_list_wallet">
      <div class="outer" v-for="account in accounts">
        <div class="title">
          <div class="userLogo">
            <img v-bind:src="account.userLogo" alt="">
          </div>
          <div class="username"> {{ account.userName }} </div>
        </div>
        <div class="balance">
          <div class="ba_title">余额</div>
          <div class="ba_money"> {{ account.balance_money }} </div>
          <div class="ba_usable">
            <p>可用</p>
            <p>{{ account.balance_usable }}</p>
          </div>
          <div class="ba_line"></div>
          <div class="ba_lock">
            <p>锁定</p>
            <p>{{ account.balance_lock }}</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="tomorrow">
          <div class="to_title">昨天</div>
          <div class="to_extend">
            <span>支出：</span>
            <span>-{{ account.tomorrow_extend }}</span>
          </div>
          <div class="to_earnings">
            <span>收益：</span>
            <span>+{{ account.tomorrow_earnings }}</span>
          </div>
        </div>
      </div>
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
    },
    props: {
      accounts: {
        type: Array,
        required: true
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
      background-color: white;
      margin-bottom: 20px;
      position: relative;

      /*通宝账户*/
      .title{
        width: 125px;
        height: 160px;
        /*background-color: skyblue;*/
        position: absolute;
        top: 45px;
        left: 40px;

        .userLogo{
          width: 100px;
          height: 100px;
          /*background-color: lawngreen;*/
          margin: 0 auto 20px;
        }
        .username{
          width: 100%;
          height: 40px;
          /*background-color: gold;*/
          font-size: 30px;
          font-weight: bold;
        }
      }

      /*余额*/
      .balance{
        width: 270px;
        height: 160px;
        /*background-color: hotpink;*/
        position: absolute;
        top: 45px;
        left: 205px;

        .ba_title{
          width: 60px;
          height: 30px;
          /*background-color: seagreen;*/
          float: left;
          font-size: 24px;
          line-height: 30px;
          font-weight: bold;
        }
        .ba_money{
          width: 100%;
          height: 50px;
          /*background-color: skyblue;*/
          float: left;
          font-size: 30px;
          line-height: 50px;
          font-weight: bold;
          color: #FF7400;
        }
        .ba_usable{
          width: 110px;
          height: 70px;
          /*background-color: firebrick;*/
          float: left;
          margin-right: 22px;
          font-size: 24px;

          p:nth-child(1){
            color: gainsboro;
          }
          p:nth-child(2){
            color: #FF7400;
          }
        }
        .ba_lock{
          width: 110px;
          height: 70px;
          /*background-color: firebrick;*/
          float: left;
          margin-left: 22px;
          font-size: 24px;
          color: gainsboro;
        }
        .ba_line{
          width: 4px;
          height: 50px;
          float: left;
          margin-top: 10px;
          background-color: gainsboro;
        }
      }

      /*竖线*/
      .line{
        width: 4px;
        height: 80px;
        background-color: gainsboro;
        position: absolute;
        top:85px;
        left: 515px;
      }

      /*昨天*/
      .tomorrow{
        width: 150px;
        height: 160px;
        /*background-color: seagreen;*/
        position: absolute;
        top: 45px;
        right: 35px;

        .to_title{
          width: 60px;
          height: 30px;
          /*background-color: darkblue;*/
          float: left;
          font-size: 24px;
          line-height: 30px;
          font-weight: bold;
          margin-bottom: 35px;
        }
        .to_extend{
          width: 100%;
          height: 30px;
          /*background-color: gold;*/
          float: left;
          margin-bottom: 35px;
          font-size: 24px;
          span:nth-child(1){
            color: gainsboro;
          }
          span:nth-child(2){
            color: green;
          }
        }
        .to_earnings{
          width: 100%;
          height: 30px;
          /*background-color: skyblue;*/
          float: left;
          font-size: 24px;
          span:nth-child(1){
            color: gainsboro;
          }
          span:nth-child(2){
            color: red;
          }
        }
      }
    }
  }

</style>
