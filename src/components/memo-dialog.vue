<template>
    <v-dialog v-model="isActive" persistent>
        <v-card>
            <v-card-title class="headline">노트 편집</v-card-title>
            <v-card-text>
                <v-container fluid grid-list-xs class="px-0 pt-0">
                    <v-layout row>
                        <v-flex xs2 offset-xs4>
                            <v-card tile :height="22">
                                <v-card-text class="pa-0 text-xs-center">
                                    <span>{{ isActive ? String.fromCharCode('A'.codePointAt(0) + focusedSpace.column) : '' }}</span>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs4>
                            <v-card tile :height="22">
                                <v-card-text class="px-1 py-0 text-truncate">
                                    <span>{{ isActive ? lang[focusedSpace.item] : '' }}</span>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs2>
                            <v-card tile :height="22">
                                <v-card-text class="pa-0 text-xs-center">
                                    <span
                                        v-if="memoContent"
                                        class="mdi"
                                        :class="memoContent | memoClass(textColorClass)"
                                    ></span>
                                    <span v-else>&nbsp;</span>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex>
                            <span>&nbsp;</span>
                            <span class="mdi mdi-arrow-left"></span>
                            <span>현재 메모</span>
                        </v-flex>
                    </v-layout>
                </v-container>
                <div>위 메모를 다음 중 하나로 교체합니다.</div>
                <v-container fluid grid-list-xs class="px-0 pb-0">
                    <v-layout row v-for="type in memoTypes" :key="type">
                        <v-flex v-for="color in memoColors" :key="color">
                            <v-card
                                tile
                                :class="{'has-outline': selectedMemo === `${type}:${color}`}"
                                :height="22"
                                @click="selectMemo(type, color)"
                            >
                                <v-card-text class="pa-0 text-xs-center">
                                    <span
                                        class="mdi"
                                        :class="[`mdi-${type}`, textColorClass[color]]"
                                    ></span>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout row class="mt-2">
                        <v-flex xs6 offset-xs3>
                            <v-card
                                tile
                                :class="{'has-outline': selectedMemo === 'eraser'}"
                                :height="22"
                                @click="selectMemo('eraser')"
                            >
                                <v-card-text class="pa-0 text-xs-center">
                                    <span class="mdi mdi-eraser"></span>
                                    <span>메모 삭제</span>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="closeAction">취소</v-btn>
                <v-btn color="blue darken-1" flat :disabled="!selectedMemo" @click="saveAction">저장</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'memo-dialog',
    data() {
        return {
            memoTypes: [
                'circle-outline',
                'close',
                'help',
            ],
            memoColors: [
                'black',
                'green',
                'mustard',
                'peacock',
                'plum',
                'scarlet',
                'white',
            ],
            selectedMemo: null,
        };
    },
    computed: {
        ...mapState([
            'focusedSpace',
        ]),
        ...mapState({
            memoContent(state) {
                return (
                    this.isActive
                        ? state.evidences[this.focusedSpace.item][this.focusedSpace.column]
                        : null
                );
            },
        }),
        isActive() {
            return (this.focusedSpace !== null);
        },
    },
    methods: {
        selectMemo(...args) {
            this.selectedMemo = args.join(':');
        },
        closeAction() {
            this.selectedMemo = null;
            this.$store.commit('clearFocus');
        },
        saveAction() {
            if (this.selectedMemo) {
                const params = {
                    key: this.focusedSpace.item,
                    column: this.focusedSpace.column,
                };

                if (this.selectedMemo === 'eraser') {
                    params.newMemo = null;
                }
                else {
                    params.newMemo = this.selectedMemo;
                }
                this.$store.dispatch('editMemo', params);
            }

            this.selectedMemo = null;
            this.$store.commit('clearFocus');
        },
    },
};
</script>
