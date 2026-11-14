import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/Store';
import ProductItem from './ProductItem';

function ProductDetail() {
    const { id } = useParams();

    const products = useSelector((state: RootState) => state.products);

    const product = products.find(
        (item) => item.id === id
    );

    if (!product) {
        return (
            <div className="container py-4">
                <h2>Không tìm thấy sản phẩm</h2>

                <Link to="/products" className="btn btn-primary">
                    Quay lại danh sách
                </Link>
            </div>
        );
    }

    const relatedProducts = products.filter(
        (item) =>
            item.category === product.category &&
            item.id !== product.id
    );

    return (
        <div className="container py-4">
            <div className="card">
                <div className="row g-0">
                    {/* Hình ảnh */}
                    <div className="col-md-5">
                        <img
                            src={product.image}
                            className="img-fluid rounded-start w-100"
                            alt={product.name}
                            style={{
                                height: '400px',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Thông tin sản phẩm */}
                    <div className="col-md-7">
                        <div className="card-body">
                            <span className="badge bg-secondary mb-3">
                                {product.category}
                            </span>

                            <h2>{product.name}</h2>

                            <p className="text-muted">
                                ⭐ {product.rating} | Đã bán {product.soldCount}
                            </p>

                            <h3 className="text-danger">
                                {product.price.toLocaleString('vi-VN')}đ
                            </h3>

                            {product.originalPrice && (
                                <p className="text-muted">
                                    Giá gốc: <del>
                                    {product.originalPrice.toLocaleString('vi-VN')}đ
                                </del>
                                </p>
                            )}

                            <hr />

                            <h5>Mô tả sản phẩm</h5>
                            <p>{product.description}</p>

                            <h5>Chất liệu</h5>

                            <ul>
                                {product.materials.map((material, index) => (
                                    <li key={index}>{material}</li>
                                ))}
                            </ul>

                            <p className={product.inStock ? 'text-success' : 'text-danger'}>
                                {product.inStock
                                    ? 'Sản phẩm còn hàng'
                                    : 'Sản phẩm đã hết hàng'}
                            </p>

                            <Link
                                to="/products"
                                className="btn btn-secondary"
                            >
                                Quay lại
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sản phẩm liên quan */}
            <div className="mt-5">
                <h3 className="mb-4">Sản phẩm liên quan</h3>

                <div className="row g-4">
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((item) => (
                            <ProductItem
                                key={item.id}
                                product={item}
                            />
                        ))
                    ) : (
                        <p className="text-muted">
                            Chưa có sản phẩm liên quan.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;