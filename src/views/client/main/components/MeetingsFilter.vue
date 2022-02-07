<template>
  <div>
    <v-tabs class="custom_tabs" color="var(--dark)" v-model="inner_tab">
      <v-tabs-slider color="var(--blue)"></v-tabs-slider>

      <v-tab class="custom_tab" color="var(--dark)" v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'MeetingsFilter',
  props: {
    tab: Number,
  },
  data: () => ({
    items: ['Текущие', 'Запланированные', 'Архив', 'Все'],
  }),
  computed: {
    inner_tab: {
      get() {
        return this.tab
      },
      set(val) {
        this.$emit('change_tab', val)
      },
    },
  },
  watch: {},
}
</script>

<style lang="scss">
.custom_tab {
    text-transform: capitalize!important;
    letter-spacing: normal;
    font-size: 16px;
}

.custom_tabs {
    margin-bottom: 50px;
}
</style>
