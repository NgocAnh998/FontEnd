
import { Link } from 'react-router-dom'
import '../styles/Storefront.css'

const values = [
    {
        icon: '❤️',
        title: 'Tận tâm',
        description:
            'Chúng tôi đặt sự chăm chút và tâm huyết vào từng sản phẩm.',
    },
    {
        icon: '🎨',
        title: 'Sáng tạo',
        description:
            'Mỗi món đồ đều mang phong cách và dấu ấn riêng.',
    },
    {
        icon: '🌱',
        title: 'Chân thành',
        description:
            'Luôn hướng đến những trải nghiệm mua sắm gần gũi và thân thiện.',
    },
]

function About() {
    return (
        <div className="storefront info-page">
            <section className="info-hero">
                <span className="home-label">OUR STORY</span>
                <h1>Câu chuyện của chúng tôi</h1>
                <p>
                    Một cửa hàng nhỏ dành cho những người yêu thích sự sáng tạo
                    và những món đồ được làm bằng đôi tay.
                </p>
            </section>

            <section className="info-section about-introduction">
                <div className="about-image">
                    <span>🧶</span>
                    <p>Made with love</p>
                </div>

                <div className="info-content">
                    <span className="home-label">WHO WE ARE</span>
                    <h2>Bắt đầu từ tình yêu với đồ handmade</h2>
                    <p>
                        Chúng tôi tạo ra cửa hàng này với mong muốn mang những
                        sản phẩm handmade đến gần hơn với mọi người.
                    </p>
                    <p>
                        Mỗi sản phẩm không chỉ là một món đồ sử dụng hằng ngày,
                        mà còn thể hiện sự sáng tạo, kiên nhẫn và tâm huyết
                        của người làm ra nó.
                    </p>
                    <p>
                        Chúng tôi hy vọng bạn có thể tìm thấy một món đồ phù hợp
                        với sở thích và cá tính của mình tại đây.
                    </p>
                </div>
            </section>

            <section className="info-section about-values">
                <div className="info-heading">
                    <span className="home-label">OUR VALUES</span>
                    <h2>Điều chúng tôi luôn hướng đến</h2>
                </div>

                <div className="about-value-grid">
                    {values.map((value) => (
                        <div className="about-value-card" key={value.title}>
                            <div>{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="info-bottom">
                <h2>Cùng khám phá thế giới handmade nhé!</h2>
                <p>Chọn cho mình một món đồ nhỏ mang dấu ấn riêng.</p>
                <Link to="/products" className="store-btn store-btn-primary">
                    Khám phá sản phẩm
                </Link>
            </section>
        </div>
    )
}

export default About
