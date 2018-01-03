<!--模板-->
<template>
  <div class="yj_myWallet">
    <div class="header">
      <yj_header :header="headerData"></yj_header>
      <div></div>
      <div></div>
    </div>
    <div class="content"></div>
  </div>

</template>

<!--Vue-->
<script>
  import yj_header from '../components/yj_header'

  export default {
    name: 'yj_myWallet',
    components: {yj_header},
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
<style>
  .yj_myWallet{
    width: 750px;
    max-height: 1340px;
    overflow-y: scroll;
  }

</style>
