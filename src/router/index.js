import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";
import {
	metaInfo
} from "@/utils/const";

function loadView(view) {
	return () => import(`views/${view}`)
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
	},
	{
		path: "/product",
		name: "product",
		component: loadView("Product"),
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
	},
	{
		path: "/resources",
		name: "resources",
		component: loadView("Resources"),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	console.log(to.name);
	store.commit("CHANGE_CUR_ROUTE_NAME", to.name);
	next();
	// const isLogin = !Array.isArray(storage.get("fe-token"));
	// console.log(isLogin);
	// // 个人中心需要登录
	// if (to.name === "Member") {
	// 	isLogin ? next() : next("/login");
	// } else {
	// 	next();
	// }
});

export default router