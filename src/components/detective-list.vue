<template>
    <div class="mb-2">
        <v-layout>
            <v-flex xs4>
                <v-layout row>
                    <v-flex xs4 offset-xs8>
                        <v-card tile>
                            <v-card-text class="pa-0 text-xs-center">
                                <span>A</span>
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
                        :key="`cell-${column}`"
                    >
                        <v-card tile>
                            <v-card-text class="pa-0 text-xs-center">
                                <span>{{ String.fromCharCode('A'.codePointAt(0) + column) }}</span>
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
