<template>
  <div class="meeting_action">
    <v-btn
      :disabled="status === 0"
      depressed
      :class="['card_btn', statuses[status].class]"
    >
      {{ statuses[status].text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'MeetingCardAction',
  props: {
    status: Number,
  },
  data: () => ({
    statuses: {
      0: {
        class: 'wait_btn',
        text: 'В ожидании',
      },
      1: {
        class: 'open_btn',
        text: 'Открыть',
      },
      2: {
        class: 'survey_btn',
        text: 'Пройти опрос',
      },
      3: {
        class: 'finished_btn',
        text: 'Завершено',
      },
    },
  }),
}
</script>

<style lang="scss">
.card_btn {
  font-weight: 500;
  font-size: 14px;
  border-radius: var(--radius);
  text-transform: lowercase;
  letter-spacing: normal;
  margin-left: 40px;

  &.v-btn.v-size--default {
    max-width: 150px;
    padding: 12px 46px;
    height: auto;
  }
}

.open_btn {
  &.v-btn.v-btn--has-bg {
    background-color: var(--blue);
  }
  &.v-btn {
    color: var(--light);
  }
}

.survey_btn {
  &.v-btn.v-btn--has-bg {
    background-color: var(--green);
  }
  &.v-btn {
    color: var(--light);
  }
}

.wait_btn {
  &.v-btn.v-btn--disabled.v-btn--has-bg {
    background-color: var(--grey) !important;
  }
  &.v-btn.v-btn--disabled {
    color: var(--light) !important;
  }
}

.finished_btn {
  &.v-btn.v-btn--has-bg {
    background-color: transparent;
    border: 2px solid var(--grey);
  }
  &.v-btn {
    color: var(--grey);
  }
}
</style>
