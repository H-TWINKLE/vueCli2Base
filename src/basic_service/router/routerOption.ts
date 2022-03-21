const Base = () => import(/* webpackChunkName: "common/base" */'@/components/base/Base.vue')
const Home = () => import(/* webpackChunkName: "Home" */'@/view/home/Home.vue')
const Login = () => import(/* webpackChunkName: "Login" */'@/view/login/Login.vue')

export const routerOption = [
    {
        path: '/Login',
        name: 'login',
        component: Login,
        meta: { title: '登录' }
    },
    {
        path: '/',
        name: 'Base',
        component: Base,
        meta: { title: '基础页面' },
        children: [
            {
                path: '/',
                name: 'Index',
                component: Home,
                meta: { title: '主页' }
            }
        ]
    }
]
