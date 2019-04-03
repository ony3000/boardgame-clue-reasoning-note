<template>
    <v-app>
        <v-snackbar v-model="updateNotification" top multi-line :timeout="5000">
            <span>새로운 버전을 사용할 수 있습니다.</span>
            <v-btn color="accent" @click="reloadApp">업데이트</v-btn>
        </v-snackbar>
        <v-toolbar app>
            <newgame-dialog></newgame-dialog>
            <v-spacer></v-spacer>
            <player-dialog></player-dialog>
        </v-toolbar>
        <v-content class="accent">
            <memo-dialog></memo-dialog>
            <v-container grid-list-xs>
                <detective-list></detective-list>
                <evidence-note
                    type="characters"
                    :title="lang.who"
                ></evidence-note>
                <evidence-note
                    type="weapons"
                    :title="lang.what"
                ></evidence-note>
                <evidence-note
                    type="rooms"
                    :title="lang.where"
                ></evidence-note>
            </v-container>
        </v-content>
        <v-footer app class="pa-3">
            <v-spacer></v-spacer>
            <div>v1.0.0-beta.2</div>
        </v-footer>
    </v-app>
</template>

<script>
import NewgameDialog from '@/components/newgame-dialog';
import PlayerDialog from '@/components/player-dialog';
import MemoDialog from '@/components/memo-dialog';
import DetectiveList from '@/components/detective-list';
import EvidenceNote from '@/components/evidence-note';

export default {
    name: 'note-app',
    components: {
        NewgameDialog,
        PlayerDialog,
        MemoDialog,
        DetectiveList,
        EvidenceNote,
    },
    computed: {
        updateNotification: {
            get() {
                return this.$store.state.updateNotification;
            },
            set(newValue) {
                if (!newValue) {
                    this.$store.commit('closeUpdateNotification');
                }
            },
        },
    },
    methods: {
        reloadApp() {
            location.reload();
        },
    },
};
</script>
