import axios from 'axios';

export const AuthModule = {
    state: () => ({
        isLogin: false,
        authInputValue: {
            email: '',
            password: '',
        }
    }),
    mutations: {
        setIsLogin(state, value) {
            state.isLogin = value;
        },
        setInputValue(state, value) { 
            state.authInputValue = value;
        }
    },
    actions: {
        async register({ state, commit }, router) {
            try {
                await axios.post('https://poli-back.onrender.com/api/user/register', state.authInputValue);
                commit('setIsLogin', true);
            } catch (error) {
                console.error('Error registering user:', error);
            }
        },
        setAuthInputValue({ commit }, value) {
            commit('setInputValue', value);
        }
    },
    namespaced: true
}