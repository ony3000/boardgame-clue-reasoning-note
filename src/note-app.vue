<template>
    <v-app>
        <v-navigation-drawer app></v-navigation-drawer>
        <v-toolbar app></v-toolbar>
        <v-content>
            <v-container fluid grid-list-xs>
                <evidence-note
                    :title="lang.who"
                    :items="characters"
                ></evidence-note>
                <evidence-note
                    :title="lang.what"
                    :items="weapons"
                ></evidence-note>
                <evidence-note
                    :title="lang.where"
                    :items="rooms"
                ></evidence-note>
            </v-container>
        </v-content>
        <v-footer app></v-footer>
    </v-app>
</template>

<script>
import EvidenceNote from '@/components/evidence-note';

export default {
    name: 'note-app',
    components: {
        EvidenceNote,
    },
    computed: {
        characters() {
            return [
                this.lang.green,
                this.lang.mustard,
                this.lang.peacock,
                this.lang.plum,
                this.lang.scarlet,
                this.lang.white,
            ];
        },
        weapons() {
            return [
                this.lang.wrench,
                this.lang.candlestick,
                this.lang.dagger,
                this.lang.pistol,
                this.lang.pipe,
                this.lang.rope,
            ];
        },
        rooms() {
            return [
                this.lang.bathroom,
                this.lang.library,
                this.lang.gameroom,
                this.lang.garage,
                this.lang.bedroom,
                this.lang.livingroom,
                this.lang.kitchen,
                this.lang.courtyard,
                this.lang.diningroom,
            ];
        },
    },
};
</script>
