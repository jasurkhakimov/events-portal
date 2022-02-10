<template>
  <v-dialog persistent v-model="dialog" max-width="400px">
    <v-card class="py-3">
      <v-card-title>
        <span class="bold">{{ title }}</span>
      </v-card-title>

      <v-card-text class="pb-0">
        <v-form ref="form" v-model="valid" class="mt-5">
          <v-text-field
            v-model="item.name"
            label="ФИО"
            class="c-field"
            outlined
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            v-model="item.email"
            label="Почта"
            class="c-field"
            outlined
            :rules="[rules.required, rules.email]"
          ></v-text-field>
        </v-form>
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
        <v-btn depressed class="c-btn" color="var(--blue)" dark @click="send()">
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import rules from '@/utils/rules'

export default {
  name: 'UserEditDialog',
  props: {
    dialog: Boolean,
    title: String,
    item: Object,
  },
  data: () => ({
    valid: false,
    rules,
  }),
  methods: {
    send() {
      this.$refs.form.validate()

      if (this.valid) {
        if (this.item._id) {
          this.$emit('update', this.item)
        } else {
          this.$emit('create', this.item)
        }
      }
    },
  },
  watch: {
    dialog(val) {
      if (val) {
        this.$refs.form?.resetValidation()
      }
    },
  },
}
</script>

<style></style>
