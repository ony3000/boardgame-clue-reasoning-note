<template>
    <v-dialog v-model="isActive" persistent max-width="350">
        <v-btn slot="activator" icon>
            <v-icon>mdi-account-multiple</v-icon>
        </v-btn>
        <v-card>
            <v-card-title class="headline">참가자 설정</v-card-title>
            <v-card-text>
                <div>참가자 구분을 위한 이름, 별명 등을 입력할 수 있습니다.</div>
                <v-container grid-list-xs>
                    <v-layout wrap>
                        <v-flex xs6 v-for="(num, index) in 6" :key="index">
                            <v-text-field
                                v-model="players[index]"
                                solo
                                :label="String.fromCharCode('A'.codePointAt(0) + index)"
                                clearable
                            ></v-text-field>
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
import { mapState } from 'vuex';
import storage from '@/middleware/web-storage';

export default {
    name: 'player-dialog',
    data() {
        return {
            isActive: false,
            players: Array(6).fill(''),
        };
    },
    computed: {
        ...mapState([
            'usernames',
        ]),
    },
    mounted() {
        this.$nextTick(() => {
            if (storage) {
                let usernames = (storage.getItem('usernames') || JSON.stringify(Array(6).fill('')));

                try {
                    usernames = JSON.parse(usernames);
                }
                catch (err) {
                    usernames = Array(6).fill('');
                }
                usernames.forEach((value, index) => {
                    this.players[index] = value;
                });
            }
        });
    },
    methods: {
        closeAction() {
            this.usernames.forEach((value, index) => {
                this.players[index] = value;
            });
            this.isActive = false;
        },
        saveAction() {
            this.$store.commit('savePlayerSetting', this.players);
            this.isActive = false;
        },
    },
};
</script>
