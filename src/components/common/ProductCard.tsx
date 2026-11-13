
import type { Product } from '../../data/products'

interface ProductCardProps {
    name: string
    price: number
    image: string
    category: string
    isFavorite: boolean
    onToggleFavorite: () => void
    onAddToCart: () => void
}

function ProductCard({
                         name,
                         price,
                         image,
                         category,
                         isFavorite,
                         onToggleFavorite,
                         onAddToCart
                     }: ProductCardProps) {
    return (
        <div className="product-card">
            <img src={image} alt={name} />

            <div className="product-card-info">
                <p>{category}</p>
                <h3>{name}</h3>
                <strong>
                    {price.toLocaleString('vi-VN')} đ
                </strong>

                <button onClick={onToggleFavorite}>
                    {isFavorite ? '❤️' : '🤍'}
                </button>

                <button onClick={onAddToCart}>
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    )
}

export default ProductCard
