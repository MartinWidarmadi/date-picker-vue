import { createApp } from 'vue';
import './style.css';
// @ts-ignore
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faCalendar as farCalendar } from '@fortawesome/free-regular-svg-icons';
import { faCalendar as fasCalendar } from '@fortawesome/free-solid-svg-icons';

library.add(farCalendar, fasCalendar);

createApp(App).use(VCalendar, {}).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
