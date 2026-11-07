import type { Product } from "../../data/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Product[];
    favoriteIds: number[];
    onToggleFavorite: (productId: number) => void;
    onAddToCart: (product: Product) => void;
}

function ProductList({
                         products,
                         favoriteIds,
                         onToggleFavorite,
                         onAddToCart
                     }: ProductListProps) {

    if (products.length === 0) {
        return (
            <p className="empty-products">
                Không tìm thấy sản phẩm phù hợp.
            </p>
        );
    }

    return (
        <div className="products-list">
            {products.map((product) => (

                <div key={product.id}>
                    {product.name}
                </div>
            ))}
        </div>
    );
}

export default ProductList;