import { useSelector } from 'react-redux';

import type { RootState } from '../../store/Store';
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
        <div className="container py-4">
            <h2 className="mb-4">♥ Sản phẩm yêu thích</h2>

            <p className="text-muted">
                Bạn có {favoriteProducts.length} sản phẩm yêu thích.
            </p>

            <div className="row g-4 mt-2">
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                    ))
                ) : (
                    <div className="col-12 text-center py-5">
                        <h4>Danh sách yêu thích đang trống</h4>

                        <p className="text-muted">
                            Hãy thêm sản phẩm mà bạn yêu thích nhé!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Wishlist;