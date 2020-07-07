import Vue from 'vue'
import VueRouter from 'vue-router'
// import component
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import ListUsers from '../views/UserList.vue';
import User from '../views/User.vue';
import AddUser from '../views/AddUser.vue';



Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/list-user',
            component: ListUsers
        },
        {
            path: '/user/:id',
            component: User
        },
        {
            path: '/add-user',
            component: AddUser
        },

    ],
    mode: 'history'
})