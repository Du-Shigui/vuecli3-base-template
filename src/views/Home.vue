<template>
  <div class="home">
    <!-- ========================= Banner START ========================= -->
    <!-- ========================= Banner END ========================= -->

    <!-- ========================= 解决方案 START ========================= -->
    <!-- ========================= 解决方案 END ========================= -->

    <!-- ========================= 我们的产品 START ========================= -->
    <our-products></our-products>
    <!-- ========================= 我们的产品 END ========================= -->

    <!-- ========================= 我们的客户 START ========================= -->
    <!-- ========================= 我们的客户 END ========================= -->

    <!-- ========================= 联系我们 START ========================= -->
    <!-- ========================= 联系我们 END ========================= -->

    <!-- ========================= footer START ========================= -->
    <!-- ========================= footer END ========================= -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navbar from 'components/common/Navbar'
  import OurProducts from 'components/common/OurProducts'
  import DemoStudentTe from '@/service/Demo/DemoStudentTeAppService.js';

  export default {
    name: 'Home',
    components: {
      Navbar,
      OurProducts
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
      }
    },
    async mounted() {
      await DemoStudentTe.GetViewPage(this.queryPage);
    },
    methods: {

    }
  }
</script>