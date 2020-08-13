import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import "bootstrap/dist/css/bootstrap.css"
// 引入 Bootstrap & jQuery
import 'bootstrap';
import "@/styles/custom-bootstrap.scss"
import "jquery"
// 引入 vue-meta
import VueMeta from "vue-meta"
Vue.use(VueMeta)

// import { setRemInit } from "@/utils/rem";
// setRemInit(); //进行初始化立即运行

Vue.config.productionTip = false

// 配置每个页面的meta标签
router.beforeEach((to, from, next) => {
	if (to.meta.metaInfo) store.commit("CAHNGE_META_INFO", to.meta.metaInfo);
	next();
});

new Vue({
  router,
  data: {
    title: "云于天",
    titleTemplate: "%s | 构建商家与消费者共赢的智慧生活圈",
    keywords: "餐饮,管理,智能",
    description: "构建商家与消费者共赢的智慧生活圈",
  },
  metaInfo() {
    return {
			title: this.$store.state.metaInfo.title,
			meta: [
				{
					name: "keywords",
					content: this.$store.state.metaInfo.keywords,
				},
				{
					name: "description",
					content: this.$store.state.metaInfo.description,
				},
			],
		};
  },
  store,
  render: (h) => h(App),
}).$mount("#app");