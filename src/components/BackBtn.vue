<template>
    <v-btn @click="$router.back()" depressed class="c_btn mr-4" icon color="var(--grey)">
        <v-icon>
            mdi-chevron-left
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'BackBtn'
}
</script>

<style>

</style>