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
            v-for="item in items"
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
                        <evidence-note-space
                            :item="item.key"
                            :column="0"
                        ></evidence-note-space>
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
                        <evidence-note-space
                            :item="item.key"
                            :column="column"
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
