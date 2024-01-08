import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";

// Singleton used as global store
window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  console.log('store', app.store);
})