<template>
    <div>
        <my-button @click='showDialog'>
            Add contact
        </my-button>
        <ContactsList />

        <my-dialog v-model:show="dialogVisible">
            <AddContact :dialogVisible="dialogVisible" @contactAdded="handleContactAdded"></AddContact>
        </my-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import ContactsList from '@/components/ContactsList';
import AddContact from '@/components/AddContact';

export default {
    components: {
        ContactsList,
        AddContact,
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        ...mapActions('contacts', {
            getContacts: 'getContacts',
        }),
        showDialog() {
            this.dialogVisible = true;
        },
        handleContactAdded() {
            this.dialogVisible = false;
        }
    },
    mounted() {
        this.getContacts();
    }
}
</script>

<style scoped>
</style>
