<template>
    <div>
        <ContactsList />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import ContactsList from '@/components/ContactsList';

export default {
    components: {
        ContactsList
    },
    methods: {
        ...mapActions('contacts', ['getContacts'])
    },
    mounted() {
        this.getContacts();
    },
    watch: {
        contacts: {
            handler() {
                this.getContacts();
            },
            deep: true
        }
    }
}
</script>

<style scoped>
</style>
