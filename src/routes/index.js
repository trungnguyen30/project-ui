//Layout
import { HeaderOnly } from '~/components/Layout';
import { AdminLayout } from '~/components/Layout';
import { UserLayout } from '~/components/Layout';
import { LoginLayout } from '~/components/Layout';
import { SignupLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Product from '~/pages/Product';
import Signup from '~/pages/Signup';
import VGA from '~/pages/Category/VGA';
import CPU from '~/pages/Category/CPU';
import RAM from '~/pages/Category/RAM';
import Admin from '~/pages/Admin';
import Ad_Category from '~/pages/Admin/Category';
import Ad_Product from '~/pages/Admin/Product';
import User from '~/pages/User';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product', component: Product, layout: HeaderOnly },
    { path: '/login', component: Login, layout: LoginLayout },
    { path: '/signup', component: Signup, layout: SignupLayout },
    { path: '/VGA', component: VGA },
    { path: '/CPU', component: CPU },
    { path: '/RAM', component: RAM },
];

const privateRoutes = [
    { path: '/admin', component: Admin, layout: AdminLayout },
    { path: '/ad-cate', component: Ad_Category, layout: AdminLayout },
    { path: '/ad-prod', component: Ad_Product, layout: AdminLayout },
    { path: '/user', component: User, layout: UserLayout },
];

export { publicRoutes, privateRoutes };
