<template>
<button class="btn">
<slot></slot>
</button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    border-radius: 6px;
    transition: all 0.3s ease;
    cursor: pointer;
    }

.btn:hover {
    color: white;
    background: teal;
}
</style>