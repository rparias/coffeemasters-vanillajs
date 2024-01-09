import Store from "./services/Store.js";
import Router from "./services/Router.js";
import { loadData } from "./services/Menu.js";

// Singleton used as global store
window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  app.router.init();
  console.log('store', app.store);
})