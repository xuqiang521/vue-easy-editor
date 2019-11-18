# vue-easy-editor

> 一个基于 quill 的 Vue 富文本编辑器组件，开箱即用。

## 安装

### npm
```bash
npm i vue-easy-editor -S
```

### yarn
```bash
yarn add vue-easy-editor
```

### CDN
```html
<script type="text/javascript" src="https://unpkg.com/vue-easy-editor/lib/vue-easy-editor.umd.min.js"></script>
<script type="text/javascript">
  Vue.use(window.VueEasyEditor)
</script>
```

## 使用

### 全局注册
```javascript
import Vue from 'vue'
import { VueEasyEditor } from 'vue-easy-editor'
import 'vue-easy-editor/lib/index.css'

Vue.use(VueEasyEditor)
```

### 局部注册
```javascript
import { VueEasyEditor } from 'vue-easy-editor'
import 'vue-easy-editor/lib/index.css'

export default {
  components: {
    VueEasyEditor
  }
}
```

### 基本使用
```html
<template>
  <div class="demo">
    <vue-easy-editor v-model="editorHtml" @image-upload="handleImageUpload" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      editorHtml: ''
    }
  },

  methods: {
    handleImageUpload (files, editor, done) {
      console.log(files, editor, done)
    }
  }
}
</script>
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **value** | 内容 | string | — | — |
| height | 文本框高度 | string | — | '300px' |
| sizes | 字体大小选项 | object | { item: string[], default: string } | { item: ['12px', '13px', '14px', '16px', '20px', '24px', '28px'], default: '14px' } |
| fonts | 字体选项 | object | { item: string[], default: string } | { item: ['sans serif', 'serif', 'monospace'], default: 'sans serif' } |
| headers | 标题选项 | array | number[] | [1, 2, 3, 4] |
| aligns | 居中选项 | object | { item: string[], default: string } | { item: ['', 'center', 'right', 'justify'], default: '' } |
| config | 文本配置 | object | — | 详细看 quill config 配置 |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 文本change事件 | value：文本内容 |
| input | 文本input事件 | value：文本内容 |
| image-upload | 图片上传事件 | files：上传文件, editor：编辑器, done：上传回调 |
