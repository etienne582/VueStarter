<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="3"><ProductCard /></v-col>
            <v-col cols="3"><ProductCard /></v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProductCard from '@/components/ProductCard.vue'
@Component({
    components: {
        ProductCard
    }
})
export default class Home extends Vue {}
</script>
