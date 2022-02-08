<template>
  <div class="meeting_info_block">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'MeetingInfoBlock'
}
</script>

<style lang="scss">
.meeting_info_block {
  background-color: var(--lightgrey);
  border-radius: var(--radius);
  padding: 20px 25px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
}



.meeting_info_title {
  font-weight: 500;
  font-size: 16px;
  color: var(--dark);
  margin-bottom: 8px;
}
</style>
