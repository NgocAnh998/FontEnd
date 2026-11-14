import { createBrowserRouter } from "react-router-dom";
import Wishlist from "../components/Product/Wishlist";
import Home from "../components/Home";
import ListProduct from "../components/Product/ListProduct";
import ProductDetail from "../components/Product/ProductDetail";
import Layout from "./Layout";
import Error from "./Error";

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
            }
        ]
    }
]);