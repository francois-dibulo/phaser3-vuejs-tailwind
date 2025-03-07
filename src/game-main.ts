import { createApp } from 'vue'
import './assets/main.css'
import router from './router/game';
import GameView from './views/Game/GameStandaloneView.vue'

const app = createApp(GameView);
app.use(router);

app.mount('#app');
