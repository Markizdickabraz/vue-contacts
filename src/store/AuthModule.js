import axios from 'axios';
import router from '@/router/router';

export const AuthModule = {
  state: () => ({
    isLogin: false,
    authInputValue: {
      email: '',
      password: '',
        },
        changePage: '',
        registerOrLoginValue: '',
        authToken: '',
  }),
  mutations: {
    setIsLogin(state, value) {
      state.isLogin = value;
    },
    setInputValue(state, value) { 
      state.authInputValue = value;
    },
    setChangePage(state, value) { 
        state.changePage = value;
      },
    setRegisterOrLoginValue(state, value) { 
        state.registerOrLoginValue = value;
      },
      setAuthToken(state, value) {
          state.authToken = value;
      }
  },
  actions: {
      setAuthInputValue({ commit}, value) {
          commit('setInputValue', value);
      },

      setChangePage({ commit }, value) {
          commit('setChangePage', value);
      },
      setRegisterOrLoginValue({ commit }, value) { 
          commit('setRegisterOrLoginValue', value);
      },
      setAuthToken({ commit }, value) { 
          commit('setAuthToken', value);
      },
      async registerOrLogin({ state, commit }) {
        try {
            const response = await axios.post(`https://poli-back.onrender.com/api/user/${state.registerOrLoginValue}`, state.authInputValue);
            const authToken = response.data.token;
            commit('setIsLogin', true);
            commit('setAuthToken', authToken);
            localStorage.setItem('authToken', authToken); 
            router.push(state.changePage);
      } catch (error) {
        console.error(error.message);
      }
    },
    },
    getters: {
        isAuthenticated(state) {
            return !!state.authToken; // Перевірка, чи користувач має авторизацію
        }
    },
  namespaced: true
}
