<template>
  <div class="meeting_chat" ref="messages">
    <div class="meeting_chat_messages" id="container">
      <div
        class="meeting_chat_message"
        v-for="(message, index) in messages"
        :key="index"
        :id="`num-${index}`"
      >
        <div class="message_block">
          <div class="message_author">{{ message.author }}</div>
          <div class="message_text">{{ message.text }}</div>
        </div>
        <div class="message_date">
          {{ message.date | format_date('HH:mm, DD.MM.YYYY') }}
        </div>
      </div>
    </div>

    <div class="meeting_chat_action">
      <v-textarea
        rows="1"
        auto-grow
        name="name"
        placeholder="text..."
        color="var(--blue)"
        id="id"
        outlined
        class="meeting_chat_textfield"
        hide-details
        v-model="text"
        @keydown.enter.exact.prevent="showTxt()"
      ></v-textarea>
      <v-btn class="meeting_chat_send-btn" icon color="var(--blue)">
        <v-icon> mdi-send </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { format_date } from '@/utils/time'

export default {
  name: 'MettingChat',
  props: {
    meetings: Array,
  },
  data: () => ({
    text: '',
    messages: [
      {
        text: 'asdasd',
        date: new Date(),
        author: 'Mark Avreliy',
      },
    ],
  }),
  methods: {
    showTxt() {
      const trimmed_text = this.text.trim().replace(/\s\s+/g, ' ')
      console.log(trimmed_text)

      if (trimmed_text) {
        this.messages.push({
          text: trimmed_text,
          date: new Date(),
          author: 'Mark Avreliy',
        })
        console.log(trimmed_text)
        this.text = ''
        this.$emit('scrollToEnd')
      }
    },
  },
  filters: {
    format_date,
  },
}
</script>

<style lang="scss">
.meeting_chat {
  //   padding-bottom: 30px;
}

.meeting_chat_action {
  position: absolute;
  bottom: 10px;
  display: flex;
  align-items: center;
  width: 100%;
}

.meeting_chat_textfield {
  width: 100%;
  border-radius: var(--radius);

  .v-input__slot {
    background-color: var(--lightgrey) !important;
    padding: 6px 24px !important;

    & fieldset {
      border-color: var(--lightgrey);
      color: var(--lightgrey);

      &:focus {
        border-color: var(--blue) !important;
      }
    }
  }
}

.meeting_chat_send-btn {
  margin: 0 12px;
}

.meeting_chat_messages {
  margin-bottom: 70px;
}
.meeting_chat_message {
  display: flex;
}

.message_block {
  border-radius: var(--radius);
  background-color: var(--lightgrey);
  padding: 12px 16px;
  max-width: 675px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
}

.message_author {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  color: var(--blue);
}

.message_date {
  color: var(--dark);
}

.message_date {
  font-weight: 500;
  font-size: 10px;
  line-height: 9px;
  align-self: flex-end;
  margin-left: 5px;
  margin-bottom: 10px;
  color: var(--dark);
}
</style>
