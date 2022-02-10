<template>
  <v-card class="py-3 c_border">
    <v-card-title>
      <span class="bold">Действия</span>
    </v-card-title>

    <v-card-text class="pb-0">
      <!-- PAGE VISIT BLOCK -->
      <div>
        <v-btn
          v-if="item.id"
          :to="{ name: 'client-meeting', params: { id: item.id } }"
          color="var(--blue)"
          class="c-btn"
          depressed
          dark
          target="_blank"
          outlined
        >
          <span> Посмотреть страницу </span>
          <v-icon small class="ml-2"> mdi-eye-outline </v-icon>
        </v-btn>
      </div>
      <v-divider class="my-4"></v-divider>

      <!-- INPUTS BLOCK -->
      <div>
        <v-text-field
          v-model="item.place"
          label="Место конференции"
          class="c-field mb-4"
          outlined
          hide-details
          prepend-inner-icon="mdi-map-marker-outline"
        ></v-text-field>
        <v-text-field
          v-model="item.link"
          label="Ссылка на видео конференцию"
          class="c-field"
          outlined
          hide-details
          prepend-inner-icon="mdi-link"
        ></v-text-field>
      </div>

      <v-divider class="my-4"></v-divider>

      <!-- STATUS BLOCK -->
      <div>
        <div class="c_border pa-4 my-4">
          <div class="d-flex align-center justify-space-between">
            <div class="bold">Статус:</div>
            <v-chip
              outlined
              dark
              class="bold"
              :color="statuses[item.status].color"
              >{{ statuses[item.status].text }}</v-chip
            >
          </div>
        </div>
        <div class="d-flex align-center ml-4 justify-space-between mt-4">
          <!-- status change -->
          <span class="bold">
            Изменение статуса:
          </span>
          <v-btn
            @click="$emit('update', { ...item, status: item.status + 1 })"
            dark
            depressed
            :color="statuses[item.status + 1].color"
            class="c-btn"
            v-if="item.status < 3"
          >
            {{ statuses[item.status].change_text }}
          </v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MeetingInfoActions',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          status: 0,
        }
      },
    },
  },
  data: () => ({
    valid: false,
    statuses: [
      {
        color: 'var(--grey)',
        text: 'в ожидании',
        change_text: 'открыть',
        status: 0,
      },
      {
        color: 'var(--blue)',
        text: 'открыт',
        change_text: 'на опрос',
        status: 1,
      },
      {
        color: 'var(--green)',
        text: 'опрос',
        change_text: 'завершить',
        status: 2,
      },
      {
        color: 'var(--dark)',
        text: 'завершен',
        change_text: 'завершен',
        status: 3,
      },
    ],
  }),
}
</script>

<style></style>
