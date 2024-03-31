import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home';
import RegForm from '@/components/RegForm';
import LogForm from '@/components/LogForm';
import Contacts from '@/pages/Contacts';
import store from '@/store';


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
        meta: {requiresAuth: true}
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

// router.beforeEach((to, from, next) => {
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//     console.log(requiresAuth);
//     const isLogin = store.state.auth.isLogin;
//     console.log(store.state.auth.isLogin)

//   if (requiresAuth && !isLogin) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;