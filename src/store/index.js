import Vue from 'vue';
import Vuex from 'vuex';
import storage from '@/middleware/web-storage';
import languageModule from '@/store/language';
import paletteModule from '@/store/palette';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
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
        histories: [],
        usernames: Array(6).fill(''),
        focusedSpace: null,
        updateNotification: false,
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
        lastEdited(state) {
            return (state.histories.slice(-1)[0] || {});
        },
    },
    mutations: {
        savePlayerSetting(state, payload) {
            state.usernames = payload.slice();
            if (storage) {
                storage.setItem('usernames', JSON.stringify(state.usernames));
            }
        },
        editMemo(state, payload) {
            const { key, column, newMemo } = payload;

            state.evidences[key][column] = newMemo;
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
        writeHistory(state, payload) {
            const { key, column } = payload;
            const history = {
                ...payload,
                oldMemo: state.evidences[key][column],
            };

            state.histories.push(history);
            if (storage) {
                storage.setItem('histories', JSON.stringify(state.histories));
            }
        },
        eraseAllHistory(state) {
            state.histories = [];
            if (storage) {
                storage.setItem('histories', JSON.stringify(state.histories));
            }
        },
        focusSpace(state, payload) {
            state.focusedSpace = payload;
        },
        clearFocus(state) {
            state.focusedSpace = null;
        },
        showUpdateNotification(state) {
            state.updateNotification = true;
        },
        closeUpdateNotification(state) {
            state.updateNotification = false;
        },
    },
    actions: {
        setup({ state }) {
            if (storage) {
                let histories = (storage.getItem('histories') || JSON.stringify([]));

                try {
                    histories = JSON.parse(histories);
                }
                catch (err) {
                    histories = [];
                }
                state.histories = histories;

                let usernames = (storage.getItem('usernames') || JSON.stringify(Array(6).fill('')));

                try {
                    usernames = JSON.parse(usernames);
                }
                catch (err) {
                    usernames = Array(6).fill('');
                }
                state.usernames = usernames;

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
        editMemo({ commit }, payload) {
            commit('writeHistory', payload);
            commit('editMemo', payload);
        },
    },
    modules: {
        language: languageModule,
        palette: paletteModule,
    },
});

export default store;
