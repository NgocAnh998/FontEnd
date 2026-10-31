import type { CartItem } from '../../data/products'

type CartPanelProps = {
    items: CartItem[]
    onUpdateQuantity: (id: number, quantity: number) => void
    onRemove: (id: number) => void
}

function formatPrice(price: number) {
    return price.toLocaleString('vi-VN') + 'đ'
}

function CartPanel({
                       items,
                       onUpdateQuantity,
                       onRemove
                   }: CartPanelProps) {
    const totalPrice = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    return (
        <section className="cart-panel" id="cart">
            <h2>Giỏ hàng của bạn</h2>

            {items.length === 0 ? (
                <p className="empty-cart">
                    Giỏ hàng hiện chưa có sản phẩm.
                </p>
            ) : (
                <>
                    <div className="cart-items">
                        {items.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-image"
                                />

                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>

                                    <p>
                                        {formatPrice(item.price)} / sản phẩm
                                    </p>

                                    <div className="cart-quantity">
                                        <button
                                            type="button"
                                            aria-label="Giảm số lượng"
                                            onClick={() =>
                                                onUpdateQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            type="button"
                                            aria-label="Tăng số lượng"
                                            onClick={() =>
                                                onUpdateQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="cart-item-end">
                                    <p>
                                        {formatPrice(
                                            item.price * item.quantity
                                        )}
                                    </p>

                                    <button
                                        type="button"
                                        className="remove-cart-button"
                                        onClick={() => onRemove(item.id)}
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="cart-total">
                        Tổng cộng: {formatPrice(totalPrice)}
                    </p>
                </>
            )}
        </section>
    )
}

export default CartPanel