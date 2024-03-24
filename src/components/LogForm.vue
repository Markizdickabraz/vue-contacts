<template>
    <Form>
        <my-input v-model="login.email" @input="updateAuthInputValue" type="text" placeholder="email" />
        <my-input v-model="login.password" @input="updateAuthInputValue" type="text" placeholder="password" />
        <my-button @click.prevent="loginUser">Login</my-button>
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
            login: {
                email: '',
                password: '',
            }
        };
    },
    methods: {
        ...mapActions({
            loginUser: 'auth/registerOrLogin',
            setAuthInputValue: 'auth/setAuthInputValue',
            setChangePage: 'auth/setChangePage',
            setRegisterOrLoginValue: 'auth/setRegisterOrLoginValue',
        }),
        updateAuthInputValue() {
            this.setAuthInputValue(this.login);
        },
    },
    mounted() {
        this.setChangePage('./contacts');
        this.setRegisterOrLoginValue('/login');
    }
}
</script>

<style scoped></style>
