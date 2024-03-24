import axios from "axios";

export const ContactsModule = {
    state: () => ({
        contactsList: [],
    }),
    mutations: {
        setContactsList(state, value) {
            state.contactsList = value;
        }
    },
    actions: {
        async getContacts({commit, rootState }) {
            try {
                const storedToken = localStorage.getItem('authToken');
                const response = await axios.get('https://poli-back.onrender.com/api/contacts', {
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                    }
                });
                commit('setContactsList', response.data);
            } catch (err) {
                console.log(err);
            }
        },
        // async addContact({ state, commit }) {
        //     const 
        // }
    },
    namespaced: true
};