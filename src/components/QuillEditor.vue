<template>
  <div class="rich-editor" :style="{ 'min-height': height }">
    <div id="ql-toolbar" class="ql-toolbar ql-snow">
      <slot>
        <!-- 字号 -->
        <select class="ql-size">
          <option v-for="item in sizes.item" :key="item" :value="item" :selected="item === sizes.default" />
        </select>

        <!-- 字体 -->
        <select class="ql-font">
          <option
            v-for="item in fonts.item"
            :key="item"
            :value="item"
            :selected="item === fonts.default" />
        </select>
        <span class="separated"></span>

        <!-- 标题 -->
        <button
          type="button"
          class="ql-header"
          v-for="item in headers"
          :key="item"
          :value="item">H{{ item }}</button>
        <span class="separated"></span>

        <!-- 粗体/斜体/下划线 -->
        <button type="button" class="ql-bold"></button>
        <button type="button" class="ql-italic"></button>
        <button type="button" class="ql-underline"></button>

        <!-- 字体颜色/字体背景 -->
        <select class="ql-color"></select>
        <select class="ql-background"></select>
        <span class="separated"></span>

        <!-- 中划线/code/引用 -->
        <button type="button" class="ql-strike"></button>
        <button type="button" class="ql-code-block"></button>
        <button type="button" class="ql-blockquote"></button>
        <span class="separated"></span>

        <!-- 有序/无序列表 -->
        <button type="button" class="ql-list" value="ordered"></button>
        <button type="button" class="ql-list" value="bullet"></button>
        <span class="separated"></span>

        <!-- 字体 align -->
        <select class="ql-align">
          <option
            v-for="item in aligns.item"
            :key="item"
            :value="item"
            :selected="item === aligns.default" />
        </select>

        <!-- 清除格式 -->
        <button type="button" class="ql-clean"></button>
        <span class="separated"></span>

        <!-- 引用链接/图片上传 -->
        <button type="button" class="ql-link"></button>
        <button type="button" class="ql-image"></button>

        <!-- 自定义功能 -->
        <slot name="custom-button">
          <button id="custom-button" style="width: auto;">自定义</button>
        </slot>
      </slot>
    </div>

    <quillEditor
      spellcheck="false"
      @ready="onReady"
      :options="config"
      :value="value"
      @change="value => $emit('change', value)"
      @input="value => $emit('input', value)" />

    <!-- quill-code -->
    <div class="quill-code" v-if="showCode">
      <code class="hljs" v-html="contentCode"></code>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import '@/plugins'
import { quillEditor } from 'vue-quill-editor'
import hljs from 'highlight.js'

export default {
  components: {
    quillEditor
  },

  props: {
    value: String,

    showCode: Boolean,

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
          item: ['26rem', '30rem', '33rem', '36rem', '40rem', '43rem', '46rem', '50rem'],
          default: '33rem'
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
            },
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            },
            imageResize: {
              displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
              modules: ['Resize']
            }
          }
        }
      }
    }
  },

  data () {
    return {
      editor: null
    }
  },

  computed: {
    contentCode () {
      return hljs.highlightAuto(this.value).value
    }
  },

  mounted () {
    const customButton = document.querySelector('#custom-button')
    customButton.addEventListener('click', () => {
      alert('自定义点击功能!')
    })
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
      if (!url) return console.error('请传入 url 参数')
      let length = this.editor.getSelection().index
      this.editor.insertEmbed(length, 'image', url)
      this.editor.setSelection(length + 1)
    }
  }
}
</script>

<style lang="scss">
@import '~styles/quill-editor.scss';
</style>
