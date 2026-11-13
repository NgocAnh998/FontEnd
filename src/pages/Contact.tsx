
import { useState } from 'react'
import '../styles/Storefront.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [submitted, setSubmitted] = useState(false)

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        const { name, value } = event.target

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setSubmitted(true)
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    return (
        <div className="storefront info-page">
            <section className="info-hero">
                <span className="home-label">CONTACT US</span>
                <h1>Liên hệ với chúng tôi</h1>
                <p>
                    Bạn có thắc mắc hoặc cần hỗ trợ? Hãy gửi lời nhắn,
                    chúng tôi rất vui được lắng nghe bạn.
                </p>
            </section>

            <section className="contact-section">
                <div className="contact-information">
                    <span className="home-label">GET IN TOUCH</span>
                    <h2>Chúng tôi luôn sẵn sàng hỗ trợ</h2>
                    <p>
                        Nếu bạn cần tư vấn về sản phẩm, đơn hàng hoặc có ý kiến
                        đóng góp, hãy liên hệ với cửa hàng qua các thông tin bên dưới.
                    </p>

                    <div className="contact-detail">
                        <span>📍</span>
                        <div>
                            <h3>Địa chỉ</h3>
                            <p>Địa chỉ cửa hàng sẽ được cập nhật</p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span>📧</span>
                        <div>
                            <h3>Email</h3>
                            <p>support@handmade.com</p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span>📞</span>
                        <div>
                            <h3>Điện thoại</h3>
                            <p>0123 456 789</p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span>🕒</span>
                        <div>
                            <h3>Thời gian hỗ trợ</h3>
                            <p>Thứ 2 - Thứ 7, 8:00 - 17:00</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h2>Gửi lời nhắn cho chúng tôi</h2>

                    {submitted && (
                        <div className="contact-success">
                            Cảm ơn bạn đã gửi lời nhắn! Chúng tôi đã ghi nhận thông tin.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="contact-form-group">
                            <label htmlFor="contact-name">Họ và tên</label>
                            <input
                                id="contact-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nhập họ và tên"
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="contact-email">Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Nhập email"
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="contact-subject">Chủ đề</label>
                            <input
                                id="contact-subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Nhập chủ đề"
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="contact-message">Nội dung</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Nhập nội dung cần hỗ trợ"
                                rows={5}
                                required
                            />
                        </div>

                        <button type="submit" className="store-btn store-btn-primary">
                            Gửi lời nhắn
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
