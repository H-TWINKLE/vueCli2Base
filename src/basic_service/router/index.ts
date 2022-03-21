import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { routerOption } from './routerOption'
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location: any) {
    // @ts-ignore
    return originalPush.call(this, location).catch((err: any) => err)
}

Vue.use(VueRouter)
const routes: RouteConfig[] = routerOption
const router = new VueRouter({
    routes
})

router.beforeEach(async (to, from, next) => {
    next()
})

export default router
