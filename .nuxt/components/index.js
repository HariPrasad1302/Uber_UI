export { default as Bankdriver } from '../../components/bankdriver.vue'
export { default as Detailsdriver } from '../../components/detailsdriver.vue'
export { default as Driverlogin } from '../../components/driverlogin.vue'
export { default as Driverregister } from '../../components/driverregister.vue'
export { default as Homeintro } from '../../components/homeintro.vue'
export { default as Login } from '../../components/login.vue'
export { default as Register } from '../../components/register.vue'
export { default as Signup } from '../../components/signup.vue'
export { default as Userlogin } from '../../components/userlogin.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
