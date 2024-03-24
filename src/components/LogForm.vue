<template>
    <Form>
        <my-input v-model="register.email" @input="updateAuthInputValue" type="text" placeholder="email" />
        <my-input v-model="register.password" @input="updateAuthInputValue" type="text" placeholder="password" />
        <my-button @click.prevent="registerUser">Login</my-button>
    </Form>
</template>

<script>
import Form from '@/components/Form';
import { mapActions } from 'vuex';

export default {
    components: {
        Form
    },
    data() {
        return {
            register: {
                email: '',
                password: '',
            }
        };
    },
    methods: {
        ...mapActions({
            registerUser: 'auth/registerOrLogin',
            setAuthInputValue: 'auth/setAuthInputValue',
            setChangePage: 'auth/setChangePage',
            setRegisterOrLoginValue: 'auth/setRegisterOrLoginValue',
        }),
        updateAuthInputValue() {
            this.setAuthInputValue(this.register);
        },
    },
    mounted() {
        this.setChangePage('./contacts');
        this.setRegisterOrLoginValue('/login');
    }
}
</script>

<style scoped></style>
