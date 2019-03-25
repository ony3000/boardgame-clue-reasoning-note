<template>
    <v-dialog v-model="isActive" persistent>
        <v-btn slot="activator" icon>
            <v-icon>mdi-file-outline</v-icon>
        </v-btn>
        <v-card>
            <v-card-title class="headline">새 게임</v-card-title>
            <v-card-text>작성된 모든 메모를 삭제하겠습니까?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="closeAction">취소</v-btn>
                <v-btn color="red darken-1" flat @click="saveAction">삭제</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'newgame-dialog',
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        closeAction() {
            this.isActive = false;
        },
        saveAction() {
            this.$store.commit('eraseAllHistory');
            this.$store.commit('eraseAllMemo');
            this.isActive = false;
        },
    },
};
</script>
