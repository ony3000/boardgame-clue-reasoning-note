import Vue from 'vue';
import Vuex from 'vuex';
import languageModule from '@/store/language';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        language: languageModule,
    },
});

export default store;
