<template>
   <div class="footer-bottom container-xl">
      <div class="row">
         <div class="col-12 col-md-6">
            <ul class="nav flex-column">
               <li class="nav-item">
                  <a class="nav-link text-dark" href="#">地址：湖北省武汉市武大园一路武大科技园创业楼</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link text-dark" href="#">电话：027-87607295</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link text-dark" href="#">邮箱：whcewei@whcewei.com</a>
               </li>
            </ul>
         </div>
         <div class="col-12 col-md-6 text-right">
            <div class="qr-code-wrapper d-flex flex-column align-items-center justify-content-center">
               <img src="http://placekitten.com/110/100" class="qr-code  mb-2" alt="二维码">
               <div>扫码了解更多</div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'FooterBottom'
   }
</script>

<style lang="scss" scoped>
   .footer-bottom {
      .qr-code-wrapper {
         .qr-code {
            width: 110px;
            height: 110px;
         }
      }
   }
</style>