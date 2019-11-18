<template>
  <div class="home">
    <VueEasyEditor v-model="editorHtml" @image-upload="handleImageUpload" />
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
