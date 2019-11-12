<template>
  <div class="home">
    <QuillEditor v-model="editorHtml"/>
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
  }
}
</script>
