<template>
    <v-card
        tile
        :class="{'has-outline': isLastEdited}"
        :height="22"
        @click="openMemoDialog"
    >
        <v-card-text class="pa-0 text-xs-center">
            <v-icon
                v-if="memoContent"
                small
                :color="memoContent | memoColor(colorClass)"
            >{{ memoContent | memoIcon }}</v-icon>
            <span v-else>&nbsp;</span>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'evidence-note-space',
    props: {
        item: String,
        column: Number,
    },
    computed: {
        ...mapState({
            memoContent(state) {
                return state.evidences[this.item][this.column];
            },
        }),
        lastEditedItem() {
            return this.$store.getters.lastEdited;
        },
        isLastEdited() {
            return (
                this.lastEditedItem.key === this.item
                    && this.lastEditedItem.column === this.column
            );
        },
    },
    methods: {
        openMemoDialog() {
            const params = {
                item: this.item,
                column: this.column,
            };
            this.$store.commit('focusSpace', params);
        },
    },
};
</script>
