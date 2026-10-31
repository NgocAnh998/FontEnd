import MainLayout from './components/layout/MainLayout'
import './App.css'

function App() {
    return (
        <MainLayout>
            <section className="hero-section">

                <div className="hero-text">
                    <p className="hero-label">SẢN PHẨM THỦ CÔNG</p>

                    <h1>Món quà nhỏ, giá trị lớn</h1>

                    <p className="hero-description">
                        Khám phá những sản phẩm handmade mới.
                    </p>

                    <button className="hero-button">
                        Xem thêm
                    </button>
                </div>

                <div className="hero-image">

                    <p>Made with love</p>
                </div>

            </section>
        </MainLayout>
    )
}

export default App