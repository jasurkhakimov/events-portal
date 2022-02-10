<template>
  <div class="content">
    <heading>
      <back-btn></back-btn>
      <span>
        {{ meeting.name }}
      </span>
    </heading>

    <div class="d-flex">
      <v-col cols="4" class="">
        <meeting-info-form
          :item="meeting"
          :observers="users"
          :groups="groups"
          @set_date="set_date"
        ></meeting-info-form>
      </v-col>
      <v-col cols="4" class="">
        <meeting-info-docs></meeting-info-docs>
      </v-col>
      <v-col cols="4" class="">
        <meeting-info-actions
          :item="meeting"
          @update="update"
        ></meeting-info-actions>
        <div class="action">
          <v-btn @click="update()" class="c-btn" color="var(--blue)" dark depressed>
            <span>
              Сохранить
            </span>
            <v-icon small class="ml-2">
              mdi-content-save
            </v-icon>
          </v-btn>
        </div>
      </v-col>
    </div>
  </div>
</template>

<script>
import Heading from '../../components/Heading.vue'
import BackBtn from '../../../../components/BackBtn.vue'
import MeetingInfoForm from './components/MeetingInfoForm.vue'
import MeetingInfoDocs from './components/MeetingInfoDocs.vue'
import MeetingInfoActions from './components/MeetingInfoActions.vue'
import { mapMutations } from 'vuex'
import { SET_ALERT } from '@/store/modules/alert/types'
import { Module } from '@/store/modules'

export default {
  components: { Heading, BackBtn, MeetingInfoForm, MeetingInfoDocs, MeetingInfoActions },
  name: 'MeetingInfoPage',
  data: () => ({
    meeting: {
      status: 0,
    },
    users: [],
    groups: [],
    url: 'events',
  }),
  mounted() {
    this.get_meeting()
    this.get_users()
    this.get_groups()
    
  },
  methods: {
    set_date(date) {
      this.meeting = { ...this.meeting, date }
    },

    //VUEX CALL
    ...mapMutations(Module.ALERT, {
      setAlert: SET_ALERT,
    }),

    // API CALLS
    // GETTERS
    async get_meeting() {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.get(`/${this.url}/${this.$route.params.id}`)
        if (success) {
          this.meeting = data
        } else {
          console.log(message)
        }
      } catch (err) {
        console.log(err)
      } finally {
        this.get_members()
      }
    },

    async get_users() {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.get(`/users`)
        if (success) {
          this.users = data
        } else {
          console.log(message)
        }
      } catch (err) {
        console.log(err)
      }
    },

    async get_groups() {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.get(`/groups`)
        if (success) {
          this.groups = data
        } else {
          console.log(message)
        }
      } catch (err) {
        console.log(err)
      }
    },

    async get_members() {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.get(`/events/${this.$route.params.id}/members`)
        if (success) {
          const { groups, observers } = data
          this.meeting = { ...this.meeting, groups, observers }
        } else {
          console.log(message)
        }
      } catch (err) {
        console.log(err)
      }
    },

    // SETTERS
    async update(meeting=this.meeting) {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.put(`/${this.url}/${meeting.id}`, meeting)
        if (success) {
          this.setAlert({
            color: 'var(--green)',
            text: 'Обсуждение обновлено успешно!',
          })
          this.meeting = data;
        } else {
          console.log(message)
        }
      } catch (err) {
        console.log(err)
        this.setAlert({
          color: 'var(--red)',
          text: 'Произошла ошибка!',
        })
      } finally {
        this.get_members();
      }
    },
  },
}
</script>

<style lang="scss">
  .action {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
  }
</style>
