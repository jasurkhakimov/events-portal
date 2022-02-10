<template>
  <meeting-info-block>
    <div class="meeting_info_title">Наблюдатели</div>

    <div class="meeting_info_participants">
      <v-chip
        class="participant_chip"
        v-for="(item, index) in observers"
        :key="index"
        color="var(--grey)"
        small
      >
        {{ item.name }}
      </v-chip>
    </div>
  </meeting-info-block>
</template>

<script>
import MeetingInfoBlock from './MeetingInfoBlock.vue'
export default {
  components: { MeetingInfoBlock },
  props: {
      observers: Array
  },
  name: 'MeetingObservers',
}
</script>

<style lang="scss">
.participant_chip {
  margin: 2px;
  color: var(--light) !important;
}
</style>
