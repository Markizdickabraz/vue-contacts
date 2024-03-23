import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home';
import RegForm from '@/components/RegForm';
import LogForm from '@/components/LogForm';
import Contacts from '@/pages/Contacts';

const routes = [
    {
    path: '/',
    component: Home,
    },
    {
    path: '/registration',
    component: RegForm,
    },
    {
    path: '/login',
    component: LogForm,
    },
    {
    path: '/contacts',
    component: Contacts,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;