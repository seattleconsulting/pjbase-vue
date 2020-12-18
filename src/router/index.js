import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Task from '../views/Task.vue'
import Create from '../views/Create.vue'
import Edit from '../views/Edit.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(/* webpackChunkName: "about" */ '../views/About.vue')
		}
	},
	{
		path: '/',
		name: 'Login',
		redirect: '/login',
		component: Login,
		children: [
			{
				path: '/login',
				name: 'Login',
				component: Login,
				meta: { requiresAuth: false }
			}
		]
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		meta: { requiresAuth: false }
	},
	{
		path: '/task',
		name: 'Task',
		component: Task,
		meta: { requiresAuth: true }
	},
	{
		path: '/create',
		name: 'Create',
		component: Create,
		meta: { requiresAuth: true }
	},
	{
		path: '/edit/:id',
		name: 'Edit',
		component: Edit,
		meta: { requiresAuth: true }
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('token')
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		if (!token) {
			next({ name: 'Login' })
		} else {
			next() // go to wherever I'm going
		}
	} else {
		if (token) {
			next('/task')
		}
		next() // does not require auth, make sure to always call next()!
	}
})
