<template>
  <meeting-info-block>
    <div class="meeting_info_item">
      <span>Дата:</span>
      <span>20.12.2021</span>
    </div>
    <div class="meeting_info_item">
      <span>Место:</span>
      <span>IPAK YULI BANK</span>
    </div>
    <div class="meeting_info_item">
      <span>Zoom:</span>
      <v-btn
        depressed
        dark
        rounded
        small
        color="var(--blue)"
        class="meeting_info_link"
      >
        <span>zoom</span>
        <v-icon small>mdi-video</v-icon>
      </v-btn>
    </div>
  </meeting-info-block>
</template>

<script>
import MeetingInfoBlock from './MeetingInfoBlock.vue'
export default {
  components: { MeetingInfoBlock },
}
</script>

<style lang="scss">
.meeting_info_item {
  font-weight: 500;
  font-size: 14px;
  color: var(--dark);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 6px;
  }
}

.meeting_info_link {
  text-transform: lowercase;
}
</style>
