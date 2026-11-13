
import { Link } from 'react-router-dom'
import '../styles/Storefront.css'

const categories = [
    {
        name: 'Đồ trang trí',
        description: 'Trang trí không gian sống',
        icon: '🏠',
    },
    {
        name: 'Phụ kiện',
        description: 'Những món đồ nhỏ xinh',
        icon: '🧶',
    },
    {
        name: 'Quà tặng',
        description: 'Món quà mang dấu ấn riêng',
        icon: '🎁',
    },
    {
        name: 'Đồ thủ công',
        description: 'Sản phẩm làm bằng tay',
        icon: '🪡',
    },
]

const features = [
    {
        icon: '✋',
        title: 'Làm thủ công',
        description: 'Mỗi sản phẩm đều được chăm chút tỉ mỉ.',
    },
    {
        icon: '💝',
        title: 'Độc đáo',
        description: 'Những món đồ mang phong cách riêng.',
    },
    {
        icon: '📦',
        title: 'Giao hàng',
        description: 'Đóng gói cẩn thận và giao đến tận nơi.',
    },
]

function Home() {
    return (
        <div className="storefront">
            <section className="home-hero">
                <div className="home-hero-content">
                    <span className="home-label">HANDMADE WITH LOVE</span>

                    <h1>
                        Những món đồ nhỏ,
                        <br />
                        mang niềm vui lớn
                    </h1>

                    <p>
                        Khám phá những sản phẩm handmade độc đáo,
                        được tạo nên từ sự sáng tạo và tình yêu thủ công.
                    </p>

                    <div className="home-hero-actions">
                        <Link to="/products" className="store-btn store-btn-primary">
                            Khám phá sản phẩm
                        </Link>

                        <Link to="/about" className="store-btn store-btn-outline">
                            Về chúng tôi
                        </Link>
                    </div>
                </div>

                <div className="home-hero-image">
                    <div className="hero-image-main">
                        <span>🧸</span>
                    </div>
                    <div className="hero-image-note">
                        <span>♡</span>
                        Made with love
                    </div>
                    <div className="hero-image-decoration">✿</div>
                </div>
            </section>

            <section className="home-section">
                <div className="store-section-heading">
                    <div>
                        <span className="home-label">OUR COLLECTION</span>
                        <h2>Danh mục sản phẩm</h2>
                        <p>Tìm kiếm món đồ phù hợp với sở thích của bạn.</p>
                    </div>

                    <Link to="/products" className="store-text-link">
                        Xem tất cả →
                    </Link>
                </div>

                <div className="home-category-grid">
                    {categories.map((category) => (
                        <Link
                            to="/products"
                            className="home-category-card"
                            key={category.name}
                        >
                            <div className="category-icon">{category.icon}</div>
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="home-featured">
                <div className="store-section-heading">
                    <div>
                        <span className="home-label">HANDPICKED FOR YOU</span>
                        <h2>Sản phẩm nổi bật</h2>
                        <p>Khám phá những sản phẩm được yêu thích tại cửa hàng.</p>
                    </div>

                    <Link to="/products" className="store-text-link">
                        Xem cửa hàng →
                    </Link>
                </div>

                <div className="home-featured-content">
                    <div className="featured-decoration">
                        <span>🧵</span>
                        <span className="featured-decoration-text">
              Create something beautiful
            </span>
                    </div>

                    <div className="featured-description">
                        <h3>Mỗi sản phẩm là một câu chuyện</h3>
                        <p>
                            Từ những món đồ trang trí đến phụ kiện nhỏ xinh,
                            chúng tôi mong muốn mang đến cho bạn những sản phẩm
                            có cá tính và giá trị riêng.
                        </p>
                        <Link to="/products" className="store-btn store-btn-primary">
                            Mua sắm ngay
                        </Link>
                    </div>
                </div>
            </section>

            <section className="home-section home-about">
                <div className="home-about-content">
                    <span className="home-label">WHY CHOOSE US</span>
                    <h2>Không chỉ là sản phẩm, đó còn là sự tận tâm</h2>
                    <p>
                        Chúng tôi tin rằng những sản phẩm được làm bằng đôi tay
                        và sự sáng tạo luôn mang một giá trị đặc biệt.
                    </p>
                    <Link to="/about" className="store-text-link">
                        Tìm hiểu thêm về chúng tôi →
                    </Link>
                </div>

                <div className="home-feature-list">
                    {features.map((feature) => (
                        <div className="home-feature-item" key={feature.title}>
                            <div className="feature-icon">{feature.icon}</div>
                            <div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="home-bottom-banner">
                <span className="home-label">A LITTLE SOMETHING FOR YOU</span>
                <h2>Tìm món đồ handmade yêu thích của bạn nhé!</h2>
                <p>Một chút sáng tạo có thể làm ngày hôm nay trở nên đặc biệt hơn.</p>
                <Link to="/products" className="store-btn store-btn-primary">
                    Bắt đầu mua sắm
                </Link>
            </section>
        </div>
    )
}

export default Home
