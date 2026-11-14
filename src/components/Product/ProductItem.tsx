import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';

function ProductItem({ product }: { product: Product }) {
    return (
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm">
                <Link to={`/products/${product.id}`}>
                    <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                        style={{ height: '220px', objectFit: 'cover' }}
                    />
                </Link>

                <div className="card-body d-flex flex-column">
                    <span className="badge bg-secondary align-self-start mb-2">
                        {product.category}
                    </span>

                    <h5 className="card-title">{product.name}</h5>

                    <p className="card-text text-muted">
                        ⭐ {product.rating} | Đã bán {product.soldCount}
                    </p>

                    <h5 className="text-danger">
                        {product.price.toLocaleString('vi-VN')}đ
                    </h5>

                    {product.originalPrice && (
                        <del className="text-muted mb-2">
                            {product.originalPrice.toLocaleString('vi-VN')}đ
                        </del>
                    )}

                    <p className={product.inStock ? 'text-success' : 'text-danger'}>
                        {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                    </p>

                    <Link
                        to={`/products/${product.id}`}
                        className="btn btn-outline-primary mt-auto"
                    >
                        Xem chi tiết
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;