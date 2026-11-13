
import { Link } from 'react-router-dom'
import '../styles/Storefront.css'

const policies = [
    {
        id: 'purchase',
        icon: '🛍️',
        title: '1. Chính sách mua hàng',
        content: [
            'Khách hàng có thể lựa chọn sản phẩm trực tiếp trên website và thêm vào giỏ hàng.',
            'Vui lòng kiểm tra số lượng, thông tin sản phẩm và tổng giá trị đơn hàng trước khi xác nhận.',
            'Đối với sản phẩm đặt làm theo yêu cầu, thời gian hoàn thành có thể khác với sản phẩm có sẵn.',
        ],
    },
    {
        id: 'payment',
        icon: '💳',
        title: '2. Chính sách thanh toán',
        content: [
            'Khách hàng lựa chọn phương thức thanh toán được cửa hàng hỗ trợ tại bước đặt hàng.',
            'Vui lòng kiểm tra kỹ thông tin thanh toán trước khi hoàn tất giao dịch.',
            'Nếu phát sinh vấn đề liên quan đến thanh toán, khách hàng có thể liên hệ cửa hàng để được hỗ trợ.',
        ],
    },
    {
        id: 'shipping',
        icon: '📦',
        title: '3. Chính sách giao hàng',
        content: [
            'Cửa hàng tiếp nhận và chuẩn bị đơn hàng sau khi khách hàng xác nhận đặt mua.',
            'Thời gian giao hàng phụ thuộc vào địa chỉ nhận hàng, đơn vị vận chuyển và tình trạng sản phẩm.',
            'Khách hàng vui lòng cung cấp chính xác họ tên, số điện thoại và địa chỉ nhận hàng.',
            'Khi nhận hàng, khách hàng nên kiểm tra tình trạng gói hàng và sản phẩm.',
        ],
    },
    {
        id: 'return',
        icon: '🔄',
        title: '4. Chính sách đổi trả',
        content: [
            'Khách hàng nên kiểm tra sản phẩm ngay khi nhận hàng.',
            'Cửa hàng tiếp nhận yêu cầu hỗ trợ khi sản phẩm bị lỗi do quá trình sản xuất hoặc hư hỏng trong quá trình vận chuyển.',
            'Khách hàng cần cung cấp hình ảnh sản phẩm và thông tin đơn hàng để cửa hàng kiểm tra.',
            'Đối với sản phẩm đặt làm theo yêu cầu, việc đổi trả sẽ được xem xét theo tình trạng thực tế và thỏa thuận khi đặt hàng.',
            'Vui lòng liên hệ cửa hàng trước khi gửi sản phẩm đổi trả.',
        ],
    },
    {
        id: 'privacy',
        icon: '🔒',
        title: '5. Chính sách bảo mật',
        content: [
            'Thông tin khách hàng cung cấp được sử dụng để hỗ trợ quá trình đặt hàng và chăm sóc khách hàng.',
            'Khách hàng nên cung cấp thông tin chính xác để đảm bảo việc giao hàng và liên hệ.',
            'Cửa hàng không chủ động chia sẻ thông tin cá nhân của khách hàng cho bên không liên quan, trừ trường hợp cần thiết để xử lý đơn hàng hoặc theo yêu cầu pháp luật.',
        ],
    },
]

function Policy() {
    return (
        <div className="storefront info-page">
            <section className="info-hero">
                <span className="home-label">STORE POLICIES</span>
                <h1>Chính sách cửa hàng</h1>
                <p>
                    Những quy định giúp quá trình mua sắm và sử dụng dịch vụ
                    tại cửa hàng được rõ ràng và thuận tiện.
                </p>
            </section>

            <section className="policy-section">
                <div className="policy-introduction">
                    <span className="home-label">CUSTOMER INFORMATION</span>
                    <h2>Thông tin dành cho khách hàng</h2>
                    <p>
                        Chúng tôi mong muốn mang đến trải nghiệm mua sắm tốt nhất.
                        Vui lòng đọc các chính sách dưới đây trước khi đặt hàng.
                    </p>
                </div>

                <div className="policy-list">
                    {policies.map((policy) => (
                        <section className="policy-item" id={policy.id} key={policy.id}>
                            <div className="policy-title">
                                <span>{policy.icon}</span>
                                <h3>{policy.title}</h3>
                            </div>

                            <ul>
                                {policy.content.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                <div className="policy-contact">
                    <h3>Cần hỗ trợ thêm?</h3>
                    <p>
                        Nếu có thắc mắc về các chính sách, vui lòng liên hệ với
                        cửa hàng để được giải đáp.
                    </p>
                    <Link to="/contact" className="store-btn store-btn-primary">
                        Liên hệ cửa hàng
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Policy
