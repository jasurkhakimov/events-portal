<template>
  <meeting-info-block>
    <div class="meeting_info_title">Участники</div>

    <div class="meeting_info_participants">
      <v-chip
        class="participant_chip"
        v-for="i in 7"
        :key="i"
        color="var(--green)"
        small
      >
        John Doe
      </v-chip>
    </div>
  </meeting-info-block>
</template>

<script>
import MeetingInfoBlock from './MeetingInfoBlock.vue'
export default {
  components: { MeetingInfoBlock },
  name: 'MeetingParticipants',
}
</script>

<style lang="scss">
.participant_chip {
  margin: 2px;
  color: var(--light) !important;
}
</style>
