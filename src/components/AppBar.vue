<template>
    <v-app-bar app id="app-bar" flat>
        <v-avatar class="mr-10" color="white" size="32"></v-avatar>
        <v-divider class="mx-4" vertical dark></v-divider>
        <span class="subheading white--text">Page</span>
        <v-spacer></v-spacer>
        <v-divider class="mx-4" vertical dark></v-divider>
        <div class="mr-16 white--text">Profil</div>
        <v-divider class="mx-4" vertical dark></v-divider>
        <v-app-bar-nav-icon id="nav-icon"></v-app-bar-nav-icon>
        <v-divider class="mx-4" vertical dark></v-divider>
        <v-avatar color="white" size="32"></v-avatar>
    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class AppBar extends Vue {}
</script>

<style lang="scss" scoped>
#app-bar {
    background-color: $primary;
}
#nav-icon {
    color: $secondary;
}
</style>
