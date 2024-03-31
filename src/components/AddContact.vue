<template>
    <Form>
        <my-input v-model="inputAddContact.name" @input="updateInputContactValue" type="text" placeholder="name" />
        <my-input v-model="inputAddContact.email" @input="updateInputContactValue" type="email" placeholder="email" />
        <my-input v-model="inputAddContact.phone" @input="updateInputContactValue" type="text" placeholder="phone" />
        <my-button @click.prevent="addContactFunc">Add contact</my-button>
    </Form>
</template>

<script>
import { mapActions } from 'vuex';
import Form from '@/components/Form';

export default {
    components: {
        Form,
    },
    data() {
        return {
            inputAddContact: {
                name: '',
                email: '',
                phone: '',
            },

        };
    },
    methods: {
        ...mapActions('contacts', {
            addContact: 'addContact',
            setInputAddContactValue: 'setInputAddContact',
        }),
        updateInputContactValue() {
            this.setInputAddContactValue(this.inputAddContact);
        },
        addContactFunc() {
             this.addContact(this.inputAddContact);
             this.$emit('contactAdded');
             this.clearForm(); 
        },
        clearForm() {
            this.inputAddContact = {
                name: '',
                email: '',
                phone: '',
            };
        },
    }
}

</script>