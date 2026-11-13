
import { useParams, Link } from 'react-router-dom';
import { products } from './ListProduct';

function ProductDetail() {
    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <div className="container py-4">
                <h2>Không tìm thấy sản phẩm</h2>
                <Link to="/products" className="btn btn-primary">Quay lại danh sách</Link>
            </div>
        );
    }

    return (
        <div className="container py-4">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={product.image} className="img-fluid rounded-start" alt={product.name}/>
                    </div>

                    <div className="col-md-7">
                        <div className="card-body">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <h4 className="text-danger">{product.price.toLocaleString('vi-VN')}đ</h4>
                            <button className="btn btn-primary me-2">Thêm vào giỏ hàng</button>
                            <Link to="/products" className="btn btn-secondary">Quay lại</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
