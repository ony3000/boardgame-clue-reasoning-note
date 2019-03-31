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

Vue.filter('memoIcon', (value) => {
    const matches = value.match(/^(.+):(.+)$/);
    const translator = {
        check: 'circle-outline',
    };
    const rawClass = matches[1];
    const translatedClass = (translator[rawClass] ? translator[rawClass] : rawClass);

    return `mdi-${translatedClass}`;
});

Vue.filter('memoColor', (value, colorClass) => {
    const matches = value.match(/^(.+):(.+)$/);

    return colorClass[matches[2]];
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

const vm = new Vue({
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

if ('serviceWorker' in navigator && !['localhost', '127.0.0.1'].includes(location.hostname)) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service worker registered: ', registration);
                registration.addEventListener('updatefound', () => {
                    // If updatefound is fired, it means that there's
                    // a new service worker being installed.
                    const installingWorker = registration.installing;
                    console.log('A new service worker is being installed: ', installingWorker);

                    // You can listen for changes to the installing service worker's
                    // state via installingWorker.onstatechange
                    installingWorker.addEventListener('statechange', (event) => {
                        if (event.target.state === 'activated') {
                            console.log('A new version of application is available.');
                            vm.$store.commit('showUpdateNotification');
                        }
                    });
                });
            })
            .catch((error) => {
                console.log('Service worker registration failed: ', error);
            });
    });
}
else {
    console.log('Service workers are not supported.');
}
