import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

library.add(faBook);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = false;

app.use(router);
app.use(store);

app.mount('#app');

// recreate https://yipanthony.github.io/betterToDoList/
