<template>
    <div class="mb-2">
        <v-layout>
            <v-flex xs4>
                <v-layout row>
                    <v-flex xs4 offset-xs8>
                        <v-card tile>
                            <v-card-text class="pa-0">
                                <span>A</span>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex
                xs4
                v-for="(group, groupIndex) in 2"
                :key="`colgroup-${groupIndex}`"
            >
                <v-layout row>
                    <v-flex
                        xs4
                        v-for="(column, columnIndex) in 3"
                        :key="`cell-${groupIndex}-${columnIndex}`"
                    >
                        <v-card tile>
                            <v-card-text class="pa-0">
                                <span>{{ String.fromCharCode('B'.codePointAt(0) + groupIndex * 3 + columnIndex) }}</span>
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
    name: 'detective-list',
};
</script>
