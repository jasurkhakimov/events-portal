<template>
    <v-app>
        <alert></alert>
        <router-view />
    </v-app>
</template>

<script>
import Alert from "./components/Alert.vue";
export default {
    components: { Alert },
};
</script>

<style lang="scss">
</style>
