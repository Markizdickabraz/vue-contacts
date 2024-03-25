<template>
    <div>
        <ContactsList />
        <Form>
            <my-input v-model="inputAddContact.name" @input="updateInputContactValue" type="text" placeholder="name" />
            <my-input v-model="inputAddContact.email" @input="updateInputContactValue" type="text" placeholder="email" />
            <my-input v-model="inputAddContact.phone" @input="updateInputContactValue" type="text" placeholder="phone" />
            <my-button @click.prevent="addContact">Add contact</my-button>
        </Form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import ContactsList from '@/components/ContactsList';
import Form from '@/components/Form';


export default {
    components: {
        ContactsList,
        Form
    },
    data() {
        return {
            inputAddContact: {
                name: '',
                email: '',
                phone: '',
            }
        };
    },
    methods: {
        ...mapActions('contacts', {
            getContacts: 'getContacts',
            setInputAddContactValue: 'setInputAddContact',
            addContact: 'addContact',
        }),
        updateInputContactValue() {
            this.setInputAddContactValue(this.inputAddContact);
        },
    },
    mounted() {
        this.getContacts();
    }
}
</script>

<style scoped>
</style>
