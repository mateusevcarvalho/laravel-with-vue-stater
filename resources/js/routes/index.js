import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.map'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
