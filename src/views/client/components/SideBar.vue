<template>
  <div class="sidebar">
    <div class="sidebar_logo">
      <v-img
        class="logo"
        :src="require('@/assets/img/meetings_logo.svg')"
      ></v-img>
    </div>

    <div class="sidebar_links">
      <router-link class="link" to="">
        <v-icon>mdi-home-variant-outline</v-icon>
        <span> Главная </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar_logo {
  margin-top: 80px;
}
.logo {
  width: 178px;
}

.sidebar_links {
  display: flex;
  flex-direction: column;
}

.link {
  display: flex;
  justify-content: center;
  width: 190px;
  padding: 12px;
  color: var(--grey);
  transition: all 0.2s;
  border-radius: var(--radius);

  & .v-icon {
    color: var(--grey);
  }

  &:hover {
    background-color: var(--blue);
    color: var(--light);

    & .v-icon {
      color: var(--light);
    }
  }
}
</style>
