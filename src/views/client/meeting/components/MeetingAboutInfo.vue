<template>
  <meeting-info-block>
    <div class="meeting_info_item">
      <span>Дата:</span>
      <span>{{ date | format_date(' HH:mm - DD/MM/YYYY') }}</span>
    </div>
    <div v-if="place" class="meeting_info_item">
      <span>Место:</span>
      <span>{{ place }}</span>
    </div>
    <div v-if="link" class="meeting_info_item">
      <span>Zoom:</span>
      <v-btn
        @click="go_to(link)"
        target="_blank"
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
import { format_date } from '@/utils/time'
import MeetingInfoBlock from './MeetingInfoBlock.vue'
export default {
  props: {
    date: String,
    place: String,
    link: String
  },
  components: { MeetingInfoBlock },
  methods: {
    go_to(link) {
      window.open(link, '_blank');
    }
  },
  filters: {
    format_date
  }
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
