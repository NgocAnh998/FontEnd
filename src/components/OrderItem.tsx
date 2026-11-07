import type { CartItem as CartProduct } from '../data/products'

type Props = { item: CartProduct }

function OrderItem({ item }: Props) {
    return (
        <div className="order-item">
            <span>{item.name} x {item.quantity}</span>

            <span>{(item.price * item.quantity).toLocaleString('vi-VN')} đ</span>
        </div>
    )
}

export default OrderItem