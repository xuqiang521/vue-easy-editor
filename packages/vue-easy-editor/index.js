import VueEasyEditor from './src/main'

VueEasyEditor.install = function (Vue) {
  Vue.component(VueEasyEditor.name, VueEasyEditor)
}

export default VueEasyEditor
