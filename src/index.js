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

Vue.filter('memoClass', (value, textColorClass) => {
    const matches = value.match(/^(.+):(.+)$/);
    const translator = {
        check: 'circle-outline',
    };
    const rawClass = matches[1];
    const translatedClass = (translator[rawClass] ? translator[rawClass] : rawClass);

    return `mdi-${translatedClass} ${textColorClass[matches[2]]}`;
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
    mounted() {
        this.$nextTick(() => {
            this.$store.dispatch('setup');
        });
    },
});
