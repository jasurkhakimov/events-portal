<template>
    <div class="heading">
        <slot> </slot>
    </div>
</template>

<script>
export default {
    name: "Heading",
};
</script>

<style>
.heading {
    font-weight: 600;
    font-size: 32px;
    line-height: 37px;
    color: var(--dark);
    margin-bottom: 45px;
}
</style>