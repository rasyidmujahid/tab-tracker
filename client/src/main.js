// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuetify from 'vuetify'

// https://vuetifyjs.com/en/getting-started/quick-start/#bootstrapping-the-vuetify-object
import vuetify from '@/plugins/vuetify' // path to vuetify export
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

// Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  components: { App },
  template: '<App/>',
  vuetify
}).$mount('#app')
