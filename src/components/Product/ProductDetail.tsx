import { useParams, Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    selectIsFavorite,
    selectProductById,
    selectProducts
} from '../../store/selectors';
import { toggleWishlist } from '../../store/slice/WishlistSlice';
import Breadcrumbs from '../common/Breadcrumbs';
import EmptyState from '../common/EmptyState';
import ProductItem from './ProductItem';

function ProductDetail() {
    const { id } = useParams();

    const dispatch = useAppDispatch();

    const products = useAppSelector(selectProducts);
    const product = useAppSelector(selectProductById(id));
    const isFavorite = useAppSelector(selectIsFavorite(id ?? ''));

    if (!product) {
        return (
            <div className="row">
                <EmptyState
                    icon="bi-emoji-frown"
                    title="Không tìm thấy sản phẩm"
                    text="Sản phẩm bạn tìm có thể đã bị xóa hoặc không tồn tại."
                    actionTo="/products"
                    actionLabel="Quay lại danh sách"
                />
            </div>
        );
    }

    const discount = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0;

    const relatedProducts = products.filter(
        (item) =>
            item.category === product.category &&
            item.id !== product.id
    );

    return (
        <div>
            <Breadcrumbs
                items={[
                    { label: 'Trang chủ', to: '/' },
                    { label: 'Sản phẩm', to: '/products' },
                    { label: product.name }
                ]}
            />

            <div className="card shadow-sm">
                <div className="row g-0">
                    <div className="col-md-5">
                        <div className="ratio ratio-1x1">
                            <img
                                src={product.image}
                                className="rounded-start object-fit-cover"
                                alt={product.name}
                            />
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="card-body p-4">
                            <span className="badge badge-handmade mb-3">
                                {product.category}
                            </span>

                            <h2 className="mb-2">{product.name}</h2>

                            <p className="text-muted-custom mb-3">
                                <i className="bi bi-star-fill text-warning me-1"></i>
                                {product.rating}
                                <span className="mx-2">|</span>
                                Đã bán {product.soldCount}
                            </p>

                            <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                <h3 className="text-danger mb-0">
                                    {product.price.toLocaleString('vi-VN')}đ
                                </h3>

                                {product.originalPrice && (
                                    <del className="text-muted-custom">
                                        {product.originalPrice.toLocaleString('vi-VN')}đ
                                    </del>
                                )}

                                {discount > 0 && (
                                    <span className="badge badge-sale">-{discount}%</span>
                                )}
                            </div>

                            <p
                                className={`fw-semibold ${
                                    product.inStock ? 'text-success' : 'text-danger'
                                }`}
                            >
                                <i
                                    className={`bi me-1 ${
                                        product.inStock ? 'bi-check-circle' : 'bi-x-circle'
                                    }`}
                                ></i>
                                {product.inStock
                                    ? 'Sản phẩm còn hàng'
                                    : 'Sản phẩm đã hết hàng'}
                            </p>

                            <div className="accordion mb-4" id="productAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseDescription"
                                            aria-expanded="true"
                                            aria-controls="collapseDescription"
                                        >
                                            Mô tả sản phẩm
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseDescription"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#productAccordion"
                                    >
                                        <div className="accordion-body">
                                            {product.description}
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseMaterials"
                                            aria-expanded="false"
                                            aria-controls="collapseMaterials"
                                        >
                                            Chất liệu
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseMaterials"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#productAccordion"
                                    >
                                        <div className="accordion-body d-flex flex-wrap gap-2">
                                            {product.materials.map((material, index) => (
                                                <span
                                                    key={index}
                                                    className="badge badge-handmade fs-6"
                                                >
                                                    {material}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    className={`btn ${
                                        isFavorite ? 'btn-danger' : 'btn-outline-danger'
                                    }`}
                                    onClick={() => dispatch(toggleWishlist(product.id))}
                                >
                                    <i
                                        className={`bi me-2 ${
                                            isFavorite ? 'bi-heart-fill' : 'bi-heart'
                                        }`}
                                    ></i>
                                    {isFavorite ? 'Đã yêu thích' : 'Thêm yêu thích'}
                                </button>

                                <Link to="/products" className="btn btn-outline-secondary">
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Quay lại
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="section-title mb-4">Sản phẩm liên quan</h3>

                <div className="row g-4">
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((item) => (
                            <ProductItem key={item.id} product={item} />
                        ))
                    ) : (
                        <p className="text-muted-custom">
                            Chưa có sản phẩm liên quan.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;