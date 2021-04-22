<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="3"><ProductCard title="Card 1"/></v-col>
            <v-col cols="3"><ProductCard title="Card 2"/></v-col>
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
