import VueEasyEditor from './vue-easy-editor'

const components = [
  VueEasyEditor
]

const install = function (Vue, opts = {}) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  VueEasyEditor
}
