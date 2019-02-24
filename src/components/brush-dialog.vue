<template>
    <v-dialog v-model="isActive" persistent>
        <v-btn slot="activator" icon>
            <v-badge bottom overlap :color="colorClass.black">
                <span slot="badge" class="mdi mdi-check caption"></span>
                <span class="mdi mdi-pen mdi-24px"></span>
            </v-badge>
        </v-btn>
        <v-card>
            <v-card-title class="headline">메모 설정</v-card-title>
            <v-card-text>
                <div>이 설정으로 추리 노트를 편집합니다.<br>지우개는 색상과 무관합니다.</div>
                <v-layout row wrap>
                    <v-flex xs6>
                        <v-radio-group v-model="memoType">
                            <div slot="label" :class="textColorClass.black">메모 방식</div>
                            <v-radio :value="0">
                                <div slot="label" :class="textColorClass.black">카드 있음</div>
                            </v-radio>
                            <v-radio :value="1">
                                <div slot="label" :class="textColorClass.black">카드 없음</div>
                            </v-radio>
                            <v-radio :value="2">
                                <div slot="label" :class="textColorClass.black">불확실</div>
                            </v-radio>
                        </v-radio-group>
                        <v-radio-group v-model="memoType">
                            <v-radio :value="3">
                                <div slot="label" :class="textColorClass.black">지우개</div>
                            </v-radio>
                        </v-radio-group>
                    </v-flex>
                    <v-flex xs6>
                        <v-radio-group v-model="memoColor">
                            <div slot="label" :class="textColorClass.black">메모 색상</div>
                            <v-radio :value="0" :color="colorClass.black">
                                <div slot="label" :class="textColorClass.black">블랙</div>
                            </v-radio>
                            <v-radio :value="1" :color="colorClass.green">
                                <div slot="label" :class="textColorClass.green">{{ lang.green }}</div>
                            </v-radio>
                            <v-radio :value="2" :color="colorClass.mustard">
                                <div slot="label" :class="textColorClass.mustard">{{ lang.mustard }}</div>
                            </v-radio>
                            <v-radio :value="3" :color="colorClass.peacock">
                                <div slot="label" :class="textColorClass.peacock">{{ lang.peacock }}</div>
                            </v-radio>
                            <v-radio :value="4" :color="colorClass.plum">
                                <div slot="label" :class="textColorClass.plum">{{ lang.plum }}</div>
                            </v-radio>
                            <v-radio :value="5" :color="colorClass.scarlet">
                                <div slot="label" :class="textColorClass.scarlet">{{ lang.scarlet }}</div>
                            </v-radio>
                            <v-radio :value="6" :color="colorClass.white">
                                <div slot="label" :class="textColorClass.white">{{ lang.white }}</div>
                            </v-radio>
                        </v-radio-group>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="closeAction">취소</v-btn>
                <v-btn color="blue darken-1" flat @click="saveAction">저장</v-btn>
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
    methods: {
        closeAction() {
            this.isActive = false;
        },
        saveAction() {
            this.isActive = false;
        },
    },
};
</script>
