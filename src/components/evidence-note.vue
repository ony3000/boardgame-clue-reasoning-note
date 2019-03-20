<template>
    <div class="mb-2">
        <v-layout row>
            <v-flex xs3>
                <v-card tile :height="22">
                    <v-card-text class="px-1 py-0 text-truncate font-weight-bold">
                        <span>{{ title }}</span>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout
            row
            v-for="item in items"
            :key="item.key"
        >
            <v-flex xs3>
                <v-card tile :height="22">
                    <v-card-text class="px-1 py-0 text-truncate">
                        <span>{{ item.title }}</span>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-layout row>
                    <v-flex
                        v-for="(num, index) in 7"
                        :key="`${item.key}-${index}`"
                        class="is-evenly-spaced"
                    >
                        <evidence-note-space
                            :item="item.key"
                            :column="index"
                        ></evidence-note-space>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import EvidenceNoteSpace from '@/components/evidence-note-space';

export default {
    name: 'evidence-note',
    props: {
        type: String,
        title: String,
    },
    components: {
        EvidenceNoteSpace,
    },
    computed: {
        items() {
            return this.$store.getters[this.type];
        },
    },
};
</script>
