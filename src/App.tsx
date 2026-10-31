import { useState } from 'react'
import MainLayout from './components/layout/MainLayout'
import HeroBanner from './components/layout/HeroBanner'
import Products from './pages/Products'
import CartPanel from './components/common/CartPanel'
import CheckoutForm, {
    type CheckoutInfo
} from './components/common/CheckoutForm'
import type { CartItem, Product } from './data/products'
import './App.css'

function App() {
    const [searchText, setSearchText] = useState('')
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [showCheckout, setShowCheckout] = useState(false)
    const [orderMessage, setOrderMessage] = useState('')

    const addToCart = (product: Product) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.id === product.id
            )

            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...currentItems, { ...product, quantity: 1 }]
        })
    }

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity <= 0) {
            setCartItems((currentItems) =>
                currentItems.filter((item) => item.id !== productId)
            )
            return
        }

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            )
        )
    }

    const removeFromCart = (productId: number) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== productId)
        )
    }

    const handleCheckout = (order: CheckoutInfo) => {
        setOrderMessage(
            `Cảm ơn ${order.name}! Thông tin đặt hàng đã được ghi nhận.`
        )
        setCartItems([])
        setShowCheckout(false)
    }

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    )

    return (
        <MainLayout
            searchText={searchText}
            onSearchChange={setSearchText}
            cartCount={cartCount}
        >
            <HeroBanner />

            <Products
                searchText={searchText}
                onAddToCart={addToCart}
            />

            <CartPanel
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                onCheckout={() => {
                    setShowCheckout(true)
                    setOrderMessage('')
                }}
            />

            {showCheckout && cartItems.length > 0 && (
                <CheckoutForm onSubmit={handleCheckout} />
            )}

            {orderMessage && (
                <p className="order-success">
                    {orderMessage}
                </p>
            )}
        </MainLayout>
    )
}

export default App