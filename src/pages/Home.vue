<template>
    <div class="start__page">
        <my-button @click="$router.push('/registration')">Registation</my-button>
        <my-button @click="$router.push('/login')">Login</my-button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.start__page {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100%;
}
</style>