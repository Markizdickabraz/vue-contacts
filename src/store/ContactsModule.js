import axios from "axios";

export const ContactsModule = {
    state: () => ({
        contactsList: [],
        inputAddContact: {
            name: '',
            email: '',
            phone: '',
        },
    }),
    mutations: {
        setContactsList(state, value) {
            state.contactsList = value;
        },
        setInputAddContact(state, value) {
            state.inputAddContact = { ...value };
        },
        deleteContactFromList(state, contactId) {
            state.contactsList = state.contactsList.filter(contact => contact._id !== contactId);
        },
    },
    actions: {
        setInputAddContact({ commit }, value) {
            commit('setInputAddContact', value);
        },
        async getContacts({ commit }) {
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
            try {
                const storedToken = localStorage.getItem('authToken');
                await axios.post('https://poli-back.onrender.com/api/contacts', state.inputAddContact, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                    }
                })
                commit('setContactsList', [...state.contactsList, state.inputAddContact]);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteContact({ commit }, contactId) {
            try {
                const storedToken = localStorage.getItem('authToken');
                await axios.delete(`https://poli-back.onrender.com/api/contacts/${contactId}`, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                    }
                });
                    commit('deleteContactFromList', contactId);
                } catch (error) {
                    console.log(error.message);
                }
            },
    },
    namespaced: true
}