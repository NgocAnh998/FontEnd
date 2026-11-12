

function Home() {
    return (
        <>
            <div className="container py-5">
                <div className="p-5 bg-primary text-white rounded-3">
                    <h1>Chào mừng đến với My Shop</h1>
                    <p className="lead">Khám phá các sản phẩm mới nhất của chúng tôi.</p>
                    <a href="/products" className="btn btn-light">Mua sắm ngay</a>
                </div>

                <div className="text-center mt-5">
                    <h2>Chào mừng bạn!</h2>
                    <p className="text-muted">Chúng tôi luôn mang đến những sản phẩm chất lượng với giá cả hợp lý.</p>
                </div>
            </div>
        </>
    );
}

export default Home;
