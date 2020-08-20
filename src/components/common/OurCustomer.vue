<template>
   <div class="our-customer">
      <b-container>
         <!-- 标题 -->
         <b-row class="title-wrapper">
            <b-col class="text-center">
               <!-- <h3 class="sec-title">我们的客户</h3> -->
               <sup-title title="我们的客户"></sup-title>
            </b-col>
         </b-row>
         <!-- 内容 -->
         <b-row class="content-wrapper my-5">
            <b-col class="sw-col d-flex justify-content-center" xs="12" sm="12" md="6" lg="3" v-for="(ct, idx) in customerArr.concat(customerArr)" :key="idx">
               <div class="sw-card d-flex justify-content-center align-items-center">
                  <b-img class="sw-img d-inline-block" :src="ct.img"></b-img>
                  <span>{{ ct.name }}</span>
               </div>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>
<script>
   export default {
      name: 'our-customer',
      data() {
         return {
            // 我们的客户
            customerArr: [{
               img: 'http://placekitten.com/200/116',
               name: '双湖园',
            }, {
               img: 'http://placekitten.com/200/116',
               name: '雅和睿景',
            }, {
               img: 'http://placekitten.com/200/116',
               name: '大碗厨',
            }, {
               img: 'http://placekitten.com/200/116',
               name: '香山湖',
            }],
         }
      }
   }
</script>
<style lang="scss" scoped>
   .our-customer {
      padding: 50px 0 30px 0;
      background: white;

      .content-wrapper {
         .sw-col {
            // padding: 20px;
         }
         .sw-card {
            margin: 10px 0;
            width: 270px;
            height: 100px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 7px 24px 0px rgba(0, 0, 0, 0.1);
            border-radius: 4px;

            .sw-img {
               width: 62px;
               height: 32px;
               margin-right: 10px;
            }

            span {
               font-size: 16px;
               font-weight: 500;
               color: rgba(51, 51, 51, 1);
            }
         }
      }
   }
</style>