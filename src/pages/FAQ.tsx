
import { useState } from 'react'
import '../styles/Storefront.css'

const questions = [
    {
        question: 'Làm thế nào để đặt mua sản phẩm?',
        answer:
            'Bạn có thể truy cập trang Sản phẩm, chọn món đồ yêu thích và thêm vào giỏ hàng. Sau đó tiến hành thanh toán theo hướng dẫn.',
    },
    {
        question: 'Sản phẩm handmade có giống hoàn toàn hình ảnh không?',
        answer:
            'Sản phẩm được làm thủ công nên có thể có một vài khác biệt nhỏ về màu sắc, kích thước hoặc chi tiết. Tuy nhiên, chúng tôi luôn cố gắng đảm bảo sản phẩm gần với hình ảnh mô tả nhất.',
    },
    {
        question: 'Tôi có thể đặt sản phẩm theo yêu cầu không?',
        answer:
            'Có. Bạn có thể truy cập mục Đặt hàng theo yêu cầu để gửi thông tin về sản phẩm mong muốn. Cửa hàng sẽ xem xét và tư vấn thêm.',
    },
    {
        question: 'Cửa hàng hỗ trợ những phương thức thanh toán nào?',
        answer:
            'Các phương thức thanh toán được hiển thị tại bước thanh toán của đơn hàng. Bạn vui lòng kiểm tra thông tin trước khi xác nhận đặt hàng.',
    },
    {
        question: 'Bao lâu thì tôi nhận được hàng?',
        answer:
            'Thời gian giao hàng phụ thuộc vào địa chỉ nhận hàng, đơn vị vận chuyển và tình trạng chuẩn bị sản phẩm. Thời gian dự kiến sẽ được thông báo khi đặt hàng.',
    },
    {
        question: 'Tôi có thể đổi hoặc trả sản phẩm không?',
        answer:
            'Cửa hàng hỗ trợ tiếp nhận yêu cầu đổi trả đối với các trường hợp đáp ứng điều kiện trong Chính sách đổi trả. Bạn vui lòng xem trang Chính sách để biết thêm chi tiết.',
    },
    {
        question: 'Làm thế nào để liên hệ khi đơn hàng gặp vấn đề?',
        answer:
            'Bạn có thể gửi thông tin qua trang Liên hệ. Hãy cung cấp mã đơn hàng và mô tả vấn đề để cửa hàng hỗ trợ thuận tiện hơn.',
    },
]

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    function toggleQuestion(index: number) {
        setOpenIndex((current) => (current === index ? null : index))
    }

    return (
        <div className="storefront info-page">
            <section className="info-hero">
                <span className="home-label">FREQUENTLY ASKED QUESTIONS</span>
                <h1>Câu hỏi thường gặp</h1>
                <p>
                    Những thông tin có thể giúp bạn mua sắm và sử dụng dịch vụ
                    tại cửa hàng dễ dàng hơn.
                </p>
            </section>

            <section className="faq-section">
                <div className="info-heading">
                    <span className="home-label">NEED SOME HELP?</span>
                    <h2>Chúng tôi có thể giúp gì cho bạn?</h2>
                </div>

                <div className="faq-list">
                    {questions.map((item, index) => (
                        <div className="faq-item" key={item.question}>
                            <button
                                type="button"
                                className="faq-question"
                                onClick={() => toggleQuestion(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{item.question}</span>
                                <span className="faq-icon">
                  {openIndex === index ? '−' : '+'}
                </span>
                            </button>

                            {openIndex === index && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="faq-contact">
                    <h3>Bạn vẫn chưa tìm được câu trả lời?</h3>
                    <p>Hãy liên hệ với chúng tôi để được hỗ trợ thêm.</p>
                    <a href="/contact" className="store-btn store-btn-primary">
                        Liên hệ ngay
                    </a>
                </div>
            </section>
        </div>
    )
}

export default FAQ
