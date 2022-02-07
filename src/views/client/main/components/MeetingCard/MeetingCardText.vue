<template>
  <div class="meeting_text">
    <div class="meeting_heading">План стратегического развития</div>
    <div class="meeting_date">Сегодня, 12:00</div>
  </div>
</template>

<script>
export default {
  name: 'MeetingCardText',
}
</script>

<style lang="scss">
.meeting_text {
  // margin-left: 32px;
}

.meeting_heading {
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: var(--dark);
  margin-bottom: 7px;
}

.meeting_date {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: var(--grey);
}
</style>
