<template>
        <Form>
            <my-input v-model="register.email" @input="updateAuthInputValue" type="email" placeholder="email" />
            <my-input v-model="register.password" @input="updateAuthInputValue" type="text" placeholder="password" />
            <my-button @click.prevent="registerUser">Registration</my-button>
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
        this.setChangePage('./login');
        this.setRegisterOrLoginValue('/register');
    }
}
</script>

<style scoped>
</style>
