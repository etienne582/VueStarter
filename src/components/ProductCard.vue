<template>
    <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    Produit
                    <v-icon large class="icon">mdi-credit-card</v-icon>
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
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss">
.v-icon {
    color: $secondary !important;
    float: right;
}
.v-list-item__subtitle {
    color: $secondary !important;
}
</style>
