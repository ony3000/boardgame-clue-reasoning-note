<template>
    <v-dialog v-model="isActive" persistent>
        <v-btn slot="activator" icon>
            <span class="mdi mdi-account mdi-24px"></span>
        </v-btn>
        <v-card>
            <v-card-title class="headline">참가자 설정</v-card-title>
            <v-card-text>
                <div>참가자 구분을 위한 이름, 별명 등을 입력할 수 있습니다.</div>
                <v-container grid-list-xs>
                    <v-layout wrap>
                        <v-flex xs6 v-for="(num, index) in 6" :key="index">
                            <v-text-field></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="closeAction">취소</v-btn>
                <v-btn color="blue darken-1" flat @click="saveAction">저장</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'player-dialog',
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
            this.isActive = false;
        },
    },
};
</script>
