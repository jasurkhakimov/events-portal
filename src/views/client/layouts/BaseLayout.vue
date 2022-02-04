<template>
    <div class="client_wrapper">
        <div class="client_sidebar_wrapper">
            <side-bar></side-bar>
        </div>
        <div class="client_content_wrapper">
            <router-view />
        </div>
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
    export default {
  components: { SideBar },
        name: 'BaseLayout'
    }
</script>

<style lang="scss" scoped>
.client_wrapper {
    display: flex;
    min-height: 100vh;
}

.client_sidebar_wrapper {
    flex-shrink: 1;
    min-width: 320px;
    background-color: var(--lightgrey);
}

.client_content_wrapper {
    flex-grow: 2;
    background-color: var(--light);
}
</style>