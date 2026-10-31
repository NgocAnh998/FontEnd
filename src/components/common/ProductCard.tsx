type ProductCardProps = {
    name: string
    price: string
    image: string
    category: string
}

function ProductCard({ name, price, image, category }: ProductCardProps) {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />

            <div className="product-info">
                <p className="product-category">{category}</p>

                <h3 className="product-name">{name}</h3>

                <p className="product-price">{price}</p>

                <button className="product-button">
                    Xem chi tiết
                </button>
            </div>
        </div>
    )
}

export default ProductCard