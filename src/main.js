import { createApp } from 'vue';
import './assets/css/index.css';
import './assets/css/list.css';
import './assets/css/search.css';
import './assets/css/item.css';
import './assets/css/modal.css';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';
import router from './router/router';
import i18n from './plugins/i18n';
import VueSocialSharing from 'vue-social-sharing';
const app = createApp(App);
app.use(VueLazyload, {
  lazyComponent: true,
  preload: 1,
  attempt: 1,
  observer: true,
  observerOptions: {
    threshold: 0.5,
    transition: 'slide-translate',
  },
});
app.use(VueSocialSharing);
app.use(router);
app.use(i18n);
app.mount('#app');
