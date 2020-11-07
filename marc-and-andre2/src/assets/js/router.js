import Vue from 'vue';
import VueRouter from "vue-router";
import Login from './../../components/views/auth/Login';
import Restore from './../../components/views/auth/Restore';
import Users from './../../components/views/users/Users';
import UserProfile from './../../components/views/users/UserProfile';
import Profile from './../../components/views/profile/Profile';
import QuickRegistration from './../../components/views/quick-registration/QuickRegistration';
import Exhibition from './../../components/views/exhibition/Exhibition';
import Catalog from './../../components/views/catalog/Catalog';
import Card from './../../components/views/catalog/Card';
import Orders from './../../components/views/orders/Orders';
import VisualCatalog from './../../components/views/orders/VisualCatalog';
import ShippingAndPayment from './../../components/views/shipping-and-payment/ShippingAndPayment';
import About from './../../components/views/about/About';
import OrderDetails from './../../components/views/order-details/OrderDetails';


Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        { path: '/users', component: Users },
        { path: '/users/:id', component: UserProfile },
        { path: '/login', component: Login },
        { path: '/restore', component: Restore },
        { path: '/profile', component: Profile },
        { path: '/quick-registration', component: QuickRegistration },
        { path: '/exhibition', component: Exhibition },
        { path: '/catalog', component: Catalog },
        { path: '/catalog/:id', component: Card },
        { path: '/orders', component: Orders },
        { path: '/orders/:id', component: VisualCatalog },
        { path: '/shipping-and-payment', component: ShippingAndPayment },
        { path: '/about', component: About },
        { path: '/order-details', component: OrderDetails },
        { path: '*', redirect: '/profile' }
    ],
    mode: 'history'
})