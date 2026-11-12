import ListProduct from "./components/Product/ListProduct.tsx";
import Header from "./components/common/Header.tsx";
import Footer from "./components/common/Footer.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./route/Router.tsx";

function App() {
    const products = [
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
    return (
        <RouterProvider router={router}/>
    )
}

export default App