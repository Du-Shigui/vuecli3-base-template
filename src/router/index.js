import Vue from 'vue'
import VueRouter from 'vue-router'
import {
	metaInfo
} from "@/utils/const";

function loadView(view) {
	return () => import(`views/${view}`)
}

Vue.use(VueRouter)

const routes = [
	{ path: "/", redirect: "/home" },
	{
		path: "/home",
		name: "Home",
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
		name: "Project",
		component: loadView("Project"),
	},
	{
		path: "/product",
		name: "Product",
		component: loadView("Product"),
	},
	{
		path: "/about",
		name: "About",
		component: loadView("About"),
	},
	{
		path: "/resources",
		name: "Resources",
		component: loadView("Resources"),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router