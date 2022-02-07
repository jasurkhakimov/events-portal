<template>
  <div class="meeting_card">
    <!-- <div class="meeting_book">
      <v-btn icon>
        <v-icon> mdi-star </v-icon>
      </v-btn>
    </div> -->
    <meeting-card-text :text="item.text"></meeting-card-text>
    <meeting-card-info :info="item.info"></meeting-card-info>
    <meeting-card-action :status="item.status"></meeting-card-action>
  </div>
</template>

<script>
import MeetingCardAction from './MeetingCardAction.vue'
import MeetingCardInfo from './MeetingCardInfo.vue'
import MeetingCardText from './MeetingCardText.vue'
export default {
  components: { MeetingCardText, MeetingCardInfo, MeetingCardAction },
  name: 'MeetingCard',
  props: {
      item: Object,
  }
}
</script>

<style lang="scss">
.meeting_card {
  display: flex;
  align-items: center;
  background-color: #f5f6fa;
  margin-bottom: 18px;
  border-radius: var(--radius-bg);
  padding: 30px 40px;
}




</style>
