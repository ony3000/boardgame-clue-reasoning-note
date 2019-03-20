<template>
    <div class="mb-2">
        <v-layout>
            <v-flex offset-xs3>
                <v-layout row>
                    <v-flex
                        v-for="(num, index) in 7"
                        :key="`cell-${index}`"
                        class="is-evenly-spaced"
                    >
                        <v-card tile :height="22">
                            <v-card-text class="pa-0 text-xs-center">
                                <span>{{ String.fromCharCode('A'.codePointAt(0) + index) }}</span>
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
