<template>
  <div class="auth_card">
    <div class="auth_logo">
      <img :src="require('@/assets/img/admin_logo.svg')" alt="" class="logo" />
    </div>

    <v-form ref="form" v-model="valid" class="auth_form">
      <v-text-field
        v-model="user.email"
        label="Email"
        class="c-field"
        color="var(--blue)"
        :rules="[rules.required, rules.email]"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        label="Password"
        class="c-field"
        color="var(--blue)"
        outlined
        :rules="[rules.required]"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show = !show"
        :type="show ? 'text' : 'password'"
      ></v-text-field>
      <v-btn @click="auth()" class="auth_btn" depressed dark color="var(--blue)" block>
        Войти
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import rules from '@/utils/rules'

export default {
  name: 'AuthCard',
  data: () => ({
    valid: false,
    user: {
      email: '',
      password: '',
    },
    show: false,
    rules,
  }),
  methods: {
    auth() {
      this.$refs.form.validate()

      if (this.valid) {
        console.log(this.user);
      }
    }
  }
}
</script>

<style lang="scss">
.auth_logo {
  display: flex;
  justify-content: center;
  margin: 24px 0;

  & .logo {
    width: 120px;
  }
}

.auth_card {
  width: 400px;
  background-color: var(--light);
  padding: 24px;
  border-radius: var(--radius);
}

.auth_btn {
  display: block;
  margin-left: auto;
  border-radius: var(--radius);
  height: 48px !important;
  letter-spacing: normal;
}
</style>
