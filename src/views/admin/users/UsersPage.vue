<template>
  <div class="content">
    <heading> Пользователи </heading>

    <user-table
      @add_item="edit_item_dialog"
      @edit_item="edit_item_dialog"
      @delete_item="delete_item_dialog"
      @reload="get_table"
      :users="users"
      :loading="loading"
    ></user-table>
    <user-edit-dialog
      :dialog="edit_dialog"
      :title="dialog_title"
      :item="selected"
      @toggle_dialog="toggle_edit_dialog"
      @create="create"
      @update="update"
    ></user-edit-dialog>
    <user-delete-dialog
      :dialog="delete_dialog"
      @toggle_dialog="toggle_delete_dialog"
      :item="selected"
      @delete="delete_item"
    ></user-delete-dialog>
  </div>
</template>

<script>
import Heading from '../components/Heading.vue'
import UserTable from './components/UserTable.vue'
import UserEditDialog from './components/UserEditDialog.vue'
import UserDeleteDialog from './components/UserDeleteDialog.vue'
import { mapMutations } from 'vuex'
import { SET_ALERT } from '@/store/modules/alert/types'
import { Module } from '@/store/modules'

export default {
  name: 'UsersPage',
  components: { Heading, UserTable, UserEditDialog, UserDeleteDialog },
  data: () => ({
    default_item: {
      name: '',
      email: '',
    },
    selected: {
      name: '',
      email: '',
    },
    edit_dialog: false,
    delete_dialog: false,
    loading: false,
    dialog_title: '',
    users: [],
  }),

  mounted() {
    this.get_table()
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
        } = await this.$http.get('/users')
        if (success) {
          this.users = data
        } else {
          console.log(message)
        }
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false;
      }
    },
    async create(user) {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.post('/users', user)
        if (success) {
          this.setAlert({
            color: 'var(--green)',
            text: 'Пользователь добавлен успешно!',
          })
          this.users.push(data)
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
    async update(user) {
      try {
        const {
          data: { data, success, message },
        } = await this.$http.put(`/users/${user.id}`, user)
        if (success) {
          this.setAlert({
            color: 'var(--green)',
            text: 'Пользователь обновлен успешно!',
          })
          this.users = this.users.map(item => {
              if (item.id === data.id) {
                  return data;
              }
              return item;
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
        } = await this.$http.delete(`/users/${id}`)
        if (success) {
          this.setAlert({
            color: 'var(--green)',
            text: 'Пользователь деактивирован успешно!',
          })
          this.users = this.users.map(item => {
              if (item.id === data.id) {
                  return data;
              }
              return item;
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
