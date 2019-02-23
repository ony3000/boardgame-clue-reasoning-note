<template>
    <div class="mb-2">
        <v-layout row>
            <v-flex xs4>
                <v-layout row>
                    <v-flex xs8>
                        <v-card tile>
                            <v-card-text class="pa-0">
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
            :key="`row-${index}`"
        >
            <v-flex xs4>
                <v-layout row>
                    <v-flex xs8>
                        <v-card tile>
                            <v-card-text class="pa-0">
                                <span>{{ item }}</span>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs4>
                        <v-card tile>
                            <v-card-text class="pa-0">
                                <span>&nbsp;</span>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex
                xs4
                v-for="(group, groupIndex) in 2"
                :key="`colgroup-${index}-${groupIndex}`"
            >
                <v-layout row>
                    <v-flex
                        xs4
                        v-for="(column, columnIndex) in 3"
                        :key="`cell-${index}-${groupIndex}-${columnIndex}`"
                    >
                        <v-card tile>
                            <v-card-text class="pa-0">
                                <span>&nbsp;</span>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    name: 'evidence-note',
    props: {
        title: String,
        items: Array,
    },
};
</script>
