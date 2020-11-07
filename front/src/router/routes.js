import Home from '../views/home';

export default [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => import(/* webpackChunkName: "profile" */ '../views/profile'),
	},
	{
		path: '/education',
		name: 'education',
		component: () => import(/* webpackChunkName: "education" */ '../views/education'),
	},
	{
		path: '/matches',
		name: 'matches',
		component: () => import(/* webpackChunkName: "matches" */ '../views/matches'),
	},
	{
		path: '/notifications',
		name: 'notification',
		component: () => import(/* webpackChunkName: "notification" */ '../views/notifications'),
	},
    {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import(/* webpackChunkName: "notification" */ '../views/settings'),
        meta: { background: 'dark' }
    },
    {
        path: '/support',
        name: 'support',
        component: () => import(/* webpackChunkName: "notification" */ '../views/support'),
        meta: { background: 'dark' }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "notification" */ '../views/about'),
        meta: { background: 'dark' }
	},
	{
        path: '/efficiency',
        name: 'efficiency',
        component: () => import(/* webpackChunkName: "notification" */ '../views/efficiency'),
    },
]
