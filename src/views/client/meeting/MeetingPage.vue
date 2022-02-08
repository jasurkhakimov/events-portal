<template>
  <div>
    <div class="meeting content" ref="container">
      <div class="meeting_main">
        <meeting-header></meeting-header>
        <meeting-chat @scrollToEnd="scrollToEnd"></meeting-chat>
      </div>
      <div class="meeting_side">
          <div class="sticky">
            <meeting-about-info></meeting-about-info>
            <meeting-participants></meeting-participants>
            <meeting-docs></meeting-docs>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import MeetingAboutInfo from './components/MeetingAboutInfo.vue'
import MeetingChat from './components/MeetingChat.vue'
import MeetingDocs from './components/MeetingDocs.vue'
import MeetingHeader from './components/MeetingHeader.vue'
import MeetingParticipants from './components/MeetingParticipants.vue'
export default {
  components: {
    MeetingHeader,
    MeetingParticipants,
    MeetingAboutInfo,
    MeetingDocs,
    MeetingChat,
  },
  name: 'MeetingPage',

  data: () => ({
    colors: [
      'var(--blue)',
      'var(--red)',
      'var(--green)',
      'var(--grey)',
      'yellow',
      'orange',
      'purple',
      'cyan',
    ],
  }),
  mounted() {
    this.scrollToEnd();
  },
  methods: {
    scrollToEnd() {
      //   var container = this.$el.querySelector('#container')
      //   console.log(container.scrollHeight)
      //   container.scrollTop = container.scrollHeight
      const el = this.$refs.container
      console.log(el)

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        this.$nextTick(() => {
          el.scrollIntoView({
            block: 'end',
            behavior: 'smooth',
          })
        })
      }
    },
  },
}
</script>

<style lang="scss">
.meeting {
  display: flex;
  min-height: calc(100vh - 165px);
}

.meeting_main {
  flex-grow: 1;
  padding-right: 45px;
  position: relative;
}

.meeting_side {
  flex-shrink: 1;
  min-width: 290px;
}

.sticky {
    position: sticky;
    top: 10px;
    z-index: 100;
}
</style>
