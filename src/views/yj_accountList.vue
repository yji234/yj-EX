<!--模板-->
<template>
  <div id="yj_accountList">
    <!--转账记录-->
    <div class="header">
      <div class="lBack">
        <img src="../assets/images/accountList/lBack.png" alt="返回">
      </div>
      <div class="accountList">
        转账记录
      </div>
    </div>
    <!--日期等-->
    <div class="some">
      <div class="date">
        2018 - 01
      </div>
      <div class="payment">
        <span>支出</span>
        <span>12000</span>
      </div>
      <div class="income">
        <span>收入</span>
        <span>20000</span>
      </div>
      <div class="personChoice">
        <img src="../assets/images/accountList/person.png" alt="选择用户">
      </div>
    </div>
    <!--每一个记录-->
    <div class="persons">
      <div class="person_list">
        <div class="user_logo"></div>
        <div class="date_use"></div>
        <div class="money"></div>
      </div>
      <div class="person_list"></div>
      <div class="person_list"></div>
      <div class="person_list"></div>
      <div class="person_list"></div>
      <div class="person_list"></div>
      <div class="person_list"></div>
    </div>



    <yj_list></yj_list>


  </div>

</template>

<!--Vue-->
<script>

  import yj_list from '../components/yj_list'

  export default {

    name: 'yj_accountList',
    data: function () {
      return {
          msg: 'Welcome to my App!'
      }
    },
    components: {
      yj_list,
      props: {
        msg: String
      }
    },
    mounted: function () {
      let that = this;
      this.$http.get('/api/yj_accountList', {

      }).then(function (response) {
        console.log(response.status);
        console.log(response.data);

      }).catch(function (error) {
        console.log(error)
      })
    }
  }

</script>

<!--样式-->
<style>
  *{
    padding: 0px;
    margin: 0px;
  }
  #yj_accountList{
    width: 750px;
    height: 1340px;
    background-color: darkcyan;
  }

  /*转账记录*/
  #yj_accountList>.header{
    width: 100%;
    height: 90px;
    background-color: #fc5d07;
    position: relative;
  }
  #yj_accountList>.header>.lBack{
    width: 50px;
    height: 50px;
    /*background-color: saddlebrown;*/
    position: absolute;
    top: 20px;
    left: 25px;
  }
  #yj_accountList>.header>.accountList{
    width: 160px;
    height: 50px;
    /*background-color: skyblue;*/
    position: absolute;
    top: 25px;
    left: 295px;
    font-size: 30px;
    font-weight: bold;
    color: white;
  }

  /*日期等*/
  #yj_accountList>.some{
    width: 100%;
    height: 80px;
    background-color: #e6e9f3;
    position: relative;
  }
  #yj_accountList>.some>.date{
    width: 110px;
    height: 40px;
    /*background-color: saddlebrown;*/
    position: absolute;
    top: 20px;
    left: 25px;
    color: #111112;
    font-size: 24px;
    line-height: 40px;
  }
  #yj_accountList>.some>.payment{
    width: 150px;
    height: 40px;
    /*background-color: seagreen;*/
    position: absolute;
    top: 20px;
    left: 180px;
    color: #5f5f5f;
    text-align: left;
    font-size: 26px;
    line-height: 40px;
  }
  #yj_accountList>.some>.income{
    width: 150px;
    height: 40px;
    /*background-color: salmon;*/
    position: absolute;
    top: 20px;
    left: 340px;
    color: #5f5f5f;
    text-align: left;
    font-size: 26px;
    line-height: 40px;
  }
  #yj_accountList>.some>.personChoice{
    width: 50px;
    height: 50px;
    background-color: olive;
    position: absolute;
    top: 15px;
    right: 25px;
  }

  /*每一个记录*/
  #yj_accountList>.persons{
    width: 100%;
    height: 1170px;
    background-color: seagreen;
  }
  #yj_accountList>.persons>.person_list{
    width: 710px;
    height: 162px;
    background-color: salmon;
    border-bottom: 2px solid #ebebeb;
    margin: 0 auto;
    position: relative;
  }
  #yj_accountList>.persons>.person_list>.user_logo{
    width: 100px;
    height: 100px;
    background-color: skyblue;
    position: absolute;
    top: 31px;
    left: 40px;
  }
  #yj_accountList>.persons>.person_list>.date_use{
    width: 335px;
    height: 85px;
    background-color: saddlebrown;
    position: absolute;
    top: 39px;
    left: 150px;
  }
  #yj_accountList>.persons>.person_list>.money{
    width: 160px;
    height: 45px;
    background-color: sandybrown;
  }
</style>
