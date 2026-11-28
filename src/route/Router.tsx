import { createBrowserRouter } from "react-router-dom";
import Wishlist from "../components/Product/Wishlist";
import Home from "../components/Home";
import ListProduct from "../components/Product/ListProduct";
import ProductDetail from "../components/Product/ProductDetail";
import Layout from "./Layout";
import Error from "./Error";
import Profile from "../components/Profile/Profile";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import LayoutAdmin from "./admin/LayoutAdmin.tsx";
import DashboardAdmin from "../pages/admin/DashBoard.tsx";




import ForgotPassword from "../components/Auth/ForgotPassword";
import Orders from "../pages/Orders/Orders.tsx";
import Vouchers from "../pages/Vouchers/Vouchers.tsx";
import  Addresses from "../pages/Addresses/Addresses.tsx"
import Messages from "../pages/Messages/Messages";

import AdminUser from "../pages/admin/User/AdminUser";
import AdminOrder from "../pages/admin/order/AdminOrder.tsx";
import AdminProduct from "../pages/admin/Product/AdminProduct.tsx";

import AdminInventory from "../pages/admin/inventory/AdminInventory";
import AdminPayment from "../pages/admin/payment/AdminPayment";
import AdminShipping from "../pages/admin/shipping/AdminShipping";
import AdminPromotion from "../pages/admin/promotion/AdminPromotion";
import AdminReview from "../pages/admin/review/AdminReview";
import AdminSupport from "../pages/admin/support/AdminSupport";
import AdminCategory from "../pages/admin/category/AdminCategory";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />

            },
            {
                path: "products",
                element: <ListProduct />
            },
            {
                path: "products/:id",
                element: <ProductDetail />
            },
            {
                path: "wishlist",
                element: <Wishlist />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "login",
                element: <Login />
            },
            { path: "register", element: <Register /> },
            { path: "forgot-password", element: <ForgotPassword /> },
            { path:"/profile/orders", element:<Orders /> },
            { path: "/profile/vouchers", element: <Vouchers/>},
            { path: "/profile/addresses", element: <Addresses />},
            { path: "/profile/messages", element: <Messages />},


        ]
    },
    {
        path: "/admin",
        element: <LayoutAdmin />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <DashboardAdmin />,
            },{
                path: "users",
                element: <AdminUser />,
            },{
                path: "products",
                element: <AdminProduct />,
            },
            {
                path: "orders",
                element: <AdminOrder />,
            },
            {
                path: "inventory",
                element: <AdminInventory />
            },
            {
                path: "payments",
                element: <AdminPayment />
            },
            {
                path: "shipping",
                element: <AdminShipping />
            },
            {
                path: "promotions",
                element: <AdminPromotion />
            },
            {
                path: "reviews",
                element: <AdminReview />
            },
            {
                path: "support",
                element: <AdminSupport />
            },
            {
                path: "categories",
                element: <AdminCategory />
            }
        ],
    },
]);