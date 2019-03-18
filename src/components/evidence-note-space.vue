<template>
    <v-card
        tile
        :class="{'is-last-edited': isLastEdited}"
        :height="22"
    >
        <v-card-text class="pa-0 text-xs-center">
            <span
                v-if="memoContent"
                class="mdi"
                :class="memoContent | memoClass(textColorClass)"
            ></span>
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
    filters: {
        memoClass(value, textColorClass) {
            const matches = value.match(/^(.+):(.+)$/);

            return `mdi-${matches[1]} ${textColorClass[matches[2]]}`;
        },
    },
};
</script>
