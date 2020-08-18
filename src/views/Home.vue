<template>
  <div class="home">
    <!-- ========================= Banner START ========================= -->
    <b-img :src="$appConfig.picdomain + '/upload/20200817/1455575557_homepage-banner.png'" fluid-grow alt="首页Banner图">
    </b-img>
    <!-- ========================= Banner END ========================= -->

    <!-- ========================= 解决方案 START ========================= -->
    <solution></solution>
    <!-- ========================= 解决方案 END ========================= -->

    <!-- ========================= 我们的产品 START ========================= -->
    <our-products></our-products>
    <!-- ========================= 我们的产品 END ========================= -->

    <!-- ========================= 我们的客户 START ========================= -->
    <!-- ========================= 我们的客户 END ========================= -->

    <!-- ========================= 联系我们 START ========================= -->
    <contact-us></contact-us>
    <!-- ========================= 联系我们 END ========================= -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navbar from 'components/common/Navbar'
  import ContactUs from 'components/common/ContactUs';
  import Solution from 'views/Home/Solution';
  import OurProducts from 'views/Home/OurProducts';
  import DemoStudentTe from '@/service/Demo/DemoStudentTeAppService.js';

  export default {
    name: 'Home',
    components: {
      Navbar,
      OurProducts,
      ContactUs,
      Solution
    },
    data() {
      return {
        // 请求远程参数
        queryPage: {
          pageIndex: 1,
          pageSize: 5,
          order: 'createTime desc',
          studentName: '',
          className: '',
          isAppend: true // 控制是滚动底部刷新 还是上拉加载
        },
        slide: 0, // banner idx
      }
    },
    async mounted() {
      await DemoStudentTe.GetViewPage(this.queryPage);
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

</style>