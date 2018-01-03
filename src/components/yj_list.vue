<!--模板-->
<template>
  <div class="yj_list">
    <!--<ul>
      <li v-for="(value, index) in list">{{ index }} - {{ value.way }} - {{ value.use }}</li>
    </ul>-->
    <div class="account_list" v-for="value in list">
      <div class="user">
        <img :src="value.account_user" alt="用户">
      </div>
      <div class="date">
        <div class="list_header">
          {{ value.account_way }} - {{ value.account_username }} - {{  value.account_classify }}
        </div>
        <div class="list_date"> {{ value.account_datetime }} </div>
      </div>
      <div class="money"> - {{ value.account_money }}</div>
    </div>

  </div>

</template>

<!--Vue-->
<script>
  export default {
    name: 'yj_list',
    props: {
        list: {
          type: Array,
          required: true
        }
    }
  }

</script>

<!--样式-->
<style lang="less">
    @list_headerColor: #161616;
    @list_dateColor: #a0a0a0;
    @moneyColor: #fc5d07;
    .yj_list{
        .account_list{
          width: 710px;
          height: 162px;
          /*background-color: salmon;*/
          border-bottom: 2px solid #ebebeb;
          margin: 0 auto;
          position: relative;

          .user{
            width: 100px;
            height: 100px;
            /*background-color: skyblue;*/
            position: absolute;
            top: 31px;
            left: 40px;
          }

          .date{
            width: 335px;
            height: 85px;
            /*background-color: saddlebrown;*/
            position: absolute;
            top: 39px;
            left: 150px;

            .list_header{
              width: 100%;
              height: 45px;
              /*background: seagreen;*/
              margin-bottom: 10px;
              font-size: 30px;
              color: @list_headerColor;
              text-align: left;
            }

            .list_date{
              width: 100%;
              height: 30px;
             /* background-color: beige;*/
              font-size: 30px;
              color: @list_dateColor;
              text-align: left;
            }
          }

          .money{
            width: 160px;
            height: 45px;
           /* background-color: sandybrown;*/
            position: absolute;
            top:39px;
            right: 25px;
            font-size: 35px;
            text-align: right;
            color: @moneyColor;
          }
        }
    }





</style>
