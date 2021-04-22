<template>
    <v-card class="mx-auto" max-width="344" outlined :to="'/about'">
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    {{ title }}
                    <v-icon large>mdi-credit-card</v-icon>
                </v-list-item-title>
                <v-list-item-subtitle>
                    <div>Nombre</div>
                    <div>1000</div>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class ProductCard extends Vue {
    @Prop() readonly title!: string
}
</script>

<style lang="scss" scoped>
.v-icon {
    color: $secondary;
    float: right;
}
.v-list-item__subtitle {
    color: $secondary !important;
}
</style>
