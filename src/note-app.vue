<template>
    <v-app>
        <v-toolbar app>
            <newgame-dialog></newgame-dialog>
            <v-spacer></v-spacer>
            <brush-dialog></brush-dialog>
        </v-toolbar>
        <v-content class="accent">
            <memo-dialog></memo-dialog>
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
import BrushDialog from '@/components/brush-dialog';
import MemoDialog from '@/components/memo-dialog';
import DetectiveList from '@/components/detective-list';
import EvidenceNote from '@/components/evidence-note';

export default {
    name: 'note-app',
    components: {
        NewgameDialog,
        BrushDialog,
        MemoDialog,
        DetectiveList,
        EvidenceNote,
    },
};
</script>
