import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AtComponents from 'at-ui'
import 'at-ui-style'    // Import CSS
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

import {apolloProvider} from "./graphql/apollo";


Vue.use(VueSimpleMarkdown)
Vue.use(AtComponents)
Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
