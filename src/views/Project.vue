<template>
   <div class="project">
      <b-container>
         <!-- 概述 -->
         <b-row class="overview-wrapper" align-h="center">
            <b-col cols="12" class="text-center">
               <h2>解决餐企经营挑战</h2>
            </b-col>
            <b-col cols="12">
               <b-img :src="$appConfig.picdomain + '/upload//20200818/133006306_product-banner.png'" fluid-grow alt="方案页Banner图"></b-img>
            </b-col>
         </b-row>
         <!-- 具体方案 -->
         <b-row class="detail-wrapper">
            <b-col></b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
   export default {
      name: 'Project',
   }
</script>

<style lang="scss" scoped>
   .project {
      .overview-wrapper {
         h2 {
            font-size: 36px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
         }
      }
   }
</style>