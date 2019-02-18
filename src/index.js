import Vue from 'vue';
import Vuetify from 'vuetify';
import '@mdi/font/scss/materialdesignicons.scss';
import 'vuetify/dist/vuetify.min.css';
import NoteApp from '@/note-app';

Vue.use(Vuetify, {
    iconfont: 'mdi',
});

new Vue({
    el: '#app',
    components: {
        NoteApp,
    },
    render(h) {
        return h(NoteApp);
    },
});
