<!--模板-->
<template>
  <div class="yj_myWallet">
    <div class="header">
      <yj_header :header="headerData"></yj_header>
      <div class="user">
        <div class="userLogo">
          <img src="../assets/images/myWallet/userLogo.png" alt="用户">
        </div>
        <div class="username">杨娇</div>
      </div>
      <div class="classify"></div>
    </div>
    <div class="content">
      <yj_list_wallet></yj_list_wallet>
    </div>
  </div>

</template>

<!--Vue-->
<script>
  import yj_header from '../components/yj_header'
  import yj_list_wallet from '../components/yj_list_wallet'

  export default {
    name: 'yj_myWallet',
    components: {yj_header, yj_list_wallet},
    data: function () {
      return {
          headerData: {
              backArrows: '',
              title: '我的钱包'
          }
      }
    },
    mounted: function () {
        let that = this;
      this.$http.get('/api/yj_header', {

      }).then((response) => {
         // console.log(response.status);
          if(parseInt(response.status) === 200){
            //  console.log(response.data.data);
            that.headerData.backArrows = response.data.data.backArrows_orange;
            console.log(that.headerData.backArrows)
          }
      }).catch((error) => {
          console.log(error);
      })
    }
  }

</script>

<!--样式-->
<style lang="less">
  @myWalletBG: #FF7400;
  .yj_myWallet{
    width: 750px;
    max-height: 1340px;
    overflow-y: scroll;

    .header{
        background-color: @myWalletBG;
        .user{
          width: 150px;
          height: 200px;
          /*background-color: seagreen;*/
          margin: 0 auto;

          .userLogo{
            width: 145px;
            height: 145px;
            /*background-color: skyblue;*/
            margin-left: auto;
            margin-bottom: 10px;
          }

          .username{
            width: 100%;
            height: 45px;
            /*background-color: sienna;*/
            text-align: center;
            font-size: 35px;
            color: #ffffff;
          }
        }

    }
  }

</style>
