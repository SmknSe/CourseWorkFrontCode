import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas,faHeart,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { LMap, LTileLayer, LMarker } from 'vue3-leaflet';
import 'leaflet/dist/leaflet.css';


const app = createApp(App);
app.use(router);
app.mount('#app');
library.add(fas,faHeart,far,faEnvelope);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);