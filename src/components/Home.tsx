
import { Link } from 'react-router-dom';
import { products } from './Product/ListProduct';

const categories = [
    { id: 1, name: 'Hoa', icon: 'H' },
    { id: 2, name: 'Gấu bông', icon: 'G' },
    { id: 3, name: 'Móc khóa', icon: 'M' },
    { id: 4, name: 'Len', icon: 'L' }
];

function Home() {
    const featuredProducts = products.slice(0, 2);
    const newProducts = [...products].reverse();

    return (
        <div className="home-page">

            {/* Banner */}
            <section className="home-banner">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <span className="text-uppercase text-muted">
                            Welcome to our shop
                        </span>

                        <h1 className="mt-3">
                            Khám phá sản phẩm yêu thích của bạn
                        </h1>

                        <p className="text-muted mt-3">
                            Chúng tôi mang đến những sản phẩm chất lượng,
                            mẫu mã đa dạng và giá cả hợp lý.
                        </p>

                        <Link to="/products" className="btn btn-primary mt-3">
                            Mua sắm ngay
                        </Link>
                    </div>

                    <div className="col-md-6 mt-4 mt-md-0">
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
                            alt="Banner cửa hàng"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
            </section>

            {/* Danh mục */}
            <section className="home-section">
                <div className="section-heading">
                    <div>
                        <h2>Danh mục sản phẩm</h2>
                        <p className="text-muted">
                            Khám phá các danh mục của chúng tôi
                        </p>
                    </div>

                    <Link to="/products" className="text-decoration-none">
                        Xem tất cả
                    </Link>
                </div>

                <div className="row g-3">
                    {categories.map((category) => (
                        <div className="col-6 col-md-3 " key={category.id}>
                            <Link
                                to={`/products?category=${category.name}`}
                                className=" card category-item"
                            >
                                <div className="category-icon">
                                    {category.icon}
                                </div>

                                <h5>{category.name}</h5>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sản phẩm nổi bật */}
            <section className="home-section">
                <div className="section-heading">
                    <div>
                        <h2>Sản phẩm nổi bật</h2>
                        <p className="text-muted">
                            Những sản phẩm được lựa chọn dành cho bạn
                        </p>
                    </div>

                    <Link to="/products" className="text-decoration-none">
                        Xem tất cả
                    </Link>
                </div>

                <div className="row g-4">
                    {featuredProducts.map((product) => (
                        <div className="col-6 col-md-3" key={product.id}>
                            <div className="card home-product-card h-100">
                                <Link to={`/products/${product.id}`}>
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt={product.name}
                                    />
                                </Link>

                                <div className="card-body">
                                    <h5 className="card-title">
                                        {product.name}
                                    </h5>

                                    <p className="text-danger fw-bold">
                                        {product.price.toLocaleString('vi-VN')}đ
                                    </p>

                                    <Link
                                        to={`/products/${product.id}`}
                                        className="btn btn-outline-primary w-100"
                                    >
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sản phẩm mới */}
            <section className="home-section">
                <div className="section-heading">
                    <div>
                        <h2>Sản phẩm mới</h2>
                        <p className="text-muted">
                            Những sản phẩm mới nhất tại cửa hàng
                        </p>
                    </div>

                    <Link to="/products" className="text-decoration-none">
                        Xem tất cả
                    </Link>
                </div>

                <div className="row g-4">
                    {newProducts.map((product) => (
                        <div className="col-6 col-md-3" key={product.id}>
                            <div className="card home-product-card h-100">
                                <Link to={`/products/${product.id}`}>
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt={product.name}
                                    />
                                </Link>

                                <div className="card-body">
                                    <span className="badge bg-success mb-2">
                                        Mới
                                    </span>

                                    <h5 className="card-title">
                                        {product.name}
                                    </h5>

                                    <p className="text-danger fw-bold">
                                        {product.price.toLocaleString('vi-VN')}đ
                                    </p>

                                    <Link
                                        to={`/products/${product.id}`}
                                        className="btn btn-outline-primary w-100"
                                    >
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default Home;
