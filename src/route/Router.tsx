import {createBrowserRouter, Router} from "react-router-dom";
import Home from "../components/Home"
import ListProduct from "../components/Product/ListProduct.tsx";
import Layout from "./Layout.tsx";
import Error from "./Error.tsx";
import ProductDetail from '../components/Product/ProductDetail';

const dataLoader = ()=>{
    const data = [
        {
            id: 1,
            name: 'Áo thun nam',
            price: 199000,
            image: 'https://placehold.co/400x300?text=Ao+thun',
            description: 'Áo thun cotton thoáng mát'
        },
        {
            id: 2,
            name: 'Giày thể thao',
            price: 599000,
            image: 'https://placehold.co/400x300?text=Giay',
            description: 'Giày thể thao năng động'
        },
        {
            id: 3,
            name: 'Ba lô thời trang',
            price: 349000,
            image: 'https://placehold.co/400x300?text=Ba+lo',
            description: 'Ba lô tiện lợi khi đi học'
        },
        {
            id: 4,
            name: 'Đồng hồ nam',
            price: 899000,
            image: 'https://placehold.co/400x300?text=Dong+ho',
            description: 'Đồng hồ phong cách hiện đại'
        }
    ];
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <Error/>,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"products",
                element:<ListProduct/>,
                loader:dataLoader
            },{
                path: 'products/:id',
                element: <ProductDetail />,
                loader:dataLoader
            }

        ]
    }
]);