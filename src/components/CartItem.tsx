import type { CartItem as CartProduct } from '../data/products'

type Props = { item: CartProduct }

function CartItem({ item }: Props) {
    return (
        <div className="cart-item">
            <img className="cart-image" src={item.image} alt={item.name}/>

            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>{item.price.toLocaleString('vi-VN')} đ</p>
                <p>Số lượng: {item.quantity}</p>
            </div>

            <div className="cart-item-end">
                <p>{(item.price * item.quantity).toLocaleString('vi-VN')} đ</p>
            </div>
        </div>
    )
}

export default CartItem