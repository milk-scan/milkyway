import './style.css'
import './assets/styles/creatoDisplay.scss';

import PrimeVue from 'primevue/config';
import Wind from './presets/wind';

import * as components from './components';
import { App } from 'vue';

export default function install (app: App) {
  app.use(PrimeVue, {
    unstyled: true,
    pt: Wind
});
  for (const key in components) {
    // @ts-expect-error
    app.component(key, components[key])
  }
}
