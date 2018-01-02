<!--模板-->
<template>
  <div id="yj_transferAccounts">
    <div class="blank"></div>
    <div class="backPro">
      <div class="rBack" @click="backPro">
        <img src="../assets/images/transferAccounts/lBack.png" alt="返回">
      </div>
      <div class="zzTitle">
        转账
      </div>
    </div>
    <div class="classify">
      <div>
        <div class="tbzh">
          通宝账户
        </div>
        <div class="kyye">
          可用余额：
          <p>{{ tbzhye }}</p>
        </div>
        <div class="rBack">
          <img src="../assets/images/transferAccounts/blueBack.png" alt="">
        </div>
      </div>
      <div>
        <div class="tbzh">
          麦宝账户
        </div>
        <div class="kyye">
          可用余额：
          <p>{{ mbzhye }}</p>
        </div>
        <div class="rBack">
          <img src="../assets/images/transferAccounts/greenBack.png" alt="">
        </div>
      </div>
      <div>
        <div class="tbzh">
          现金账户
        </div>
        <div class="kyye">
          可用余额：
          <p>{{ xjzhye }}</p>
        </div>
        <div class="rBack">
          <img src="../assets/images/transferAccounts/yellowBack.png" alt="">
        </div>
      </div>
    </div>
    <div class="trPerson">
      <p>&nbsp;最近转账人员</p>
    </div>
    <div class="trPersonClassify">
      <div v-for="item in current_transfer_account">
        <div class="logo">
          <img v-bind:src="item.userLogo"  alt="用户">
        </div>
        <div class="name">
          {{ item.way }}-{{ item.username }}-{{ item.classify}}-{{ item.use }}
          <!--{{ user[0].way }}-{{ user[0].user }}-{{ user[0].classify }}-{{ user[0].use }}-->
        </div>
        <div class="time">
          <!--2017-12-12 22:00-->
          {{ item.time }}
        </div>
        <div class="money">
          -{{ item.money }}
        </div>
      </div>
      <!--<div>-->
        <!--<div class="logo">-->
          <!--<img src="../assets/images/transferAccounts/user2.png" alt="用户">-->
        <!--</div>-->
        <!--<div class="name">-->
          <!--&lt;!&ndash;{{ item }}&ndash;&gt;-->
          <!--&lt;!&ndash;{{ user[1].way }}-{{ user[1].user }}-{{ user[1].classify }}-{{ user[1].use }}&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="time">-->
          <!--2017-12-12 22:00-->
        <!--</div>-->
        <!--<div class="money">-->
          <!-- -900.00-->
        <!--</div>-->
      <!--</div>-->
      <!--<div>-->
        <!--<div class="logo">-->
          <!--<img src="../assets/images/transferAccounts/user3.png" alt="用户">-->
        <!--</div>-->
        <!--<div class="name">-->
          <!--&lt;!&ndash;{{ user[2].way }}-{{ user[2].user }}-{{ user[2].classify }}-{{ user[2].use }}&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="time">-->
          <!--2017-12-12 22:00-->
        <!--</div>-->
        <!--<div class="money">-->
          <!-- -900.00-->
        <!--</div>-->
      <!--</div>-->
      <!--<div>-->
        <!--<div class="logo">-->
          <!--<img src="../assets/images/transferAccounts/user4.png" alt="用户">-->
        <!--</div>-->
        <!--<div class="name">-->
          <!--&lt;!&ndash;{{ user[3].way }}-{{ user[3].user }}-{{ user[3].classify }}-{{ user[3].use }}&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="time">-->
          <!--2017-12-12 22:00-->
        <!--</div>-->
        <!--<div class="money">-->
          <!-- -900.00-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>

</template>

<!--Vue-->
<script>
  export default {
    name: 'yj_transferAccounts',
    data: function () {
      return {
        msg: 'Welcome to my App!',
        tbzhye: 0,
        mbzhye: 0,
        xjzhye: 0,
        current_transfer_account: []
      }
    },
    mounted: function () {
      let that = this;
      this.$http.get('http://127.0.0.1:5000/yj_transferAccounts', {

      }).then(function (response) {
        console.log(response.status);

        if(parseInt(response.status) === 200){
          // console.log(response.data)
          let data = response.data.data;
           console.log(data);
          that.tbzhye = data.tbzhye;
          that.mbzhye = data.mbzhye;
          that.xjzhye = data.xjzhye;
          // that.current_transfer_account = data.data.current_transfer_account;
          console.log(data.current_transfer_account);
          for(let i=0; i<data.current_transfer_account.length; i++) {
            // console.log(data.current_transfer_account[i].to);
            that.current_transfer_account.push(data.current_transfer_account[i].to);
          }
          console.log(that.current_transfer_account)

        }
      }).catch(function (error) {
        console.log(error);
      })
    },
    methods: {
      backPro: function () {
        window.location.href = 'http://localhost:8080/#/yj_index';
      }
    }
  }

