<template>
  <div class="meeting_info_block">
    <div class="meeting_info">
      <div class="info_icon">
        <v-icon size="28" color="var(--dark)"> mdi-account-group </v-icon>
      </div>
      <div class="info_text">{{ info.participants }} Участников</div>
    </div>
    <div class="meeting_info">
      <div class="info_icon">
        <v-icon size="28" color="var(--dark)"> mdi-incognito </v-icon>
      </div>
      <div class="info_text">{{ info.spectators }} Наблюдателя</div>
    </div>
    <div class="meeting_info">
      <div class="info_icon">
        <v-icon size="28" color="var(--dark)"> mdi-file-document-outline </v-icon>
      </div>
      <div class="info_text">{{ info.files }} Файл</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeetingCardInfo',
  props: {
    info: Object
  }
}
</script>

<style lang="scss">
.meeting_info_block {
    display: flex;
    gap: 10px;
    margin-left: auto;
}
.meeting_info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info_icon {
  margin-bottom: 8px;
}

.info_text {
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: var(--grey);
}
</style>
