import Vue from 'vue';
import { mapState } from 'vuex';
import Vuetify from 'vuetify';
import '@mdi/font/scss/materialdesignicons.scss';
import 'vuetify/dist/vuetify.min.css';
import NoteApp from '@/note-app';
import store from '@/store';

Vue.use(Vuetify, {
    iconfont: 'mdi',
});

Vue.mixin({
    computed: {
        ...mapState({
            lang(state) {
                return state.language.ko;
            },
        }),
    },
});

new Vue({
    el: '#app',
    store,
    components: {
        NoteApp,
    },
    render(h) {
        return h(NoteApp);
    },
});
