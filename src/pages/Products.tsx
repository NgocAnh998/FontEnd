import { useState, type FormEvent } from 'react'
import { products, type Product, type CartItem as CartProduct } from '../data/products'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import OrderItem from '../components/OrderItem'

function Products() {
    const [selectedCategory, setSelectedCategory] = useState('Tất cả')
    const [cart, setCart] = useState<CartProduct[]>([])
    const [customerName, setCustomerName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [orderSuccess, setOrderSuccess] = useState(false)

    const categories = ['Tất cả', 'Đồ len', 'Phụ kiện', 'Trang trí', 'Trang sức', 'Quà tặng']

    const showProducts = products.filter((product) => {
        if (selectedCategory === 'Tất cả') {
            return true
        }
        return product.category === selectedCategory
    })
    function addToCart(product: Product) {
        setOrderSuccess(false)
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
    function changeQuantity(id: number, amount: number) {
        setCart(cart.map((item) => {
                if (item.id === id) {
                    if (item.quantity + amount < 1) {
                        return item
                    }
                    return {...item, quantity: item.quantity + amount}
                }
                return item
            })
        )
    }
    function removeFromCart(id: number) {
        setCart(cart.filter((item) => item.id !== id))
    }
    function submitOrder(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (cart.length === 0) {
            alert('Giỏ hàng đang trống')
            return
        }
        setOrderSuccess(true)
        setCart([])
        setCustomerName('')
        setPhone('')
        setAddress('')
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
                    {cart.length === 0 ? (<p className="empty-cart">Giỏ hàng đang trống</p>) : (cart.map((item) => (
                        <CartItem key={item.id} item={item} onIncrease={(id) => changeQuantity(id, 1)}
                            onDecrease={(id) => changeQuantity(id, -1)} onRemove={removeFromCart}/>
                    )))}
                </div>
                <CartSummary items={cart} />
                {cart.length > 0 && (
                    <div className="order-preview">
                        <h3>Chi tiết đơn hàng</h3>
                        {cart.map((item) => (<OrderItem key={item.id} item={item}/>))}
                    </div>
                )}
                {cart.length > 0 && (
                    <div className="checkout-form">
                        <h2>Thông tin đặt hàng</h2>

                        <form onSubmit={submitOrder}>
                            <div className="form-group">
                                <label htmlFor="customerName">Họ và tên</label>
                                <input id="customerName" type="text" value={customerName}
                                onChange={(event) => setCustomerName(event.target.value)} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Số điện thoại</label>
                                <input id="phone" type="tel" value={phone}
                                onChange={(event) => setPhone(event.target.value)} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Địa chỉ nhận hàng</label>
                                <textarea id="address" value={address}
                                onChange={(event) => setAddress(event.target.value)} required rows={3}/>
                            </div>

                            <button className="checkout-button" type="submit">
                                Đặt hàng
                            </button>
                        </form>
                        {orderSuccess && (
                            <div className="order-success">
                                <h3>Đặt hàng thành công!</h3>
                                <p>Cảm ơn bạn đã mua sản phẩm handmade của chúng tôi.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products