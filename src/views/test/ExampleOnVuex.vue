<template>
  <div class="about">
    <h1>This is how vuex works:</h1>
    <h2>User: {{ user }} </h2>
  </div>
</template>

<script>

import { mapMutations, mapState } from 'vuex';
import { SET_USER_DATA } from '@/store/modules/user/types';
import { Module } from '@/store/modules';

export default {
  name: 'ExampleOnVuex',
  data: () => ({

  }),
  mounted() {
    this.setUserData({
      name: "Test User",
      age: 23
    })
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    })
  },
  methods: {
    ...mapMutations(Module.USER, {
      setUserData: SET_USER_DATA
    })
  },
}
</script>