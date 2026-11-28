import { useAppSelector } from '../../store/hooks';
import { selectFavoriteProducts } from '../../store/selectors';
import EmptyState from '../common/EmptyState';
import ProductItem from './ProductItem';

function Wishlist() {
    const favoriteProducts = useAppSelector(selectFavoriteProducts);

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