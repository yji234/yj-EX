<!--模板-->
<template>
  <div id="yj_transferAccount_choise">
    <!--转账-->
    <div class="header">
      <div class="lBack">
        <img src="../assets/images/transfer_account_nochiose/lBack.png" alt="返回">
      </div>
      <div class="account">
        转账
      </div>
      <div class="account_list">
        转账记录
      </div>
    </div>
    <!--账户选择-->
    <div class="account_user_choice">
      <div class="account_user_choice_img">
        <img src="../assets/images/transfer_account_nochiose/username.png" alt="账户选择">
      </div>
      <div class="account_user_choice_word">
        账户选择
      </div>
    </div>
    <!--户名-->
    <div class="account_username">
      <div>
        <div class="account_username_word">
          户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名
        </div>
        <div class="account_username_input">
          <input type="text" v-model="account_username_input" placeholder="请输入账户名/从右侧选择">
        </div>
        <div class="account_usernames">
          <img src="../assets/images/transfer_account_nochiose/usernames.png" alt="选择用户">
        </div>
      </div>
      <div>
        <div class="account_username_word">
          账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户
        </div>
        <div class="account_username_input">
          <input type="text" v-model="account_person_input" placeholder="请输入账户">
        </div>
      </div>
      <div>
        <div class="account_username_word">
          账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号
        </div>
        <div class="account_username_input">
          <input type="text" v-model="account_code_input" placeholder="请输入账号">
        </div>
      </div>
    </div>
    <!--可用余额-->
    <div class="account_money">
      <div>
        <div class="account_money_img">
          <img src="../assets/images/transfer_account_nochiose/remain_money.png" alt="可用余额">
        </div>
        <div class="account_money_word">
          可用余额
        </div>
        <div class="account_money_input">
          {{ remain_money_input }}
        </div>
      </div>
      <div>
        <div class="account_money_img">
          <img src="../assets/images/transfer_account_nochiose/account_money.png" alt="转账金额">
        </div>
        <div class="account_money_word">
          转账金额
        </div>
        <div class="account_money_input">
          <input type="text" v-model="account_money_input" placeholder="请输入转账金额">
        </div>
      </div>
      <div>
        <div class="account_money_img">
          <img src="../assets/images/transfer_account_nochiose/remark.png" alt="备注">
        </div>
        <div class="account_money_word">
          备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注
        </div>
        <div class="account_money_input">
          <input type="text" v-model="remark_input" placeholder="请输入备注">
        </div>
      </div>
    </div>
    <!--验证码-->
    <div class="verify_code">
      <div class="verify_code_img">
        <img src="../assets/images/transfer_account_nochiose/verify_code.png" alt="验证码">
      </div>
      <div class="verify_code_word">
        验&nbsp;证&nbsp;码
      </div>
      <div class="verify_code_input">
        <input type="text" v-model="verify_code_input" placeholder="请输入验证码">
      </div>
      <div class="verify_code_getCode">
        获取验证码
      </div>
    </div>
    <!--提交-->
    <div class="apply_account">
      <button type="button" @click="applyAccount">下一步</button>
    </div>
  </div>

</template>