</script>

<!--样式-->
<style>
  *{
    margin: 0px;
    padding: 0px;
  }

  #yj_transferAccounts{
    width: 750px;
    height: 1574px;
    background-color: #ebebf0;
    margin: 0 auto;
  }

  #yj_transferAccounts>.blank{
    width: 100%;
    height: 40px;
    background-color: white;
  }

  /*back*/
  #yj_transferAccounts>.backPro{
    width: 100%;
    height: 60px;
    background-color: white;
  }
  #yj_transferAccounts>.backPro>.rBack{
    width: 60px;
    height: 50px;
    background-color: sandybrown;
    float: left;
    margin-left: 15px;
    margin-top: 5px;
  }
  #yj_transferAccounts>.backPro>.zzTitle{
    width: 80px;
    height: 60px;
    /*background-color: skyblue;*/
    float: left;
    margin-left:260px;
    font-size: 24px;
    color: #565656;
    font-weight: bold;
    line-height: 60px;

  }


  /*classify*/
  #yj_transferAccounts>.classify{
    width: 100%;
    height: 730px;
    background-color: white;
  }
  #yj_transferAccounts>.classify>div{
    width: 710px;
    height: 215px;
    background-color: sandybrown;
    margin-bottom: 25px;
    float: left;
    margin-left: 20px;
    border-radius: 20px;
    position: relative;
  }
  #yj_transferAccounts>.classify>div:nth-child(1){
    background: url("../assets/images/transferAccounts/ac_blue.png") no-repeat center;
    margin-top: 20px;
  }
  #yj_transferAccounts>.classify>div:nth-child(2){
    background: url("../assets/images/transferAccounts/ac_green.png") no-repeat center;
  }
  #yj_transferAccounts>.classify>div:nth-child(3){
    background: url("../assets/images/transferAccounts/ac_yellow.png") no-repeat center;
  }
  #yj_transferAccounts>.classify>div>.tbzh{
    width: 180px;
    height: 50px;
    /*background-color: gold;*/
    position: absolute;
    top: 30px;
    left: 30px;
    text-align: left;
    font-weight: bold;
    font-size: 28px;
    line-height: 50px;
    color: white;
  }
  #yj_transferAccounts>.classify>div>.kyye{
    width: 190px;
    height: 90px;
    /*background-color: sandybrown;*/
    position: absolute;
    top: 100px;
    left: 30px;
    text-align: left;
    color: white;
    line-height: 40px;
  }
  #yj_transferAccounts>.classify>div>.kyye>p{
    font-size: 28px;
    font-weight: bold;
  }
  #yj_transferAccounts>.classify>div>.rBack{
    width: 60px;
    height: 50px;
    background-color: seagreen;
    position: absolute;
    top: 80px;
    left: 630px;
  }

  /*person*/
  #yj_transferAccounts>.trPerson{
    width: 100%;
    height: 80px;
    /*background-color: seagreen;*/
    line-height: 60px;
    font-size: 18px;
    color: #565656;

  }

  /*trPersonClassify*/
  #yj_transferAccounts>.trPersonClassify{
    width: 100%;
    height: 645px;
    background-color: white;
  }
  #yj_transferAccounts>.trPersonClassify>div{
    width: 705px;
    height: 155px;
    background-color: white;
    border-bottom: 2px solid #efefef;
    margin-left: 22px;
    position: relative;
  }
  #yj_transferAccounts>.trPersonClassify>div>.logo{
    width: 108px;
    height: 106px;
    /*background-color: sandybrown;*/
    position: absolute;
    top: 30px;
    left: 15px;
  }
  #yj_transferAccounts>.trPersonClassify>div>.name{
    width: 300px;
    height: 45px;
    /*background-color: seagreen;*/
    position: absolute;
    top: 35px;
    left: 135px;
    text-align: left;
    line-height: 45px;
    font-size: 22px;
    color: #282828;
  }
  #yj_transferAccounts>.trPersonClassify>div>.time{
    width: 225px;
    height: 30px;
    /*background-color: palegoldenrod;*/
    position: absolute;
    top: 90px;
    left: 135px;
    text-align: left;
    line-height: 30px;
    color: #9d9d9d;

  }
  #yj_transferAccounts>.trPersonClassify>div>.money{
    width: 160px;
    height: 50px;
    /*background-color: saddlebrown;*/
    position: absolute;
    top: 40px;
    right: 20px;
    font-weight: bold;
    color: #fb6713;
    line-height: 50px;
    font-size: 24px;
  }

</style>
