/* eslint-disable */
import '@/style.css';
import App from '@/App.js';

const common = (App) => {
  const app = document.querySelector('#app');

  if (app) {
    app.appendChild(App());
  }
};

addEventListener('load', () => common(App));
