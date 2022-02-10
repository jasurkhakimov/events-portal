<template>
    <div class="sidebar">
        <div class="sidebar_logo">
            <v-img
                class="logo"
                :src="require('@/assets/img/admin_logo.svg')"
            ></v-img>
        </div>

        <div class="sidebar_links">
            <router-link active-class="active" class="link" :to="{name: 'admin-users'}">
                <v-icon size="20">mdi-account</v-icon>
                <div>Пользователи</div>
            </router-link>
            <router-link active-class="active" class="link" :to="{name: 'admin-groups'}">
                <v-icon size="20">mdi-account-group</v-icon>
                <div>Группы</div>
            </router-link>
            <router-link active-class="active" class="link" :to="{name: 'admin-meetings'}">
                <v-icon size="20">mdi-forum</v-icon>
                <div>Обсуждения</div>
            </router-link>
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
