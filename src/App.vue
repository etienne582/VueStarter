<template>
    <div id="app">
        <v-app>
            <AppBar />
            <v-main>
                <v-container>
                    <router-view />
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppBar from '@/components/AppBar.vue'
@Component({
    components: {
        AppBar
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
    background-color: $background;
}
</style>
