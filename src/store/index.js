import Vue from 'vue';
import Vuex from 'vuex';
import languageModule from '@/store/language';
import paletteModule from '@/store/palette';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        brushType: 'check',
        brushColor: 'black',
    },
    getters: {
    },
    mutations: {
        saveBrushSetting(state, payload) {
            state.brushType = payload.memoType;
            state.brushColor = payload.memoColor;
        },
    },
    actions: {
    },
    modules: {
        language: languageModule,
        palette: paletteModule,
    },
});

export default store;
