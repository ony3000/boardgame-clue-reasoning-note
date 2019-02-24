import Vue from 'vue';
import Vuex from 'vuex';
import languageModule from '@/store/language';
import paletteModule from '@/store/palette';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        brushType: 'check',
        brushColor: 'black',
        evidences: {
            green: Array(7).fill(null),
            mustard: Array(7).fill(null),
            peacock: Array(7).fill(null),
            plum: Array(7).fill(null),
            scarlet: Array(7).fill(null),
            white: Array(7).fill(null),
            wrench: Array(7).fill(null),
            candlestick: Array(7).fill(null),
            dagger: Array(7).fill(null),
            pistol: Array(7).fill(null),
            pipe: Array(7).fill(null),
            rope: Array(7).fill(null),
            bathroom: Array(7).fill(null),
            library: Array(7).fill(null),
            gameroom: Array(7).fill(null),
            garage: Array(7).fill(null),
            bedroom: Array(7).fill(null),
            livingroom: Array(7).fill(null),
            kitchen: Array(7).fill(null),
            courtyard: Array(7).fill(null),
            diningroom: Array(7).fill(null),
        },
    },
    getters: {
        characters(state) {
            return [
                'green',
                'mustard',
                'peacock',
                'plum',
                'scarlet',
                'white',
            ].map((key) => {
                return {
                    key,
                    title: state.language.ko[key],
                    evidences: state.evidences[key],
                };
            });
        },
        weapons(state) {
            return [
                'wrench',
                'candlestick',
                'dagger',
                'pistol',
                'pipe',
                'rope',
            ].map((key) => {
                return {
                    key,
                    title: state.language.ko[key],
                    evidences: state.evidences[key],
                };
            });
        },
        rooms(state) {
            return [
                'bathroom',
                'library',
                'gameroom',
                'garage',
                'bedroom',
                'livingroom',
                'kitchen',
                'courtyard',
                'diningroom',
            ].map((key) => {
                return {
                    key,
                    title: state.language.ko[key],
                    evidences: state.evidences[key],
                };
            });
        },
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
