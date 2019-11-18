import Vue from 'vue'
import Quill from 'quill'
import VueQuillEditor from 'vue-quill-editor'
import ImageResize from 'quill-image-resize-module'

const Size = Quill.import('attributors/style/size')
Size.whitelist = ['26rem', '30rem', '33rem', '36rem', '40rem', '43rem', '46rem', '50rem']

Quill.register(Size, true)
Quill.register('modules/imageResize', ImageResize)

const icons = Quill.import('ui/icons')

icons.header[1] = ''
icons.header[2] = ''

Vue.use(VueQuillEditor)
