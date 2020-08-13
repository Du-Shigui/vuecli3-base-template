<template>
   <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
      <div class="container d-flex">
         <a class="logo-wrapper d-flex justify-content-center align-items-center" href="#">
            <img :src="logoSrc" class="logo" alt="云于天LOGO">
            <div class="split-line"></div>
            <div class="sub-title">智能数据管理服务</div>
         </a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto text-center">
               <li class="nav-item" :class="{ 'active': navIndex === idx, 'dropdown': item.children }"
                  v-for="(item, idx) in navbarArr" :key="idx">
                  <router-link v-if="!item.children" :to="item.path" class="nav-link">
                     {{ item.title }}
                  </router-link>
                  <template v-else>
                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                        {{ item.title }}
                     </a>
                     <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <router-link class="dropdown-item"
                           v-for="(subItem, index) in item.children" :key="index"
                           :to="item.path + subItem.path"
                        >{{ subItem.title }}</router-link>
                     </div>
                  </template>
               </li>
            </ul>
         </div>
      </div>

   </nav>
</template>

<script>
   export default {
      name: 'Navbar',
      data() {
         return {
            logoSrc: 'https://pic.cwyyt.cn/upload/20200813/081108118_yyt_logo.png',
            navbarArr: [{
                  title: '首页',
                  path: '/'
               },
               {
                  title: '方案',
                  path: '/project'
               },
               {
                  title: '产品',
                  path: '/product',
                  children: [{
                     title: '预定管理',
                     path: '/reserve'
                  }, {
                     title: '客户管理',
                     path: '/customer'
                  }, {
                     title: '宴会管理',
                     path: '/banquet'
                  }, {
                     title: '营销管理',
                     path: '/marketing'
                  }]
               },
               {
                  title: '关于我们',
                  path: '/about',

               },
               {
                  title: '资源',
                  path: '/resources'
               },
            ],
            navIndex: 0,
         }
      },
      mounted() {
         window.addEventListener("resize", this.onResize);
         this.onResize();
      },
      methods: {
         onResize() {
            $("body").css("padding-top", $(".navbar").outerHeight());
         },
      }
   }
</script>

<style lang="scss" scoped>
   .container {

      // logo
      .logo-wrapper {
         .logo {
            width: 80px;
            height: 37px;
         }

         .split-line {
            width: 2px;
            height: 34px;
            background: rgba(51, 133, 255, 1);
            border-radius: 1px;
            margin: 0 10px;
         }

         .sub-title {
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(51, 133, 255, 1);
            line-height: 20px;
         }
      }

      // 右侧collapse
      .collapse {
         .navbar-nav {
            .nav-item {
               position: relative;

               >.nav-link {
                  color: #333333;
               }

               &.active>.nav-link {
                  color: #3385FF;

                  &::after {
                     position: absolute;
                     content: "";
                     left: 0;
                     right: 0;
                     bottom: 0;
                     height: 2px;
                     background-color: #3385FF;
                     transform: scaleX(0.5);
                  }
               }
            }
         }
      }
   }
</style>