<template>
    <div>
        <v-tabs color="var(--dark)" v-model="tab">
            <v-tabs-slider color="var(--blue)"></v-tabs-slider>

            <v-tab color="var(--dark)" v-for="item in items" :key="item">
                {{ item }}
            </v-tab>
        </v-tabs>
        {{ tab }}
    </div>
</template>

<script>
export default {
    name: "EventsFilter",
    data: () => ({
        tab: null,
        items: ["Текущие", "Запланированные", "Архив", "Все"],
    }),
};
</script>

<style>
</style>