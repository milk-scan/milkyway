import './style.css'
import './assets/styles/creatoDisplay.scss';

import * as components from './components';
import { App } from 'vue';

export default function install (app: App) {
  for (const key in components) {
    // @ts-expect-error
    app.component(key, components[key])
  }
}
