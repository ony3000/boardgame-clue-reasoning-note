<template>
    <div class="mb-2">
        <v-layout row>
            <v-flex xs4>
                <v-layout row>
                    <v-flex xs8>
                        <v-card tile :height="22">
                            <v-card-text class="px-1 py-0 text-truncate font-weight-bold">
                                <span>{{ title }}</span>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-layout
            row
            v-for="(item, index) in items"
            :key="item.key"
        >
            <v-flex xs4>
                <v-layout row>
                    <v-flex xs8>
                        <v-card tile :height="22">
                            <v-card-text class="px-1 py-0 text-truncate">
                                <span>{{ item.title }}</span>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs4>
                        <v-card tile :height="22" @click="editMemo(index, 0)">
                            <v-card-text class="pa-0 text-xs-center">
                                <span
                                    v-if="item.evidences[0]"
                                    class="mdi"
                                    :class="item.evidences[0] | memoClass(textColorClass)"
                                ></span>
                                <span v-else>&nbsp;</span>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs8>
                <v-layout row>
                    <v-flex
                        xs2
                        v-for="column in 6"
                        :key="`${item.key}-${column}`"
                    >
                        <v-card tile :height="22" @click="editMemo(index, column)">
                            <v-card-text class="pa-0 text-xs-center">
                                <span
                                    v-if="item.evidences[column]"
                                    class="mdi"
                                    :class="item.evidences[column] | memoClass(textColorClass)"
                                ></span>
                                <span v-else>&nbsp;</span>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'evidence-note',
    props: {
        type: String,
        title: String,
    },
    computed: {
        ...mapState([
            'brushType',
        ]),
        items() {
            return this.$store.getters[this.type];
        },
    },
    filters: {
        memoClass(value, textColorClass) {
            const matches = value.match(/^(.+):(.+)$/);

            return `mdi-${matches[1]} ${textColorClass[matches[2]]}`;
        },
    },
    methods: {
        editMemo(index, column) {
            const memo = this.items[index].evidences[column];
            const params = {
                key: this.items[index].key,
                column,
            };

            if (this.brushType === 'eraser') {
                this.$store.commit('eraseMemo', params);
            }
            else {
                this.$store.commit('writeMemo', params);
            }
        },
    },
};
</script>
