
import ProductItem from '../components/Product/ProductItem';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {load} from "../store/slice/ProductListSlice.ts"

export default function ListProduct() {
    const products =  useSelector((state: any) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
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
        dispatch(load(data));

    },[dispatch])

    return (
        <div className="container py-4">
            <h2 className="mb-4">Danh sách sản phẩm</h2>

            <div className="row g-4">
                {products.map((product:any) => (<ProductItem key={product.id} product={product}/>))}
            </div>
        </div>
    );
}

