<template>
    <form class="form"> 
        <slot></slot>
    </form>
</template>

<script>

</script>

<style scoped>
.form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    height: 100%;
}
</style>