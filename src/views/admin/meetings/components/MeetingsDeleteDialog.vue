<template>
  <v-dialog v-model="dialog" max-width="400px">
    <v-card class="py-3">
      <v-card-text>
        <h2 class="mt-5 bold">
            Вы точно хотите удалить пользователя?
        </h2>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          depressed
          class="c-btn"
          color="var(--grey)"
          text
          @click="$emit('toggle_dialog')"
        >
          Отмена
        </v-btn>
        <v-btn depressed class="c-btn" color="var(--red)" dark @click="delete_item()">
          Удалить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'UserEditDialog',
  props: {
    dialog: Boolean,
    item: Object,
  },
  data: () => ({
  }),
  methods: {
    delete_item() {
      this.$emit('delete', this.item.id);
    },
  },
}
</script>

<style></style>
