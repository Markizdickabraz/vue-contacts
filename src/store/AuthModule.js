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
  },
  actions: {
      setAuthInputValue({ commit }, value) {
        commit('setInputValue', value);
      },

      setChangePage({ commit }, value) {
          commit('setChangePage', value);
      },
      setRegisterOrLoginValue({ commit }, value) { 
          commit('setRegisterOrLoginValue', value);
      },
      async registerOrLogin({ state, commit }) {
          console.log(state, 'state')
        try {
        await axios.post(`https://poli-back.onrender.com/api/user/${state.registerOrLoginValue}`, state.authInputValue);
          commit('setIsLogin', true);
          router.push(state.changePage);
      } catch (error) {
        console.error('Error registering user:', error);
      }
    },
  },
  namespaced: true
}
