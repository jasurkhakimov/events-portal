<template>
  <div class="meeting_header">
    <div class="meeting_title">
      <back-btn></back-btn>
      <span> {{ title }} </span>
    </div>
    <div class="meeting_theme">
      {{ subject }}
    </div>
    <div class="meeting_desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
import BackBtn from '@/components/BackBtn.vue'
export default {
  name: 'MeetingHeader',
  components: {
    BackBtn
  },
  props: {
    title: String,
    desc: String,
    subject: String,
  },
}
</script>

<style lang="scss">
.meeting_header {
  margin-bottom: 20px;
}

.meeting_title {
  font-weight: 600;
  font-size: 32px;
  line-height: 37px;
  color: var(--dark);
  margin-bottom: 15px;
}

.meeting_desc {
  // font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: var(--dark);
  line-height: 1.5;
}

.meeting_theme {
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  color: var(--grey);
  margin-bottom: 12px;
}
</style>
