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
            label="Наименование"
            class="c-field"
            outlined
            dense
            :rules="[rules.required]"
            :disabled="Boolean(item.status) && item.status != 0"
          ></v-text-field>
          <v-text-field
            v-model="item.subject"
            label="Тема"
            class="c-field"
            outlined
            dense
            :rules="[rules.required]"
            :disabled="Boolean(item.status) && item.status != 0"
          ></v-text-field>
          <v-text-field
            v-model="item.desc"
            label="Описание"
            class="c-field"
            outlined
            dense
            :rules="[rules.required]"
            :disabled="Boolean(item.status) && item.status != 0"
          ></v-text-field>
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="computedDateFormattedMomentjs"
                label="Дата"
                class="c-field"
                readonly
                outlined
                dense
                v-bind="attrs"
                v-on="on"
                :rules="[rules.required]"
                :disabled="Boolean(item.status) && item.status != 0"
              ></v-text-field>
            </template>
            <v-date-picker
              v-if="!menu2"
              v-model="date"
              @change="menu2 = true"
              locale="ru-ru"
            ></v-date-picker>
            <v-time-picker
              v-else
              v-model="time"
              full-width
              format="24hr"
              @click:minute="menu1 = menu2 = false"
            ></v-time-picker>
          </v-menu>
          <v-autocomplete
            v-model="item.groups"
            :items="groups"
            outlined
            dense
            chips
            small-chips
            label="Группы"
            item-value="id"
            item-text="name"
            multiple
            class="c-field"
            :disabled="item.status > 1"
          ></v-autocomplete>
          <v-autocomplete
            v-model="item.observers"
            :items="observers"
            outlined
            dense
            chips
            small-chips
            label="Наблюдатели"
            item-value="id"
            item-text="name"
            multiple
            class="c-field"
          ></v-autocomplete>
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
import moment from 'moment'

export default {
  name: 'MeetingEditDialog',
  props: {
    dialog: Boolean,
    title: String,
    item: Object,
    observers: Array,
    groups: Array,
  },
  data: () => ({
    valid: false,
    rules,
    menu1: false,
    menu2: false,
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

      if (this.item._id) {
        this.$emit('get_members', this.item._id)
      }
    },
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.item.date
        ? moment(this.item.date).format('DD/MM/YYYY HH:mm')
        : ''
    },
    date: {
      set(date) {
        this.$emit(
          'set_date',
          moment(date + ' ' + this.time)
            // .utcOffset(5)
            .toISOString()
        )
      },
      get() {
        return moment(this.item.date).format('YYYY-MM-DD')
      },
    },
    time: {
      set(time) {
        console.log(
          moment(this.date + ' ' + time)
            // .utcOffset(5)
            .toISOString()
        )
        this.$emit(
          'set_date',
          moment(this.date + ' ' + time)
            // .utcOffset(5)
            .toISOString()
        )
      },
      get() {
        return moment(this.item.date).format('HH:mm')
      },
    },
  },
}
</script>

<style></style>
