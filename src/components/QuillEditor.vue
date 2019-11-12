<template>
  <div class="editor">
    <div id="ql-toolbar" class="ql-toolbar ql-snow">
      <button type="button" class="ql-header" value="2"></button>
      <button type="button" class="ql-bold"></button>
      <button type="button" class="ql-italic"></button>
      <button type="button" class="ql-underline"></button>
      <span class="separated"></span>
      <button type="button" class="ql-strike"></button>
      <button type="button" class="ql-code-block"></button>
      <button type="button" class="ql-blockquote"></button>
      <span class="separated"></span>
      <button type="button" class="ql-list" value="ordered"></button>
      <button type="button" class="ql-list" value="bullet"></button>
      <span class="separated"></span>
      <select class="ql-align">
        <option selected="selected"></option>
        <option value="center"></option>
        <option value="right"></option>
        <option value="justify"></option>
      </select>
      <button type="button" class="ql-clean"></button>
      <span class="separated"></span>
      <button type="button" class="ql-link"></button>
      <button type="button" class="ql-image"></button>
    </div>
    <quillEditor
      spellcheck="false"
      @ready="onReady"
      :options="config"
      :value="value"
      @input="value => $emit('input', value)" />
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
// import { upload } from 'api/systems'

export default {
  props: ['value'],
  components: {
    quillEditor
  },
  data () {
    return {
      editor: null,
      config: {
        placeholder: '写点什么...',
        scrollingContainer: '.el-main',
        modules: {
          toolbar: '#ql-toolbar',
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
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
  },
  methods: {
    onReady (editor) {
      this.editor = editor
      var toolbar = this.editor.getModule('toolbar')
      toolbar.addHandler('image', this.imageHandle)
    },
    imageHandle () {
      let input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('multiple', 'multiple')
      input.click()
      input.onchange = () => {
        this.$message.info('图片上传中，请耐心等待')
        for (let i = 0; i < input.files.length; i++) {
          let formData = new FormData()
          formData.append('file', input.files[i])
          console.log(formData)
          // upload(formData)
          //   .then(({ data }) => {
          //     let length = this.editor.getSelection().index
          //     this.editor.insertEmbed(length, 'image', data.url)
          //     this.editor.setSelection(length + 1)
          //   })
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~styles/var.scss';
.editor {
  min-height: 300px;
  margin: 50px;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  // border: 1px solid #f0f3f9;
  .quill-editor {
    .ql-container {
      border: none;
    }
    .ql-editor {
      @include rich-text();
    }
    .ql-tooltip + div {
      border: none !important;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3) !important;
      div {
        opacity: 1 !important;
        height: 12px !important;
        width: 12px !important;
        border-radius: 9px !important;
        background: #2b50ed !important;
        border: 2px solid #fff !important;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45) !important;
      }
    }
    .ql-editor.ql-blank::before {
      color: #ccd0d3;
      font-style: inherit;
    }
  }
  .ql-toolbar {
    border: none;
    display: flex;
    align-items: center;
    button,
    span {
      fill: #a6aab5;
      &:hover {
        opacity: 1;
        fill: #000000;
      }
    }
    .ql-active {
      fill: #000000;
    }
    button {
      width: 30px;
      height: 24px;
      svg {
        width: 100%;
      }
    }
    .separated {
      width: 1px;
      height: 16px;
      margin: 0 8px;
      background: #d6dfe8;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
