import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
// 导入所有vant组件开始
import Vant from 'vant';
import 'vant/lib/index.css';
// 导入所有vant组件结束
import rem from './assets/js/rem.js' 

const app = createApp(App);
app.use(Vant);
app.use(router);
app.mount('#app');
