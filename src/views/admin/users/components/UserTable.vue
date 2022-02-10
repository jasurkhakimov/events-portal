<template>
  <div>
    <div class="table_top">
      <v-btn
        @click="$emit('reload')"
        depressed
        color="var(--grey)"
        class="c-btn"
        dark
        icon
      >
        <v-icon small> mdi-reload </v-icon>
      </v-btn>
      <v-btn
        @click="$emit('add_item')"
        depressed
        color="var(--green)"
        class="c-btn"
        dark
      >
        добавить
      </v-btn>
    </div>
    <v-data-table
      :headers="headers"
      :items="users"
      sort-by="calories"
      class="c-data-table"
      :search="search"
      :loading="loading"
    >
      <template v-slot:top>
        <div class="table_top">
          <v-text-field
            v-model="search"
            label="Поиск"
            outlined
            hide-details
            class="c-field"
            dense
          ></v-text-field>
        </div>
      </template>

      <template v-slot:item.status="{ item }">
        <v-chip
          class="ma-2"
          :color="item.status ? 'var(--green)' : 'var(--red)'"
          dark
          small
          label
        >
          {{ item.status ? 'активный' : 'неактивный' }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <div v-if="item.status">
          <v-btn
            @click="$emit('edit_item', item)"
            icon
            color="orange"
            small
            class="mr-2"
          >
            <v-icon small> mdi-pencil </v-icon>
          </v-btn>
          <v-btn
            @click="$emit('delete_item', item)"
            icon
            color="var(--red)"
            small
          >
            <v-icon small> mdi-delete </v-icon>
          </v-btn>
        </div>
      </template>

      <template v-slot:no-data> Список пользователей пуст </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'UserTable',
  props: {
    users: Array,
    loading: Boolean,
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: 'ФИО',
        value: 'name',
      },
      {
        text: 'Почта',
        value: 'email',
      },
      {
        text: 'Статус',
        value: 'status',
      },
      { text: 'Действия', value: 'actions', sortable: false },
    ],
  }),
}
</script>

<style></style>
