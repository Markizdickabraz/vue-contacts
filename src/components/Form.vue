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
    gap: 10px;
    flex-direction: column;
    height: 100%;
    padding: 20px;
}
</style>