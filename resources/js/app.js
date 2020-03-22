import Menu from "./layouts/Menu";

require('./bootstrap');

import Vue from 'vue'
import router from "./routes";
import store from "./store";

import Header from "./components/Header";
import Page from "./components/Page";
import Card from "./components/Card";

Vue.component('menu-component', Menu);
Vue.component('header-component', Header);
Vue.component('page-component', Page);
Vue.component('card-component', Card);

const app = new Vue({
    el: "#app",
    router,
    store
});
