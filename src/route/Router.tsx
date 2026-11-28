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
import AdminUser from "../pages/admin/User/AdminUser.tsx";
import AdminOrder from "../pages/admin/order/AdminOrder.tsx";
import AdminProduct from "../pages/admin/Product/AdminProduct.tsx";

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
        ],
    },
]);