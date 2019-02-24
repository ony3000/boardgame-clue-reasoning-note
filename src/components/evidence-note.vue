<template>
    <div class="mb-2">
        <v-layout row>
            <v-flex xs4>
                <v-layout row>
                    <v-flex xs8>
                        <v-card tile>
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
            :key="`row-${index}`"
        >
            <v-flex xs4>
                <v-layout row>
                    <v-flex xs8>
                        <v-card tile>
                            <v-card-text class="px-1 py-0 text-truncate">
                                <span>{{ item }}</span>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs4>
                        <v-card tile>
                            <v-card-text class="pa-0 text-xs-center">
                                <span>&nbsp;</span>
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
                        :key="`cell-${index}-${column}`"
                    >
                        <v-card tile>
                            <v-card-text class="pa-0 text-xs-center">
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
