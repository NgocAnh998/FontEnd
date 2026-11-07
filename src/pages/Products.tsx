import { useState } from 'react'
import { products, type Product, type CartItem as CartProduct } from '../data/products'
import CartItem from '../components/CartItem'

function Products() {
    const [selectedCategory, setSelectedCategory] = useState('Tất cả')
    const [cart, setCart] = useState<CartProduct[]>([])

    const categories = ['Tất cả', 'Đồ len', 'Phụ kiện', 'Trang trí', 'Trang sức', 'Quà tặng']

    const showProducts = products.filter((product) => {
        if (selectedCategory === 'Tất cả') {
            return true
        }
        return product.category === selectedCategory
    })
    function addToCart(product: Product) {
        const oldProduct = cart.find((item) => item.id === product.id)
        if (oldProduct) {
            setCart(cart.map((item) => {
                    if (item.id === product.id) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    return item
                })
            )
        } else {
            setCart([...cart, {...product, quantity: 1}])
        }
    }

    return (
        <div className="products-page" id="products">
            <div className="products-heading">
                <h1>Sản phẩm handmade</h1>
                <p>Khám phá những sản phẩm thủ công độc đáo</p>
            </div>

            <div className="products-controls">
                <div className="category-filter">
                    {categories.map((category) => (
                        <button type="button" key={category} className={selectedCategory === category ? 'active' : ''} onClick={() => setSelectedCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="products-list">
                {showProducts.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img className="product-image" src={product.image} alt={product.name}/>
                        <div className="product-info">
                            <span className="product-category">{product.category}</span>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">{product.price.toLocaleString('vi-VN')} đ</p>
                            <button className="product-button" type="button" onClick={() => addToCart(product)}>Thêm vào giỏ</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-panel" id="cart">
                <h2>Giỏ hàng của bạn</h2>

                <div className="cart-items">
                    {cart.length === 0 ? (<p className="empty-cart">Giỏ hàng đang trống</p>) : (cart.map((item) => (<CartItem key={item.id} item={item}/>)))}
                </div>
            </div>
        </div>
    )
}

export default Products