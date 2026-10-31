import heroImage from '../../assets/hero.png'

function HeroBanner() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <p className="hero-label">SẢN PHẨM THỦ CÔNG</p>
                <h1>Món quà nhỏ, giá trị lớn</h1>
                <p className="hero-description">
                    Khám phá những sản phẩm handmade độc đáo,
                    được tạo nên từ sự tỉ mỉ và sáng tạo.
                </p>
                <a className="hero-button" href="#products">
                    Khám phá sản phẩm
                </a>
            </div>

            <div className="hero-image">
                <img src={heroImage} alt="Sản phẩm handmade" />
                <p>Made with love</p>
            </div>
        </section>
    )
}

export default HeroBanner