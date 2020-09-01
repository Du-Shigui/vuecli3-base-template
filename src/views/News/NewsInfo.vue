<template>
  <div class="page">
    <b-container>
      <b-row>
        <b-col class="crumb d-flex align-items-center">
          <span>当前位置：</span>
          <span>资讯</span>
          <span>></span>
          <span>正文</span>
        </b-col>
      </b-row>
      <!-- <b-breadcrumb :items="items"></b-breadcrumb> -->
    </b-container>
    <b-container>
      <iframe
        src="https://cn.vuejs.org/"
        id="mobsf"
        scrolling="no"
        frameborder="0"
        style=""
      ></iframe>
    </b-container>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
        return {
            items: [{
                text: '资讯',
                href: '#'
            },
            {
                text: '正文',
                href: '#'
            },]
        }
    },
    components: {

    },
    created () {

    },
    mounted(){
            /**
            * iframe-宽高自适应显示
            */
            function changeMobsfIframe(){
                const mobsf = document.getElementById('mobsf');
                const deviceWidth = document.body.clientWidth;
                const deviceHeight = document.body.clientHeight;
                mobsf.style.width = (Number(deviceWidth)-240) + 'px'; //数字是页面布局宽度差值
                mobsf.style.height = (Number(deviceHeight)-64) + 'px'; //数字是页面布局高度差
            }

            changeMobsfIframe()

            window.onresize = function(){
                changeMobsfIframe()
            }
        },
    methods: {

    },
    watch: {},
}
</script>

<style scoped lang="scss">
/* @import url(); 引入公共css类 */
.crumb {
  margin: 30px 0;
  span {
    font-size: 18px;
    color: #b2b2b2;
    margin: 0 8px;
    &:nth-child(2):hover {
      color: #3385ff;
    }
    &:last-child {
      color: #333;
    }
  }
}
</style>
