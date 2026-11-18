import { Link } from 'react-router-dom';

const stats = [
    { value: '500+', label: 'Khách hàng' },
    { value: '100%', label: 'Thủ công' },
    { value: '4.9', label: 'Đánh giá' }
];

function HeroBanner() {
    return (
        <section className="home-banner p-4 p-md-5 mb-5">
            <div className="row align-items-center g-4">
                <div className="col-md-6">
                    <span className="badge badge-handmade rounded-pill px-3 py-2 text-uppercase">
                        Handmade với tình yêu
                    </span>

                    <h1 className="display-5 fw-bold mt-3">
                        Khám phá sản phẩm yêu thích của bạn
                    </h1>

                    <p className="lead text-muted-custom mt-3">
                        Chúng tôi mang đến những sản phẩm chất lượng, mẫu mã đa
                        dạng và giá cả hợp lý.
                    </p>

                    <div className="d-flex flex-wrap gap-2 mt-4">
                        <Link to="/products" className="btn btn-primary btn-lg">
                            <i className="bi bi-bag me-2"></i>
                            Mua sắm ngay
                        </Link>

                        <Link to="/wishlist" className="btn btn-outline-primary btn-lg">
                            <i className="bi bi-heart me-2"></i>
                            Yêu thích
                        </Link>
                    </div>

                    <div className="row g-3 mt-4">
                        {stats.map((item) => (
                            <div className="col-4" key={item.label}>
                                <div className="fs-4 fw-bold text-primary-custom">
                                    {item.value}
                                </div>
                                <div className="small text-muted-custom">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="ratio ratio-4x3">
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
                            alt="Banner cửa hàng"
                            className="rounded-4 shadow-handmade object-fit-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;