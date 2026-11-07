import type { CartItem as CartProduct } from '../data/products'

type Props = { items: CartProduct[] }

function CartSummary({ items }: Props) {
    const totalQuantity = items.reduce((sum, item) => {return sum + item.quantity}, 0)
    const totalPrice = items.reduce((sum, item) => {return sum + item.price * item.quantity}, 0)
    return (
        <div className="cart-total">
            <p>Số lượng sản phẩm: {totalQuantity}</p>
            <p>Tổng tiền: {totalPrice.toLocaleString('vi-VN')} đ</p>
        </div>
    )
}

export default CartSummary