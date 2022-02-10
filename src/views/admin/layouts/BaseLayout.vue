<template>
    <div class="client_wrapper">
        <div class="client_sidebar_wrapper">
            <side-bar></side-bar>
        </div>
        <div class="client_content_wrapper">
            <nav-bar></nav-bar>
            <router-view />
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar';
import SideBar from "../components/SideBar";
export default {
    components: { SideBar, NavBar },
    name: "BaseLayout",
};
</script>

<style lang="scss">
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
    padding: 50px 80px;
    padding-bottom: 30px;
    overflow-y: scroll;
}
</style>