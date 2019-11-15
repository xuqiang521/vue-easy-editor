<template>
  <div class="home">
    <QuillEditor v-model="editorHtml" @image-upload="handleImageUpload" />
  </div>
</template>

<script>
import QuillEditor from '@/components/QuillEditor'

export default {
  name: 'home',

  components: {
    QuillEditor
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
