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
        <!--
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        -->
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
    background-color: #ededed;
}
/*
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
*/
</style>
