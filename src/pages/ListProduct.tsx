
import ProductItem from '../components/Product/ProductItem';


export default function ListProduct({products}: {products: any}) {
    return (
        <div className="container py-4">
            <h2 className="mb-4">Danh sách sản phẩm</h2>

            <div className="row g-4">
                {products.map((product:any) => (<ProductItem key={product.id} product={product}/>))}
            </div>
        </div>
    );
}

