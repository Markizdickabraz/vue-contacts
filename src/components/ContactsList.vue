<template>
    <div class="contacts__container">
        <div v-if="contactsList.length > 0">
            <h3 class="contacts__title">Contacts List</h3>

            <transition-group name="contact-list">
                <ContactsItem v-for="contact in contactsList" :contact="contact" :key="contact._id" />
            </transition-group>

        </div>

        <h2 class="contacts__title" v-else style="color:red">
            Contacts not found
        </h2>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ContactsItem from '@/components/ContactsItem';

export default {
    components: {
        ContactsItem,
    },
    computed: {
        ...mapState('contacts', ['contactsList'])
    },
}
</script>

<style scoped>
.contacts__container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contacts__title{
    padding-bottom: 20px;
    text-align: center;
}

.contact-list-item {
    display: inline-block;
    margin-right: 10px;
}

.contact-list-enter-active,
.contact-list-leave-active {
    transition: all 0.4s ease;
}

.contact-list-enter-from,
.contact-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}

.contact-list-move {
    transition: transform 0.4s ease;
}

h1 {
    text-align: center;
}
</style>
