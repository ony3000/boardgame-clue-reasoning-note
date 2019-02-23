<template>
    <v-dialog v-model="isActive" persistent>
        <v-btn slot="activator" icon>
            <v-badge bottom overlap color="grey darken-3">
                <span slot="badge" class="mdi mdi-check caption"></span>
                <span class="mdi mdi-pen mdi-24px"></span>
            </v-badge>
        </v-btn>
        <v-card>
            <v-card-title class="headline">What is Lorem Ipsum?</v-card-title>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex xs6>
                        <v-radio-group v-model="memoType">
                            <div slot="label" class="grey--text text--darken-3">메모 방식</div>
                            <v-radio :value="0">
                                <div slot="label" class="grey--text text--darken-3">카드 있음</div>
                            </v-radio>
                            <v-radio :value="1">
                                <div slot="label" class="grey--text text--darken-3">카드 없음</div>
                            </v-radio>
                            <v-radio :value="2">
                                <div slot="label" class="grey--text text--darken-3">불확실</div>
                            </v-radio>
                            <v-radio :value="3">
                                <div slot="label" class="grey--text text--darken-3">지우개</div>
                            </v-radio>
                        </v-radio-group>
                    </v-flex>
                    <v-flex xs6>
                        <v-radio-group v-model="memoColor">
                            <div slot="label" class="grey--text text--darken-3">메모 색상</div>
                            <v-radio :value="0" color="grey darken-3">
                                <div slot="label" class="grey--text text--darken-3">블랙</div>
                            </v-radio>
                            <v-radio :value="1" color="green darken-3">
                                <div slot="label" class="green--text text--darken-3">{{ lang.green }}</div>
                            </v-radio>
                            <v-radio :value="2" color="yellow darken-3">
                                <div slot="label" class="yellow--text text--darken-3">{{ lang.mustard }}</div>
                            </v-radio>
                            <v-radio :value="3" color="blue darken-3">
                                <div slot="label" class="blue--text text--darken-3">{{ lang.peacock }}</div>
                            </v-radio>
                            <v-radio :value="4" color="purple darken-3">
                                <div slot="label" class="purple--text text--darken-3">{{ lang.plum }}</div>
                            </v-radio>
                            <v-radio :value="5" color="red darken-3">
                                <div slot="label" class="red--text text--darken-3">{{ lang.scarlet }}</div>
                            </v-radio>
                            <v-radio :value="6" color="grey">
                                <div slot="label" class="grey--text">{{ lang.white }}</div>
                            </v-radio>
                        </v-radio-group>
                    </v-flex>
                </v-layout>
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
    name: 'brush-dialog',
    data() {
        return {
            isActive: false,
            memoType: 0,
            memoColor: 0,
        };
    },
};
</script>
