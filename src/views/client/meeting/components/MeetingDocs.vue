<template>
  <meeting-info-block>
    <div class="meeting_info_title">Документы</div>

    <div v-ripple class="meeting_info_doc">
      <div class="doc_icon">
        <v-icon size="20" color="var(--blue)">mdi-file-document-outline</v-icon>
      </div>
      <div class="doc_title" :title="title">{{ title | slice }}</div>
    </div>
  </meeting-info-block>
</template>

<script>
import MeetingInfoBlock from './MeetingInfoBlock.vue'
export default {
  components: { MeetingInfoBlock },
  data: () => ({
    title: 'План стратегического развития.docx',
  }),
  filters: {
    slice(str) {
      return str.length > 29 ? str.slice(0, 28) + '...' : str
    },
  },
}
</script>

<style lang="scss">
.meeting_info_doc {
  display: flex;
  align-items: center;
  background-color: var(--light);
  border-radius: var(--radius-lg);
  padding: 5px 10px;
  cursor: pointer;
}
.doc_title {
  margin-left: 7px;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: var(--dark);
}
</style>
