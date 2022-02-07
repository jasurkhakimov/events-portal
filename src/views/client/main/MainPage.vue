<template>
  <div class="content">
    <heading> Обсуждения </heading>

    <meetings-filter :tab="tab" @change_tab="change_tab"></meetings-filter>

    <div v-for="(item, index) in filtered_meetings" :key="index">
      <meeting-card :item="item"></meeting-card>
    </div>
  </div>
</template>

<script>
import Heading from '../components/Heading.vue'
import MeetingsFilter from './components/MeetingsFilter.vue'
import MeetingCard from './components/MeetingCard/MeetingCard.vue'
export default {
  components: { Heading, MeetingsFilter, MeetingCard },
  data: () => ({
    tab: null,
    meetings: [
      {
        id: 1,
        text: 'План стратегического развития',
        data: '2022-01-28T12:33:37.026Z',
        status: 0,
        info: {
          spectators: 5,
          participants: 6,
          files: 2,
        },
      },
      {
        id: 1,
        text: 'План стратегического развития',
        data: '2022-01-28T12:33:37.026Z',
        status: 1,
        info: {
          spectators: 2,
          participants: 10,
          files: 1,
        },
      },
      {
        id: 1,
        text: 'План стратегического развития',
        data: '2022-01-28T12:33:37.026Z',
        status: 2,
        info: {
          spectators: 3,
          participants: 9,
          files: 1,
        },
      },
      {
        id: 1,
        text: 'План стратегического развития',
        data: '2022-01-28T12:33:37.026Z',
        status: 3,
        info: {
          spectators: 2,
          participants: 10,
          files: 1,
        },
      },
    ],
    filtered_meetings: []
  }),
  mounted() {
      this.tab = 0;
  },
  methods: {
    change_tab(val) {
      this.tab = val
    },
  },
  watch: {
      tab(val) {
          console.log(val);
          this.filtered_meetings = this.meetings.filter(item => {
              if (val === 3) {
                  return item;
              } else if (val === 0 && [1,2].includes(item.status)) {
                  return item;
              } else if (val === 1 && item.status === 0) {
                  return item;
              } else if (val === 2 && item.status === 3) {
                  return item;
              } 
          });
      }
  }
}
</script>

<style>
.content {
  margin-top: 45px;
}
</style>
