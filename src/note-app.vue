<template>
    <v-app>
        <!-- <v-navigation-drawer app></v-navigation-drawer> -->
        <v-toolbar app>
            <newgame-dialog></newgame-dialog>
            <v-spacer></v-spacer>
            <!-- <player-dialog></player-dialog> -->
            <brush-dialog></brush-dialog>
        </v-toolbar>
        <v-content class="accent">
            <v-container fluid grid-list-xs>
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
            <div>v1.0.0-beta.1</div>
        </v-footer>
    </v-app>
</template>

<script>
import NewgameDialog from '@/components/newgame-dialog';
// import PlayerDialog from '@/components/player-dialog';
import BrushDialog from '@/components/brush-dialog';
import DetectiveList from '@/components/detective-list';
import EvidenceNote from '@/components/evidence-note';

export default {
    name: 'note-app',
    components: {
        NewgameDialog,
        // PlayerDialog,
        BrushDialog,
        DetectiveList,
        EvidenceNote,
    },
};
</script>
