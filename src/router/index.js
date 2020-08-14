import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";
import {
	metaInfo
} from "@/utils/const";

function loadView(view) {
	return () => import(`@/views/${view}`)
}

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "home",
		component: loadView("Home"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "云于天 | 首页",
			},
		},
	},
	{
		path: "/project",
		name: "project",
		component: loadView("Project"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "云于天 | 项目",
			},
		},
	},
	{
		path: "/product",
		name: "product",
		component: loadView("Product"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "云于天 | 产品",
			},
		},
		children: [
			{ path: "", component: loadView("Product") },
			{
				path: "reserve",
				name: "reserve",
				component: loadView("Product/Reserve"),
			},
			{
				path: "customer",
				name: "customer",
				component: loadView("Product/Customer"),
			},
			{
				path: "banquet",
				name: "banquet",
				component: loadView("Product/Banquet"),
			},
			{
				path: "marketing",
				name: "marketing",
				component: loadView("Product/Marketing"),
			},
		],
	},
	{
		path: "/about",
		name: "about",
		component: loadView("About"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "云于天 | 关于我们",
			},
		},
	},
	{
		path: "/news",
		name: "news",
		component: loadView("News"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "云于天 | 资讯",
			},
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	// 设置页面meta标签信息
	if (to.meta.metaInfo) store.commit("CHANGE_META_INFO", to.meta.metaInfo);
	// 监听路由，改变当前导航栏高亮状态
	store.commit("CHANGE_CUR_ROUTE_NAME", to.name);
	next();
});

export default router