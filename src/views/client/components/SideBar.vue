<template>
    <div class="sidebar">
        <div class="sidebar_logo">
            <v-img
                class="logo"
                :src="require('@/assets/img/meetings_logo.svg')"
            ></v-img>
        </div>

        <div class="sidebar_links">
            <router-link active-class="active" class="link" :to="{name: 'client-main'}">
                <v-icon size="20">mdi-home-variant-outline</v-icon>
                <div>Главная</div>
            </router-link>
            <!-- <router-link active-class="active" class="link" :to="{name: 'client-settings'}">
                <v-icon size="20">mdi-cog</v-icon>
                <div>Настройки</div>
            </router-link> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar",
};
</script>

<style lang="scss">
.sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 0;
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
    margin-top: 100px;
}

a.link {
    display: flex;
    justify-content: flex-start;
    width: 190px;
    padding: 12px;
    transition: all 0.2s;
    border-radius: var(--radius);
    align-items: center;
    font-weight: 500;
    gap: 15px;
    margin-bottom: 20px;
    padding-left: 40px;
    font-size: 14px;
    color: var(--grey);

    & .v-icon {
        color: var(--grey);
    }

    &:hover,
    &.active {
        background-color: var(--blue);
        color: var(--light);

        & .v-icon {
            color: var(--light);
        }
    }
}
</style>
