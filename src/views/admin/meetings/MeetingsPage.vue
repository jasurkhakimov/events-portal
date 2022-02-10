<template>
  <div class="content">
    <heading> Обсуждения </heading>

    <meetings-table
      @reload="get_table"
      @add_item="edit_item_dialog"
      @edit_item="edit_item_dialog"
      @delete_item="delete_item_dialog"
      :items="meetings"
      :loading="loading"
    ></meetings-table>
    <meetings-edit-dialog
      :dialog="edit_dialog"
      :title="dialog_title"
      :item="selected"
      :observers="users"
      :groups="groups"
      @toggle_dialog="toggle_edit_dialog"
      @create="create"
      @set_date="set_date"
    ></meetings-edit-dialog>
  </div>
</template>

<script>
import Heading from '../components/Heading.vue'
import MeetingsTable from './components/MeetingsTable.vue'
import MeetingsEditDialog from './components/MeetingsEditDialog.vue'
import moment from 'moment'

export default {
  name: 'MeetingsPage',
  components: {
    Heading,
    MeetingsTable,
    MeetingsEditDialog,
  },
  data: () => ({
    default_item: {
      name: '',
      subject: '',
      desc: '',
      date: moment().utcOffset(5).format(),
      observers: [],
      groups: [],
    },
    selected: {
      name: '',
      subject: '',
      desc: '',
      date: moment().utcOffset(5).format(),
      observers: [],
      groups: [],
    },
    edit_dialog: false,
    delete_dialog: false,
    loading: false,
    dialog_title: '',
    meetings: [],
    users: [],
    groups: [],
    url: 'events',
  }),

  mounted() {
    this.get_table()
    this.get_users()
    this.get_groups()
  },
  methods: {
    edit_item_dialog(item = this.selected) {
      this.dialog_title = item == this.selected ? 'Добавить' : 'Редактировать'
      if (item != this.selected) {
        this.selected = { ...item }
      }
      this.toggle_edit_dialog()
    },
    delete_item_dialog(item) {
      this.selected = { ...item }
      this.toggle_delete_dialog()
    },
    toggle_edit_dialog() {
      this.edit_dialog = !this.edit_dialog
      this.clear_selected()
    },
    toggle_delete_dialog() {
      this.delete_dialog = !this.delete_dialog
      this.clear_selected()
    },
    clear_selected() {
      if (!this.edit_dialog && !this.delete_dialog) {
        this.selected = this.default_item
      }
    },
    set_date(date) {
      this.selected = { ...this.selected, date }
    },

    

    // API CALLS
    async get_table() {
      try {
        this.loading = true;
        const {
          data: { data, success, message },
        } = await this.$http.get(`/${this.url}`)
        if (success) {
          this.meetings = data
        } else {
          console.log(message)
        }
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false;
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
    async create(meeting) {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.post(`/${this.url}`, meeting)
        if (success) {
          this.setAlert({
            color: 'var(--green)',
            text: 'Обсуждение добавлено успешно!',
          })
          this.meetings.push(data)
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
        this.toggle_edit_dialog()
      }
    },
  },
}
</script>

<style></style>
