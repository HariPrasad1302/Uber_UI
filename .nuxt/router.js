import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _86a83036 = () => interopDefault(import('../pages/driverbank.vue' /* webpackChunkName: "pages/driverbank" */))
const _6e68a129 = () => interopDefault(import('../pages/driverdetails.vue' /* webpackChunkName: "pages/driverdetails" */))
const _cec90ab4 = () => interopDefault(import('../pages/login_page.vue' /* webpackChunkName: "pages/login_page" */))
const _761f51c0 = () => interopDefault(import('../pages/logindriver.vue' /* webpackChunkName: "pages/logindriver" */))
const _563eb943 = () => interopDefault(import('../pages/loginuser.vue' /* webpackChunkName: "pages/loginuser" */))
const _46489693 = () => interopDefault(import('../pages/register_driver.vue' /* webpackChunkName: "pages/register_driver" */))
const _47763976 = () => interopDefault(import('../pages/register_user.vue' /* webpackChunkName: "pages/register_user" */))
const _1ccb9125 = () => interopDefault(import('../pages/signup_page.vue' /* webpackChunkName: "pages/signup_page" */))
const _ae5d845a = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _eba7903e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/driverbank",
    component: _86a83036,
    name: "driverbank"
  }, {
    path: "/driverdetails",
    component: _6e68a129,
    name: "driverdetails"
  }, {
    path: "/login_page",
    component: _cec90ab4,
    name: "login_page"
  }, {
    path: "/logindriver",
    component: _761f51c0,
    name: "logindriver"
  }, {
    path: "/loginuser",
    component: _563eb943,
    name: "loginuser"
  }, {
    path: "/register_driver",
    component: _46489693,
    name: "register_driver"
  }, {
    path: "/register_user",
    component: _47763976,
    name: "register_user"
  }, {
    path: "/signup_page",
    component: _1ccb9125,
    name: "signup_page"
  }, {
    path: "/test",
    component: _ae5d845a,
    name: "test"
  }, {
    path: "/",
    component: _eba7903e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
