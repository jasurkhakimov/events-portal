<template>
  <v-card class="py-3 c_border">
    <v-card-title>
      <span class="bold">Документы</span>
    </v-card-title>

    <v-card-text class="pb-0">
      <v-form ref="form" v-model="valid" class="mt-5">
        <v-file-input
          class="c-field"
          outlined
          truncate-length="15"
          placeholder="Выберите файл"
        ></v-file-input>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MeetingInfoDocs',
  data: () => ({
    valid: false,
  }),
}
</script>

<style></style>
