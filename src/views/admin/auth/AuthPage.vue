<template>
  <div class="auth_wrapper">
      <auth-card></auth-card>
  </div>
</template>

<script>
import AuthCard from './components/AuthCard.vue'
export default {
  components: { AuthCard },
  name: 'AuthPage',
  data: () => ({}),
}
</script>

<style lang="scss">
.auth_wrapper {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--lightgrey);
}
</style>
