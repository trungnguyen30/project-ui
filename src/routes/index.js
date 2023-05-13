//Layout
import { HeaderOnly } from '~/components/Layout';
import { AdminLayout } from '~/components/Layout';
import { UserLayout } from '~/components/Layout';
import { StaffLayout } from '~/components/Layout';
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
import Ad_Staff from '~/pages/Admin/Staff';
import Ad_Supplier from '~/pages/Admin/Supplier';
import Ad_User from '~/pages/Admin/User';
import User from '~/pages/User';
import User_CPU from '~/pages/User/Category/CPU';
import User_RAM from '~/pages/User/Category/RAM';
import User_VGA from '~/pages/User/Category/VGA';
import Staff from '~/pages/Staff';
import Order from '~/pages/Staff/Order';
import Receipt from '~/pages/Staff/Receipt';
import ShoppingCart from '~/pages/User/ShoppingCart';

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
    { path: '/ad-staff', component: Ad_Staff, layout: AdminLayout },
    { path: '/ad-supplier', component: Ad_Supplier, layout: AdminLayout },
    { path: '/ad-user', component: Ad_User, layout: AdminLayout },
    { path: '/user', component: User, layout: UserLayout },
    { path: '/user-CPU', component: User_CPU, layout: UserLayout },
    { path: '/user-RAM', component: User_RAM, layout: UserLayout },
    { path: '/user-VGA', component: User_VGA, layout: UserLayout },
    { path: '/shopping-cart', component: ShoppingCart, layout: UserLayout },
    { path: '/staff', component: Staff, layout: StaffLayout },
    { path: '/order', component: Order, layout: StaffLayout },
    { path: '/receipt', component: Receipt, layout: StaffLayout },
];

export { publicRoutes, privateRoutes };
