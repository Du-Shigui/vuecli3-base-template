<template>
   <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
      <div class="container d-flex">
         <a class="logo-wrapper d-flex justify-content-center align-items-center" href="#">
            <icon-svg class="logo" icon-class="icon-yunyutianlogo1" />
            <div class="split-line"></div>
            <div class="sub-title">智能数据管理服务</div>
         </a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto text-center">
               <li class="nav-item"
                  :class="{ 'active': curRouteName === item.name || $route.path.includes(item.name), 'dropdown': item.children }"
                  v-for="(item, idx) in navbarArr" :key="idx">
                  <router-link v-if="!item.children" :to="{ name: item.name }" class="nav-link">
                     {{ item.title }}
                  </router-link>
                  <template v-else>
                     <router-link :to="{ name: item.name }" class="nav-link" id="navbarDropdownMenuLink"
                        data-toggle="dropdown">
                        {{ item.title }}
                     </router-link>
                     <div class="dropdown-menu mt-0">
                        <router-link class="dropdown-item" :class="{ 'active': curRouteName === subItem.name }"
                           v-for="(subItem, index) in item.children" :key="index" :to="{ name: subItem.name }">
                           {{ subItem.title }}</router-link>
                     </div>
                  </template>
               </li>
            </ul>
         </div>
      </div>

   </nav>
</template>

<script>
   import store from '@/store';
   export default {
      name: 'Navbar',
      computed: {
         curRouteName() {
            return this.$store.state.curRouteName
         }
      },
      data() {
         return {
            logoSrc: 'https://pic.cwyyt.cn/upload/20200813/081108118_yyt_logo.png',
            navbarArr: [{
                  title: '首页',
                  name: 'home'
               },
               {
                  title: '方案',
                  name: 'project'
               },
               {
                  title: '产品',
                  name: 'product',
                  children: [{
                     title: '预定管理',
                     name: 'reserve'
                  }, {
                     title: '客户管理',
                     name: 'customer'
                  }, {
                     title: '宴会管理',
                     name: 'banquet'
                  }, {
                     title: '营销管理',
                     name: 'marketing'
                  }]
               },
               {
                  title: '关于我们',
                  name: 'about',

               },
               {
                  title: '资讯',
                  name: 'news'
               },
            ],
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
            // width: 80px;
            // height: 37px;
            font-size: 40px;
         }

         .split-line {
            width: 2px;
            height: 34px;
            background: rgba(51, 133, 255, 1);
            border-radius: 1px;
            margin: 0 10px;
         }

         .sub-title {
            font-weight: bold;
            color: rgba(51, 133, 255, 1);
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