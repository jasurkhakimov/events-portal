<template>
  <div>
    <div class="meeting content" ref="container">
      <div class="meeting_main">
        <meeting-header 
          :desc="meeting.desc"
          :title="meeting.name"
          :subject="meeting.subject"
        ></meeting-header>
        <meeting-chat @scrollToEnd="scrollToEnd"></meeting-chat>
      </div>
      <div class="meeting_side">
        <div class="sticky">
          <meeting-about-info 
            :date="meeting.date"
            :link="meeting.link"
            :place="meeting.place"
          ></meeting-about-info>
          <meeting-participants></meeting-participants>
          <meeting-observers :observers="observers"></meeting-observers>
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
import MeetingObservers from './components/MeetingObservers.vue'
export default {
  components: {
    MeetingHeader,
    MeetingParticipants,
    MeetingAboutInfo,
    MeetingDocs,
    MeetingChat,
    MeetingObservers
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
    meeting: {
      status: 0
    },
    observers: [],

    url: 'events'
  }),
  mounted() {
    this.scrollToEnd();
    this.get_meeting();
  },
  methods: {
    scrollToEnd() {
      const el = this.$refs.container
      console.log(el)

      if (el) {
        this.$nextTick(() => {
          el.scrollIntoView({
            block: 'end',
            behavior: 'smooth',
          })
        })
      }
    },

    // API CALLS
    async get_meeting() {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.get(`/${this.url}/${this.$route.params.id}`)
        if (success) {
          this.meeting = data;
          this.observers = data.members?.observers;
        } else {
          console.log(message)
        }
      } catch (err) {
        console.log(err)
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
  max-width: 290px;
  width: 100%;
}

.sticky {
  position: sticky;
  top: 10px;
  z-index: 100;
}
</style>
