<template>
  <div class="home">
    <vue-easy-editor
      v-model="editorHtml"
      :sizes="sizes"
      @image-upload="handleImageUpload" />
  </div>
</template>

<script>
import { VueEasyEditor } from 'packages/index'
export default {
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
  },

  methods: {
    handleImageUpload (files, editor, done) {
      console.log(files, editor, done)
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
