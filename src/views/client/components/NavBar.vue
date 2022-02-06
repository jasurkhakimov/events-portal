<template>
    <div class="navbar">
        <div class="user_name">Jonh Doe</div>
        <v-btn depressed color="var(--lightred)" class="exit_btn error--text"> Выход </v-btn>
    </div>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style lang="scss">
.navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;    
}
.user_name {
    font-weight: 500;
    font-size: 18px;
    color: var(--dark);
    margin-right: 60px;
}

.exit_btn {
    border-radius: var(--radius);
    padding: 12px 36px!important;
    font-size: 14px;
    letter-spacing: normal;
    text-transform: lowercase;
    height: 40px!important;
}
</style>