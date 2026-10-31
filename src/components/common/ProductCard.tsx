import FavoriteButton from './FavoriteButton'

type ProductCardProps = {
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
            <img
                src={image}
                alt={name}
                className="product-image"
            />

            <div className="product-info">
                <p className="product-category">{category}</p>

                <h3 className="product-name">{name}</h3>

                <p className="product-price">
                    {price.toLocaleString('vi-VN')}đ
                </p>

                <div className="product-card-actions">
                    <button
                        type="button"
                        className="product-button"
                        onClick={onAddToCart}
                    >
                        Thêm vào giỏ
                    </button>

                    <FavoriteButton
                        isFavorite={isFavorite}
                        onToggle={onToggleFavorite}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductCard