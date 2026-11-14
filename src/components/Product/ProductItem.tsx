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

    const handleWishlist = () => {
        dispatch(toggleWishlist(product.id));
    };

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

                    <p className="text-muted">
                        ⭐ {product.rating} | Đã bán {product.soldCount}
                    </p>

                    <h5 className="text-danger">
                        {product.price.toLocaleString('vi-VN')}đ
                    </h5>

                    <p className={product.inStock ? 'text-success' : 'text-danger'}>
                        {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                    </p>

                    <button
                        className={`btn mb-2 ${
                            isFavorite ? 'btn-danger' : 'btn-outline-danger'
                        }`}
                        onClick={handleWishlist}
                    >
                        {isFavorite ? '♥ Đã yêu thích' : '♡ Thêm yêu thích'}
                    </button>

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