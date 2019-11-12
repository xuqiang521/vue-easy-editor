import Vue from 'vue'
import Quill from 'quill'
import VueQuillEditor from 'vue-quill-editor'
import ImageResize from 'quill-image-resize-module'

Quill.register('modules/imageResize', ImageResize)

var icons = Quill.import('ui/icons')
icons['code-block'] = '<svg t="1563346920181" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M723.2 361.130667l60.330667-60.330667 211.2 211.2-211.2 211.2-60.330667-60.330667L874.026667 512 723.2 361.130667z m-422.4 0L149.973333 512l150.826667 150.869333-60.330667 60.330667L29.269333 512l211.2-211.2L300.8 361.130667z" p-id="6304"></path></svg>'
icons.list.ordered = '<svg t="1563346814556" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M341.333333 170.666667h554.666667v85.333333H341.333333V170.666667zM213.333333 128v128h42.666667v42.666667H128V256h42.666667V170.666667H128V128h85.333333zM128 597.333333v-106.666666h85.333333V469.333333H128v-42.666666h128v106.666666H170.666667v21.333334h85.333333v42.666666H128z m85.333333 234.666667H128v-42.666667h85.333333V768H128v-42.666667h128v170.666667H128v-42.666667h85.333333v-21.333333zM341.333333 469.333333h554.666667v85.333334H341.333333v-85.333334z m0 298.666667h554.666667v85.333333H341.333333v-85.333333z" p-id="6179"></path></svg>'
icons.list.bullet = '<svg t="1563346803701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M341.333333 170.666667h554.666667v85.333333H341.333333V170.666667zM192 277.333333a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m0 298.666667a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m0 294.4a64 64 0 1 1 0-128 64 64 0 0 1 0 128zM341.333333 469.333333h554.666667v85.333334H341.333333v-85.333334z m0 298.666667h554.666667v85.333333H341.333333v-85.333333z" p-id="6054"></path></svg>'
icons.underline = '<svg t="1563346791207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M341.333333 128v384a170.666667 170.666667 0 1 0 341.333334 0V128h85.333333v384a256 256 0 1 1-512 0V128h85.333333zM170.666667 853.333333h682.666666v85.333334H170.666667v-85.333334z" p-id="5929"></path></svg>'
icons.strike = '<svg t="1563346767750" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M731.904 597.333333c9.813333 22.016 14.762667 46.506667 14.762667 73.386667 0 57.258667-22.357333 102.058667-67.029334 134.272C634.88 837.205333 573.141333 853.333333 494.336 853.333333c-69.973333 0-139.221333-16.256-207.786667-48.810666V708.266667c64.853333 37.418667 131.2 56.149333 199.082667 56.149333 108.842667 0 163.413333-31.232 163.797333-93.738667a94.293333 94.293333 0 0 0-27.648-68.394666l-5.12-4.992H128v-85.333334h768v85.333334h-164.096z m-173.994667-128H325.504a174.336 174.336 0 0 1-20.522667-22.272C286.549333 423.253333 277.333333 394.496 277.333333 360.618667c0-52.736 19.882667-97.578667 59.605334-134.528C376.746667 189.141333 438.229333 170.666667 521.472 170.666667c62.762667 0 122.837333 13.994667 180.138667 41.984v91.818666c-51.2-29.312-107.306667-43.946667-168.362667-43.946666-105.813333 0-158.677333 33.365333-158.677333 100.096 0 17.92 9.301333 33.536 27.904 46.890666 18.602667 13.354667 41.557333 23.978667 68.821333 32 26.453333 7.68 55.338667 17.664 86.613333 29.824z" p-id="5804"></path></svg>'
icons.blockquote = '<svg t="1563346722995" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M828.458667 284.970667C872.405333 331.648 896 384 896 468.864c0 149.333333-104.832 283.178667-257.28 349.354667l-38.101333-58.794667c142.293333-76.970667 170.112-176.853333 181.205333-239.829333-22.912 11.861333-52.906667 16-82.304 13.269333-76.970667-7.125333-137.642667-70.314667-137.642667-148.864a149.333333 149.333333 0 0 1 149.333334-149.333333c45.781333 0 89.557333 20.906667 117.248 50.304z m-426.666667 0C445.738667 331.648 469.333333 384 469.333333 468.864c0 149.333333-104.832 283.178667-257.28 349.354667l-38.101333-58.794667c142.293333-76.970667 170.112-176.853333 181.205333-239.829333-22.912 11.861333-52.906667 16-82.304 13.269333C195.882667 525.738667 135.253333 462.549333 135.253333 384a149.333333 149.333333 0 0 1 149.333334-149.333333c45.781333 0 89.557333 20.906667 117.248 50.304z" p-id="5679"></path></svg>'
icons.image = '<svg t="1563342366375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M866.16213313 79.46666656H157.89546688A128.80000031 128.80000031 0 0 0 32.0288 210.93333312v602.13333375a128.80000031 128.80000031 0 0 0 125.86666688 131.46666657h708.26666625A128.80000031 128.80000031 0 0 0 992.0288 813.06666688V210.93333312a128.80000031 128.80000031 0 0 0-125.86666688-131.46666656z m-708.26666626 79.99999969h708.26666626A49.06666688 49.06666688 0 0 1 912.02880031 210.93333312v385.06666688l-94.13333344-94.13333344a125.86666688 125.86666688 0 0 0-177.86666718 0l-172.8 172.53333375-77.33333344-77.60000062a125.86666688 125.86666688 0 0 0-177.86666625 0L112.02879969 696.8V210.93333312a49.06666688 49.06666688 0 0 1 45.86666718-51.46666687zM112.02879969 813.06666688v-3.20000063l156.53333343-156.5333325a45.6 45.6 0 0 1 64.53333375 0l77.59999969 77.59999969-133.33333312 133.33333312H157.89546688A49.06666688 49.06666688 0 0 1 112.02879969 813.06666688z m754.13333343 51.46666687H390.42879969l306.13333406-306.13333406a45.86666625 45.86666625 0 0 1 64.8 0L912.02880031 708.8v103.99999969a49.06666688 49.06666688 0 0 1-45.86666719 51.73333406z" p-id="2209"></path><path d="M309.89546656 462.93333312A111.46666688 111.46666688 0 1 0 198.42879969 351.99999969a111.46666688 111.46666688 0 0 0 111.46666687 110.93333344z m0-142.93333312A31.46666625 31.46666625 0 1 1 278.42880031 351.99999969a31.2 31.2 0 0 1 31.46666625-31.99999969z" p-id="2210"></path></svg>'
icons.link = '<svg t="1563346648353" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M783.530667 662.869333L723.2 602.453333l60.330667-60.330666a213.333333 213.333333 0 1 0-301.696-301.696L421.504 300.8 361.130667 240.469333 421.546667 180.138667a298.666667 298.666667 0 0 1 422.4 422.4l-60.373334 60.330666z m-120.661334 120.661334l-60.373333 60.330666a298.666667 298.666667 0 0 1-422.4-422.4l60.373333-60.330666L300.8 421.546667l-60.330667 60.330666a213.333333 213.333333 0 1 0 301.696 301.696l60.330667-60.330666 60.373333 60.330666z m-30.208-452.565334l60.373334 60.373334-301.696 301.653333-60.373334-60.330667 301.696-301.653333z" p-id="5554"></path></svg>'
icons.clean = '<svg t="1563346630695" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M539.776 600.106667L495.146667 853.333333H408.490667l57.6-326.869333-316.16-316.16L210.346667 149.973333 874.026667 813.653333l-60.330667 60.330667-273.92-273.92z m-37.461333-278.826667l11.52-65.28h-76.8l-85.333334-85.333333H853.333333v85.333333h-252.885333L576 394.965333 502.314667 321.28z" p-id="5429"></path></svg>'
icons.align[''] = '<svg t="1563346620438" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M128 170.666667h768v85.333333H128V170.666667z m0 640h597.333333v85.333333H128v-85.333333z m0-213.333334h768v85.333334H128v-85.333334z m0-213.333333h597.333333v85.333333H128V384z" p-id="5304"></path></svg>'
icons.align['center'] = '<svg t="1563346613040" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M128 170.666667h768v85.333333H128V170.666667z m85.333333 640h597.333334v85.333333H213.333333v-85.333333z m-85.333333-213.333334h768v85.333334H128v-85.333334z m85.333333-213.333333h597.333334v85.333333H213.333333V384z" p-id="5179"></path></svg>'
icons.align['justify'] = '<svg t="1563346583384" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M128 170.666667h768v85.333333H128V170.666667z m0 640h768v85.333333H128v-85.333333z m0-213.333334h768v85.333334H128v-85.333334z m0-213.333333h768v85.333333H128V384z" p-id="4929"></path></svg>'
icons.align['right'] = '<svg t="1563346598771" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M128 170.666667h768v85.333333H128V170.666667z m170.666667 640h597.333333v85.333333H298.666667v-85.333333z m-170.666667-213.333334h768v85.333334H128v-85.333334z m170.666667-213.333333h597.333333v85.333333H298.666667V384z" p-id="5054"></path></svg>'
icons.header[1] = '<svg t="1563345347449" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M725.333333 469.333333V170.666667h85.333334v725.333333h-85.333334v-341.333333H298.666667v341.333333H213.333333V170.666667h85.333334v298.666666z" p-id="4429"></path></svg>'
icons.header[2] = '<svg t="1563345347449" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M725.333333 469.333333V170.666667h85.333334v725.333333h-85.333334v-341.333333H298.666667v341.333333H213.333333V170.666667h85.333334v298.666666z" p-id="4429"></path></svg>'
icons.bold = '<svg t="1563346534483" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M341.333333 469.333333h192a106.666667 106.666667 0 1 0 0-213.333333H341.333333v213.333333z m426.666667 192a192 192 0 0 1-192 192H256V170.666667h277.333333a192 192 0 0 1 138.922667 324.522666A191.914667 191.914667 0 0 1 768 661.333333zM341.333333 554.666667v213.333333h234.666667a106.666667 106.666667 0 1 0 0-213.333333H341.333333z" p-id="4679"></path></svg>'
icons.italic = '<svg t="1563346560198" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M640 853.333333H298.666667v-85.333333h124.885333l90.282667-512H384V170.666667h341.333333v85.333333h-124.885333l-90.282667 512H640z" p-id="4804"></path></svg>'

Vue.use(VueQuillEditor)
