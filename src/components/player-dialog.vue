<template>
    <v-dialog v-model="isActive" persistent>
        <v-btn slot="activator" icon>
            <span class="mdi mdi-account mdi-24px"></span>
        </v-btn>
        <v-card>
            <v-card-title class="headline">What is Lorem Ipsum?</v-card-title>
            <v-card-text>
                <v-container grid-list-xs>
                    <v-layout wrap>
                        <v-flex xs6 v-for="(num, index) in 6" :key="index">
                            <v-text-field></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" flat @click="isActive = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click="isActive = false">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'player-dialog',
    data() {
        return {
            isActive: false,
        };
    },
};
</script>
