import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


import perfil from './modules/perfil'

const store = new Vuex.Store({
    strict: true,
    modules: {
        perfil,
    }
});

export default store;

