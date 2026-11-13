import { useParams, Link } from 'react-router-dom';

export default function ProductItem({ product }: { product: any }) {
    return (
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name}/>

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">{product.description}</p>
                    <h5 className="text-danger">{product.price.toLocaleString('vi-VN')}đ</h5>
                    <button className="btn btn-primary mt-auto">Thêm vào giỏ hàng</button>
                    <Link to={`/products/${product.id}`} className="btn btn-outline-primary mt-2">Xem chi tiết</Link>
                </div>
            </div>
        </div>
    );
}

