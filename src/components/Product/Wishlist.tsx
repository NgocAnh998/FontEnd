import { useSelector } from 'react-redux';

import type { RootState } from '../../store/Store';
import EmptyState from '../common/EmptyState';
import ProductItem from './ProductItem';

function Wishlist() {
    const products = useSelector(
        (state: RootState) => state.products
    );

    const wishlist = useSelector(
        (state: RootState) => state.wishlist.items
    );

    const favoriteProducts = products.filter(
        (product) => wishlist.includes(product.id)
    );

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="section-title mb-0">
                    <i className="bi bi-heart-fill text-danger me-2"></i>
                    Sản phẩm yêu thích
                </h2>

                <span className="badge badge-handmade rounded-pill px-3 py-2">
                    {favoriteProducts.length} sản phẩm
                </span>
            </div>

            <div className="row g-4">
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                ) : (
                    <EmptyState
                        icon="bi-heart"
                        title="Danh sách yêu thích đang trống"
                        text="Hãy thêm sản phẩm mà bạn yêu thích nhé!"
                        actionTo="/products"
                        actionLabel="Khám phá sản phẩm"
                    />
                )}
            </div>
        </div>
    );
}

export default Wishlist;