import type { CartItem as CartProduct } from '../data/products'

type Props = { item: CartProduct; onIncrease: (id: string) => void; onDecrease: (id: string) => void;onRemove: (id: string) => void }

function CartItem({ item, onIncrease, onDecrease, onRemove }: Props) {
    return (
        <div className="cart-item">
            <img className="cart-image" src={item.image} alt={item.name}/>

            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>{item.price.toLocaleString('vi-VN')} đ</p>

                <div className="cart-quantity">
                    <button type="button" onClick={() => onDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => onIncrease(item.id)}>+</button>
                </div>
            </div>

            <div className="cart-item-end">
                <p>{(item.price * item.quantity).toLocaleString('vi-VN')} đ</p>
                <button className="remove-cart-button" type="button" onClick={() => onRemove(item.id)}>Xóa</button>
            </div>
        </div>
    )
}

export default CartItem