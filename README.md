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
<script type="text/javascript" src="https://unpkg.com/vue-easy-editor/lib/index.umd.min.js"></script>
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

### 定制字体大小
**由于 vue-easy-editor 的字体大小本身就是定制过的，但肯定不能满足所有需求，所以如果你需要再次定制，也完全是 OK 的，范例如下**

```html
<template>
  <div class="home">
    <vue-easy-editor v-model="editorHtml" :sizes="sizes" />
  </div>
</template>

<script>
import { VueEasyEditor } from 'packages/index'
export default {
  name: 'home',

  components: {
    VueEasyEditor
  },

  data () {
    return {
      editorHtml: '',
      sizes: {
        item: ['26rem', '30rem', '33rem', '36rem', '40rem', '43rem', '46rem', '50rem'],
        default: '33rem'
      }
    }
  }
}
</script>

<style lang="scss">
@mixin rich-size() {
  @each $size in ['26rem', '30rem', '33rem', '36rem', '40rem', '43rem', '46rem', '50rem'] {
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="#{$size}"]::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="#{$size}"]::before {
      content: '#{$size}';
      font-size: #{$size};
    }
  }
}
html {
  font-size: 0.5px;
}
.vue-easy-editor {
  @include rich-size();
}
</style>
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
| image-upload | 图片上传事件 | files：上传文件, editor：编辑器, done：图片上传完成的回调，执行会直接插入上传好的图片到富文本制定的位置 |
