import Menu from "./layouts/Menu";

require('./bootstrap');

import Vue from 'vue'
import router from "./routes";
import store from "./store";

import Header from "./components/Header";
import Page from "./components/Page";

Vue.component('menu-component', Menu);
Vue.component('header-component', Header);
Vue.component('page-component', Page);

const app = new Vue({
    el: "#app",
    router,
    store
});
