import Vue from 'vue';
import Vuex from 'vuex';
import storage from '@/middleware/web-storage';
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
            if (storage) {
                storage.setItem('brushType', state.brushType);
                storage.setItem('brushColor', state.brushColor);
            }
        },
        writeMemo(state, payload) {
            const { key, column } = payload;

            state.evidences[key][column] = `${state.brushType}:${state.brushColor}`;
            state.evidences[key] = [...state.evidences[key]];
            if (storage) {
                storage.setItem(`evidences:${key}`, JSON.stringify(state.evidences[key]));
            }
        },
        eraseMemo(state, payload) {
            const { key, column } = payload;

            state.evidences[key][column] = null;
            state.evidences[key] = [...state.evidences[key]];
            if (storage) {
                storage.setItem(`evidences:${key}`, JSON.stringify(state.evidences[key]));
            }
        },
        eraseAllMemo(state) {
            Object.keys(state.evidences).forEach((key) => {
                state.evidences[key] = Array(7).fill(null);
                if (storage) {
                    storage.setItem(`evidences:${key}`, JSON.stringify(state.evidences[key]));
                }
            });
        },
    },
    actions: {
        setup({ state }) {
            if (storage) {
                state.brushType = (storage.getItem('brushType') || state.brushType);
                state.brushColor = (storage.getItem('brushColor') || state.brushColor);

                Object.keys(state.evidences).forEach((key) => {
                    let evidences = (storage.getItem(`evidences:${key}`) || JSON.stringify(Array(7).fill(null)));

                    try {
                        evidences = JSON.parse(evidences);
                    }
                    catch (err) {
                        evidences = Array(7).fill(null);
                    }
                    state.evidences[key] = evidences;
                });
            }
        },
    },
    modules: {
        language: languageModule,
        palette: paletteModule,
    },
});

export default store;
