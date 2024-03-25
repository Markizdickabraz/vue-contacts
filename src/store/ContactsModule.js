import axios from "axios";

export const ContactsModule = {
    state: () => ({
        contactsList: [],
        inputAddContact: {
            name: '',
            email: '',
            phone: '',
        }
    }),
    mutations: {
        setContactsList(state, value) {
            state.contactsList = value;
        },
        setInputAddContact(state, value) { 
            state.inputAddContact = value;
        }
    },
    actions: {
        setInputAddContact({ commit }, value) { 
            commit('setInputAddContact', value);
        },
        async getContacts({commit}) {
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
        async addContact({ state, commit }) {
                const storedToken = localStorage.getItem('authToken');
            axios.post('https://poli-back.onrender.com/api/contacts', state.inputAddContact, {
                headers: {
                        Authorization: `Bearer ${storedToken}`,
                }
            })
            state.contactsList.push(state.inputAddContact);
            console.log(state.contactsList);
        }
    },
    namespaced: true
};