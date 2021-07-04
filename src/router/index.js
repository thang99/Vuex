import Vue from 'vue';
import Router from 'vue-router';
import Home from "../components/Home.vue";
import About from "../components/About.vue";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: "Home",
            component: Home
        },
        {
            path: '/about',
            name: "About",
            component: About
        }
    ]
});

export default router;