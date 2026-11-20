import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import type { Product } from '../../types/product';
import type { RootState, AppDispatch } from '../../store/Store';
import { toggleWishlist } from '../../store/slice/WishlistSlice';

function ProductItem({ product }: { product: Product }) {
    const dispatch = useDispatch<AppDispatch>();

    const wishlist = useSelector(
        (state: RootState) => state.wishlist.items
    );

    const isFavorite = wishlist.includes(product.id);

    const discount = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0;

    const handleWishlist = () => {
        dispatch(toggleWishlist(product.id));
    };

    return (
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card-product h-100 shadow-sm position-relative">
                <button
                    type="button"
                    className={`wishlist-toggle btn btn-light shadow-sm ${
                        isFavorite ? 'text-danger' : 'text-secondary'
                    }`}
                    onClick={handleWishlist}
                    aria-label={isFavorite ? 'Bỏ yêu thích' : 'Thêm yêu thích'}
                >
                    <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                </button>

                {discount > 0 && (
                    <span className="badge badge-sale position-absolute top-0 start-0 m-3">
                        -{discount}%
                    </span>
                )}

                <Link to={`/products/${product.id}`}>
                    <img
                        src={product.image}
                        className="card-img-top product-img"
                        alt={product.name}
                    />
                </Link>

                <div className="card-body d-flex flex-column">
                    <span className="badge badge-handmade align-self-start mb-2">
                        {product.category}
                    </span>

                    <h5 className="card-title product-title">{product.name}</h5>

                    <div className="d-flex justify-content-between small text-muted-custom mb-2">
                        <span>
                            <i className="bi bi-star-fill text-warning me-1"></i>
                            {product.rating}
                        </span>
                        <span>Đã bán {product.soldCount}</span>
                    </div>

                    <div className="d-flex align-items-baseline gap-2 mb-2">
                        <span className="fs-5 fw-bold text-danger">
                            {product.price.toLocaleString('vi-VN')}đ
                        </span>

                        {product.originalPrice && (
                            <del className="small text-muted-custom">
                                {product.originalPrice.toLocaleString('vi-VN')}đ
                            </del>
                        )}
                    </div>

                    <span
                        className={`small mb-3 ${
                            product.inStock ? 'text-success' : 'text-danger'
                        }`}
                    >
                        <i
                            className={`bi me-1 ${
                                product.inStock ? 'bi-check-circle' : 'bi-x-circle'
                            }`}
                        ></i>
                        {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                    </span>

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