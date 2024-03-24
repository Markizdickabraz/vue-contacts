<template>
    <div class="contact">
            <div><strong>Name: </strong>{{contact.name }}</div>
            <div><strong>Email: </strong>{{contact.email }}</div>
            <div><strong>Phone: </strong>{{contact.phone }}</div>
    </div>
</template>

<script>

export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>

.contact {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

</style>