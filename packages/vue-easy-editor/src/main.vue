<template>
  <div class="vue-easy-editor" :style="{ 'min-height': height }">
    <div id="ql-toolbar" class="ql-toolbar ql-snow">
      <slot>
        <!-- 字号 -->
        <select class="ql-size">
          <option
            v-for="item in sizes.item"
            :key="item"
            :value="item"
            :selected="item === sizes.default" />
        </select>

        <!-- 字体 -->
        <select class="ql-font">
          <option
            v-for="item in fonts.item"
            :key="item"
            :value="item"
            :selected="item === fonts.default" />
        </select>
        <span class="separated" />

        <!-- 标题 -->
        <button
          type="button"
          class="ql-header"
          v-for="item in headers"
          :key="item"
          :value="item">H{{ item }}</button>
        <span class="separated" />

        <!-- 粗体/斜体/下划线 -->
        <button type="button" class="ql-bold" />
        <button type="button" class="ql-italic" />
        <button type="button" class="ql-underline" />

        <!-- 字体颜色/字体背景 -->
        <select class="ql-color" />
        <select class="ql-background" />
        <span class="separated" />

        <!-- 中划线/code/引用 -->
        <button type="button" class="ql-strike" />
        <button type="button" class="ql-code-block" />
        <button type="button" class="ql-blockquote" />
        <span class="separated" />

        <!-- 有序/无序列表 -->
        <button type="button" class="ql-list" value="ordered" />
        <button type="button" class="ql-list" value="bullet" />
        <span class="separated" />

        <!-- 字体 align -->
        <select class="ql-align">
          <option
            v-for="item in aligns.item"
            :key="item"
            :value="item"
            :selected="item === aligns.default" />
        </select>

        <!-- 清除格式 -->
        <button type="button" class="ql-clean" />
        <span class="separated" />

        <!-- 引用链接/图片上传 -->
        <button type="button" class="ql-link" />
        <button type="button" class="ql-image" />

        <!-- 自定义功能 -->
        <slot name="custom-button" v-if="canCustom">
          <button id="custom-button" style="width: auto;">自定义</button>
        </slot>
      </slot>
    </div>

    <quill-editor
      spellcheck="false"
      @ready="onReady"
      :options="options"
      :value="value"
      @change="value => $emit('change', value)"
      @input="value => $emit('input', value)" />
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import Quill from 'quill'
const Size = Quill.import('attributors/style/size')
const icons = Quill.import('ui/icons')

export default {
  name: 'vue-easy-editor',

  components: {
    quillEditor
  },

  props: {
    value: String,

    imageMultiple: {
      type: Boolean,
      default: true
    },

    height: {
      type: String,
      default: '300px'
    },

    sizes: {
      type: Object,
      default: () => {
        return {
          item: ['12px', '13px', '14px', '16px', '20px', '24px', '28px'],
          default: '14px'
        }
      }
    },

    fonts: {
      type: Object,
      default: () => {
        return {
          item: ['sans serif', 'serif', 'monospace'],
          default: 'sans serif'
        }
      }
    },

    headers: {
      type: Array,
      default: () => [1, 2, 3, 4]
    },

    aligns: {
      type: Object,
      default: () => {
        return {
          item: ['', 'center', 'right', 'justify'],
          default: ''
        }
      }
    },

    canCustom: Boolean,

    config: {
      type: Object,
      default: () => {
        return {
          placeholder: '写点什么...',
          scrollingContainer: 'body',
          modules: {
            toolbar: {
              container: '#ql-toolbar'
            },
            history: {
              delay: 100,
              maxStack: 50,
              userOnly: false
            }
          }
        }
      }
    }
  },

  computed: {
    options () {
      return {
        placeholder: '写点什么...',
        scrollingContainer: 'body',
        modules: {
          toolbar: {
            container: '#ql-toolbar'
          },
          history: {
            delay: 100,
            maxStack: 50,
            userOnly: false
          }
        },
        ...this.config
      }
    }
  },

  data () {
    return {
      editor: null
    }
  },

  created () {
    Size.whitelist = this.sizes.item
    icons.header[1] = ''
    icons.header[2] = ''
    Quill.register(Size, true)
  },

  mounted () {
    if (this.canCustom) {
      const customButton = document.querySelector('#custom-button')
      customButton.addEventListener('click', () => {
        alert('自定义点击功能!')
      })
    }
  },

  methods: {
    onReady (editor) {
      this.editor = editor
      const toolbar = this.editor.getModule('toolbar')
      toolbar.addHandler('image', this.imageHandle)
    },

    imageHandle () {
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      this.imageMultiple && input.setAttribute('multiple', 'multiple')
      input.click()
      input.onchange = () => {
        this.$emit('image-upload', input.files, this.editor, this.setImage)
      }
    },

    setImage (url) {
      if (!url) return new Error('请传入 url 参数')
      let length = this.editor.getSelection().index
      this.editor.insertEmbed(length, 'image', url)
      this.editor.setSelection(length + 1)
    }
  }
}
</script>

<style lang="scss">
@import url('~quill/dist/quill.core.css');
@import url('~quill/dist/quill.snow.css');
@import './main.scss';
</style>
