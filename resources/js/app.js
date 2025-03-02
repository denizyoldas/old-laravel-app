require('./bootstrap');

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('app', require('./vue/app.vue').default);

const app = new Vue({
    el: '#app',
});