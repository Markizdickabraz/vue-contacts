<template>
    <Form>
        <my-input v-model="login.email" type="text" placeholder="email" />
        <my-input v-model="login.password" type="text" placeholder="password" />
        <my-button @click.prevent='handleLogin'>Login</my-button>
    </Form>
</template>

<script>
import Form from '@/components/Form';
import axios from 'axios';
export default {
    components: {
    Form
    },
    data() {
        return {
            isLogin: false,

            login: {
                email: '',
                password: '',
        }
    }
    },
    methods: {
      async handleLogin(){
            try {
                await axios.post('https://poli-back.onrender.com/api/user/login', this.login);
                this.isLogin = true;
        } catch (error) {
                console.log(error);
        }
    }
}
}
</script>

<style scoped>

</style>