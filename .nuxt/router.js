import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54e325d7 = () => interopDefault(import('../pages/corporate_bank.vue' /* webpackChunkName: "pages/corporate_bank" */))
const _76b7d1de = () => interopDefault(import('../pages/corporate_profile.vue' /* webpackChunkName: "pages/corporate_profile" */))
const _97b4ed84 = () => interopDefault(import('../pages/corporate_register.vue' /* webpackChunkName: "pages/corporate_register" */))
const _1c5f4ada = () => interopDefault(import('../pages/driver_profile.vue' /* webpackChunkName: "pages/driver_profile" */))
const _86a83036 = () => interopDefault(import('../pages/driverbank.vue' /* webpackChunkName: "pages/driverbank" */))
const _6ce777c6 = () => interopDefault(import('../pages/logincorporate.vue' /* webpackChunkName: "pages/logincorporate" */))
const _761f51c0 = () => interopDefault(import('../pages/logindriver.vue' /* webpackChunkName: "pages/logindriver" */))
const _563eb943 = () => interopDefault(import('../pages/loginuser.vue' /* webpackChunkName: "pages/loginuser" */))
const _68c45d62 = () => interopDefault(import('../pages/profile_user.vue' /* webpackChunkName: "pages/profile_user" */))
const _46489693 = () => interopDefault(import('../pages/register_driver.vue' /* webpackChunkName: "pages/register_driver" */))
const _47763976 = () => interopDefault(import('../pages/register_user.vue' /* webpackChunkName: "pages/register_user" */))
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
    path: "/corporate_bank",
    component: _54e325d7,
    name: "corporate_bank"
  }, {
    path: "/corporate_profile",
    component: _76b7d1de,
    name: "corporate_profile"
  }, {
    path: "/corporate_register",
    component: _97b4ed84,
    name: "corporate_register"
  }, {
    path: "/driver_profile",
    component: _1c5f4ada,
    name: "driver_profile"
  }, {
    path: "/driverbank",
    component: _86a83036,
    name: "driverbank"
  }, {
    path: "/logincorporate",
    component: _6ce777c6,
    name: "logincorporate"
  }, {
    path: "/logindriver",
    component: _761f51c0,
    name: "logindriver"
  }, {
    path: "/loginuser",
    component: _563eb943,
    name: "loginuser"
  }, {
    path: "/profile_user",
    component: _68c45d62,
    name: "profile_user"
  }, {
    path: "/register_driver",
    component: _46489693,
    name: "register_driver"
  }, {
    path: "/register_user",
    component: _47763976,
    name: "register_user"
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