<!--Vue-->
<script>
  export default {
    name: 'yj_transferAccount_choise',
    data: function () {
      return {
        msg: 'Welcome to my App!',
        account_username_input: '', // 户名
        account_person_input: '',      // 账户
        account_code_input: '',       // 账号
        remain_money_input: '',    // 可用余额
        account_money_input: '',    // 转账金额
        remark_input: '',            // 备注
        verify_code_input: ''       // 验证码
      }
    },
    mounted: function () {
      let that = this;
      this.$http.get('http://127.0.0.1:5000/yj_transferAccount_choise', {

      }).then(function (response) {
        // console.log(response.status);
        if(parseInt(response.status) == 200){
          // console.log(response.data)
          let transferAccount_choise = response.data.data;
          console.log(transferAccount_choise)
          that.account_username_input = transferAccount_choise.account_username_input;
          that.account_person_input = transferAccount_choise.account_person_input;
          that.account_code_input = transferAccount_choise.account_code_input;
          that.remain_money_input = transferAccount_choise.remain_money_input;
          that.account_money_input = transferAccount_choise.account_money_input;
          that.remark_input = transferAccount_choise.remark_input;
          that.verify_code_input = transferAccount_choise.verify_code_input;
        }

      }).catch(function (error) {
        console.log(error);
      })
    },
    methods: {
      applyAccount: function () {
        let that = this;
        this.$http.post('http://127.0.0.1:5000/yj_transferAccount_choise',{
          account_username_input: that.account_username_input,
          account_person_input: that.account_person_input,
          account_code_input: that.account_code_input,
          account_money_input: that.account_money_input,
          remark_input: that.remark_input,
          verify_code_input: that.verify_code_input
        }).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {

        })
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
  #yj_transferAccount_choise{
    width: 750px;
    height: 1334px;
    background-color: #e8ecf6;
    margin: 0 auto;
    border: 1px solid gray;
  }

  /*转账*/
  #yj_transferAccount_choise>.header{
    width: 100%;
    height: 90px;
    background-color: white;
    position: relative;
  }
  #yj_transferAccount_choise>.header>.lBack{
    width: 40px;
    height: 50px;
    /*background-color: saddlebrown;*/
    position: absolute;
    top: 20px;
    left: 25px;
  }
  #yj_transferAccount_choise>.header>.account{
    width: 80px;
    height: 40px;
    /*background-color: skyblue;*/
    position: absolute;
    top: 25px;
    left: 335px;
    font-size: 30px;
    font-weight: bold;
    color: #606060;
  }
  #yj_transferAccount_choise>.header>.account_list{
    width: 130px;
    height: 40px;
    /*background-color: darkcyan;*/
    position: absolute;
    top: 25px;
    right: 30px;
    color: #fb721f;
    font-size: 24px;
    line-height: 40px;
  }

  /*账户选择*/
  #yj_transferAccount_choise>.account_user_choice{
    width: 100%;
    height: 80px;
    background-color: #e8ecf4;
    position: relative;
  }
  #yj_transferAccount_choise>.account_user_choice>.account_user_choice_img{
    width: 40px;
    height: 50px;
    /*background-color: gold;*/
    position: absolute;
    top: 15px;
    left: 25px;
  }
  #yj_transferAccount_choise>.account_user_choice>.account_user_choice_word{
    width: 118px;
    height: 35px;
    /*background-color: seagreen;*/
    position: absolute;
    top: 22px;
    left: 70px;
    color: #1f1f20;
    font-size: 22px;
    line-height: 35px;
    text-align: left;
  }

  /*户名*/
  #yj_transferAccount_choise>.account_username{
    width: 100%;
    height: 300px;
    background-color: white;
    position: relative;
    margin-bottom: 40px;
  }
  #yj_transferAccount_choise>.account_username>div{
    width: 706px;
    height: 98px;
    /*background-color: saddlebrown;*/
    border-bottom: 2px solid #efefef;
    margin-left: 22px;
    position: relative;
  }
  #yj_transferAccount_choise>.account_username>div>.account_username_word{
    width: 120px;
    height: 40px;
    /*background-color: seagreen;*/
    position: absolute;
    top: 30px;
    left: 48px;
    color: #1f1f20;
    font-size: 22px;
    line-height: 40px;
    text-align: left;
  }
  #yj_transferAccount_choise>.account_username>div>.account_username_input{
    width: 420px;
    height: 60px;
    /*background-color: saddlebrown;*/
    position: absolute;
    top: 20px;
    left: 225px;
  }
  #yj_transferAccount_choise>.account_username>div>.account_username_input>input{
    width: 418px;
    height: 58px;
    border: 1px solid white;
    font-size: 22px;
  }
  #yj_transferAccount_choise>.account_username>div>.account_username_input>input:focus{
    border: 1px solid white;
  }
  #yj_transferAccount_choise>.account_username>div:nth-child(1)>.account_usernames{
    width: 50px;
    height: 50px;
    /*background-color: khaki;*/
    position: absolute;
    top: 25px;
    right: 0px;

  }

  /*转账额度*/
  #yj_transferAccount_choise>.account_money{
    width: 100%;
    height: 300px;
    background-color: white;
    margin-bottom: 20px;
  }
  #yj_transferAccount_choise>.account_money>div{
    width: 706px;
    height: 98px;
    /*background-color: saddlebrown;*/
    border-bottom: 2px solid #efefef;
    margin-left: 22px;
    position: relative;
  }
  #yj_transferAccount_choise>.account_money>div>.account_money_img{
    width: 40px;
    height: 50px;
    /*background-color: sandybrown;*/
    position: absolute;
    top: 24px;
    left: 3px;
  }
  #yj_transferAccount_choise>.account_money>div>.account_money_word{
    width: 120px;
    height: 35px;
    /*background-color: lawngreen;*/
    position: absolute;
    top: 31px;
    left: 48px;
    color: #1f1f20;
    font-size: 22px;
    text-align: left;
  }
  #yj_transferAccount_choise>.account_money>div>.account_money_input{
    width: 500px;
    height: 60px;
    /*background-color: gold;*/
    position: absolute;
    top: 19px;
    right: 0px;
    font-size: 28px;
    text-align: left;
    line-height: 60px;
    color: #fb721f;
  }
  #yj_transferAccount_choise>.account_money>div>.account_money_input>input{
    width: 498px;
    height: 58px;
    border: 1px solid white;
    font-size: 22px;
  }

  /*验证码*/
  #yj_transferAccount_choise>.verify_code{
    width: 100%;
    height: 100px;
    background-color: white;
    position: relative;
    margin-bottom: 40px;
  }
  #yj_transferAccount_choise>.verify_code>.verify_code_img{
    width: 40px;
    height: 50px;
    /*background-color: sandybrown;*/
    position: absolute;
    top: 25px;
    left: 25px;
  }
  #yj_transferAccount_choise>.verify_code>.verify_code_word{
    width: 120px;
    height: 35px;
    /*background-color: aqua;*/
    position: absolute;
    top: 32px;
    left: 70px;
    color: #1f1f20;
    font-size: 22px;
    text-align: left;
    line-height: 35px;
  }
  #yj_transferAccount_choise>.verify_code>.verify_code_input{
    width: 300px;
    height: 60px;
    /*background-color: gold;*/
    position: absolute;
    top: 20px;
    left: 225px;
  }
  #yj_transferAccount_choise>.verify_code>.verify_code_input>input{
    width: 298px;
    height: 58px;
    border: 1px solid white;
    font-size: 22px;
  }
  #yj_transferAccount_choise>.verify_code>.verify_code_getCode{
    width: 150px;
    height: 45px;
    /*background-color: lawngreen;*/
    position: absolute;
    top: 27px;
    right: 50px;
    color: #fb721f;
    font-size: 22px;
    text-align: left;
    line-height: 45px;
  }

  /*提交*/
  #yj_transferAccount_choise>.apply_account{
    width: 100%;
    height: 100px;
    /*background-color: darkcyan;*/
  }
  #yj_transferAccount_choise>.apply_account>button{
    width: 600px;
    height: 100px;
    background-color: #fb721f;
    border: 1px solid #fb721f;
    border-radius: 50px;
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
</style>
