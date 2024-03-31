<template>
        <div class="contact" :id="contact._id">
            <div><strong>Name: </strong>{{ contact.name }}</div>
            <div><strong>Email: </strong>{{ contact.email }}</div>
            <div><strong>Phone: </strong>{{ contact.phone }}</div>
            <my-button @click="deleteContact(contact._id)">delete</my-button>
        </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    },
    methods: {
        ...mapActions('contacts', ['deleteContact'])
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