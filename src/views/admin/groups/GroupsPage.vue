<template>
  <div class="content">
    <heading> Группы </heading>

    <groups-table
      @add_item="edit_item_dialog"
      @edit_item="edit_item_dialog"
      @delete_item="delete_item_dialog"
      @reload="get_table"
      :items="groups"
      :loading="loading"
    ></groups-table>
    <groups-edit-dialog
      :dialog="edit_dialog"
      :title="dialog_title"
      :item="selected"
      :users="users"
      @toggle_dialog="toggle_edit_dialog"
      @create="create"
      @update="update"
      @get_group_users="get_group_users"
    ></groups-edit-dialog>
    <groups-delete-dialog
      :dialog="delete_dialog"
      @toggle_dialog="toggle_delete_dialog"
      :item="selected"
      @delete="delete_item"
    ></groups-delete-dialog>
  </div>
</template>

<script>
import Heading from '../components/Heading.vue'
import GroupsTable from './components/GroupsTable.vue'
import GroupsEditDialog from './components/GroupsEditDialog.vue'
import GroupsDeleteDialog from './components/GroupsDeleteDialog.vue'
import { mapMutations } from 'vuex'
import { SET_ALERT } from '@/store/modules/alert/types'
import { Module } from '@/store/modules'

export default {
  name: 'UsersPage',
  components: { Heading, GroupsTable, GroupsEditDialog, GroupsDeleteDialog },
  data: () => ({
    default_item: {
      name: '',
      desc: '',
      users: [],
    },
    selected: {
      name: '',
      desc: '',
      users: [],
    },
    loading: false,
    edit_dialog: false,
    delete_dialog: false,
    dialog_title: '',
    groups: [],
    users: [],
    url: 'groups',
  }),

  mounted() {
    this.get_table()
    this.get_users()
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

    //VUEX CALL
    ...mapMutations(Module.ALERT, {
      setAlert: SET_ALERT,
    }),

    // API CALLS
    async get_table() {
      try {
        this.loading = true;
        const {
          data: { data, success, message },
        } = await this.$http.get(`/${this.url}`)
        if (success) {
          this.groups = data
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
    async get_group_users(id) {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.get(`/groups/${id}/users`)
        if (success) {
          this.selected = { ...this.selected, users: data }
        } else {
          console.log(message)
        }
      } catch (err) {
        console.log(err)
      }
    },
    async create(group) {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.post(`/${this.url}`, group)
        if (success) {
          this.setAlert({
            color: 'var(--green)',
            text: 'Группа добавлена успешно!',
          })
          this.groups.push(data)
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
    async update(group) {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.put(`/${this.url}/${group.id}`, group)
        if (success) {
          this.setAlert({
            color: 'var(--green)',
            text: 'Группа обновлена успешно!',
          })
          this.groups = this.groups.map((item) => {
            if (item.id === data.id) {
              return data
            }
            return item
          })
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
    async delete_item(id) {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.delete(`/${this.url}/${id}`)
        if (success) {
          this.setAlert({
            color: 'var(--green)',
            text: 'Группа деактивирована успешно!',
          })
          this.groups = this.groups.map((item) => {
            if (item.id === data.id) {
              return data
            }
            return item
          })
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
        this.toggle_delete_dialog()
      }
    },
  },
}
</script>

<style></style>
