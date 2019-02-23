<template>
    <v-dialog v-model="isActive" persistent>
        <v-btn slot="activator" icon>
            <span class="mdi mdi-file-outline mdi-24px"></span>
        </v-btn>
        <v-card>
            <v-card-title class="headline">What is Lorem Ipsum?</v-card-title>
            <v-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</v-card-text>
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
    name: 'newgame-dialog',
    data() {
        return {
            isActive: false,
        };
    },
};
</script>
