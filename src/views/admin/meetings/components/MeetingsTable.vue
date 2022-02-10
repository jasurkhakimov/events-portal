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
        <v-icon small>
          mdi-reload
        </v-icon>
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
      :items="items"
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

      <template v-slot:item.date="{ item }">
        {{ item.date | format_date('DD/MM/YYYY, HH:mm') }}
      </template>

      <template v-slot:item.status="{ item }">
        <v-chip
          class="ma-2"
          :color="statuses[item.status].color"
          dark
          small
          label
        >
          {{ statuses[item.status].text }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <div class="d-flex align-center">
          <v-btn
            :to="{ name: 'admin-meetings-info', params: { id: item._id } }"
            icon
            color="var(--blue)"
            small
            class="mr-2"
          >
            <v-icon small> mdi-eye </v-icon>
          </v-btn>
        </div>
      </template>

      <template v-slot:no-data> Список пользователей пуст </template>
    </v-data-table>
  </div>
</template>

<script>
import { format_date } from '@/utils/time'

export default {
  name: 'UserTable',
  props: {
    items: Array,
    loading: Boolean,
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Наименование',
        value: 'name',
      },
      {
        text: 'Тема',
        value: 'subject',
      },
      {
        text: 'Дата',
        value: 'date',
      },
      {
        text: 'Статус',
        value: 'status',
      },
      { text: 'Действия', value: 'actions', sortable: false },
    ],
    statuses: [
      {
        color: 'var(--grey)',
        text: 'в ожидании',
        status: 0,
      },
      {
        color: 'var(--blue)',
        text: 'открыт',
        status: 1,
      },
      {
        color: 'var(--green)',
        text: 'опрос',
        status: 2,
      },
      {
        color: 'var(--dark)',
        text: 'завершен',
        status: 3,
      },
    ],
  }),
  filters: {
    format_date,
  },
}
</script>

<style></style>
