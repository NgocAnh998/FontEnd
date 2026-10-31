import { useState, type FormEvent } from 'react'

export type CheckoutInfo = {
    name: string
    phone: string
    address: string
    paymentMethod: string
}

type CheckoutFormProps = {
    onSubmit: (order: CheckoutInfo) => void
}

function CheckoutForm({ onSubmit }: CheckoutFormProps) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('COD')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        onSubmit({
            name,
            phone,
            address,
            paymentMethod
        })
    }

    return (
        <section className="checkout-form">
            <h2>Thông tin đặt hàng</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="customer-name">
                        Họ và tên
                    </label>
                    <input
                        id="customer-name"
                        type="text"
                        value={name}
                        required
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="customer-phone">
                        Số điện thoại
                    </label>
                    <input
                        id="customer-phone"
                        type="tel"
                        value={phone}
                        required
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="customer-address">
                        Địa chỉ nhận hàng
                    </label>
                    <textarea
                        id="customer-address"
                        value={address}
                        required
                        rows={3}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="payment-method">
                        Phương thức thanh toán
                    </label>
                    <select
                        id="payment-method"
                        value={paymentMethod}
                        onChange={(event) =>
                            setPaymentMethod(event.target.value)
                        }
                    >
                        <option value="COD">Thanh toán khi nhận hàng</option>
                        <option value="BANK">Chuyển khoản ngân hàng</option>
                    </select>
                </div>

                <button type="submit" className="checkout-button">
                    Xác nhận đặt hàng
                </button>
            </form>
        </section>
    )
}

export default CheckoutForm