import Vue from 'vue'
import { ToastPlugin, ModalPlugin, BootstrapVue } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import DataTable from 'laravel-vue-datatable'
import moment from 'moment'
import i18n from '@/libs/i18n'
import VueTheMask from 'vue-the-mask'
import Loading from 'vue-loading-overlay'
import VueConfirmDialog from 'vue-confirm-dialog'
import Vue2Filters from 'vue2-filters'
import { VueMaskFilter } from 'v-mask'
import { Datetime } from 'vue-datetime'
import Multiselect from 'vue-multiselect'

import money from 'v-money'
import VueGoogleCharts from 'vue-google-charts'
import router from './router'
import store from './store'
import App from './App.vue'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
// Import component
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

// Global Components
import './global-components'
// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'
// Axios Mock Adapter
import '@/@fake-db/db'

Vue.use(VueGoogleCharts)

Vue.use(require('vue-moment'))

// register globally
Vue.component('multiselect', Multiselect)

Vue.use(Datetime)

Vue.use(BootstrapVue)

Vue.filter('VMask', VueMaskFilter)
Vue.use(VueTheMask)
Vue.use(Vue2Filters)

Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
// Init plugin
Vue.use(Loading, {
  color: '#901300',
  loader: 'bars',
  backgroundColor: '#000C1A',
  opacity: 0.8,
})

Vue.use(VueTheMask)

Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

moment.locale('pt-br')
// eslint-disable-next-line consistent-return
Vue.filter('DataBr', valor => {
  if (valor) {
    return moment(valor).format('DD/MM/YY HH:mm')
  }
})

// register directive v-money and component <money>
Vue.use(money, { precision: 2 })

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)
Vue.use(DataTable)

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require('@core/assets/fonts/feather/iconfont.css') // For form-wizard

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')
require('vue-multiselect/dist/vue-multiselect.min.css') // For form-wizard

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
