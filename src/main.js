import { createApp } from 'vue';
import './style.css';
import CKEditor from '@ckeditor/ckeditor5-vue';
import { createPinia } from 'pinia';

import router from './router';
import App from './App.vue';

createApp(App).use(CKEditor).use(createPinia()).use(router).mount('#app');
