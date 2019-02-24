import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';
import Vuetify from 'vuetify';
import '@mdi/font/scss/materialdesignicons.scss';
import 'vuetify/dist/vuetify.min.css';
import '@/assets/application.scss';
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
        ...mapState({
            colorClass(state) {
                return state.palette.colorClass;
            },
        }),
        ...mapGetters({
            textColorClass: 'palette/textColorClass',
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
