import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer mt-5 pt-5 pb-3">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-md-5">
                        <h5 className="d-flex align-items-center gap-2">
                            <i className="bi bi-bag-heart-fill"></i>
                            My Shop
                        </h5>
                        <p className="small mb-0">
                            Những món đồ handmade được làm thủ công với sự tỉ mỉ trong từng chi tiết.
                        </p>
                    </div>

                    <div className="col-6 col-md-3">
                        <h5>Liên kết</h5>
                        <ul className="list-unstyled small mb-0">
                            <li className="mb-2">
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/products">Sản phẩm</Link>
                            </li>
                            <li>
                                <Link to="/wishlist">Yêu thích</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-4">
                        <h5>Liên hệ</h5>
                        <ul className="list-unstyled small mb-3">
                            <li className="mb-2">
                                <i className="bi bi-geo-alt me-2"></i>
                                TP. Hồ Chí Minh
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-envelope me-2"></i>
                                hello@myshop.vn
                            </li>
                            <li>
                                <i className="bi bi-telephone me-2"></i>
                                0123 456 789
                            </li>
                        </ul>

                        <div className="d-flex gap-3 fs-5">
                            <a href="#" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" aria-label="TikTok">
                                <i className="bi bi-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-4 border-light opacity-25" />

                <p className="text-center small mb-0">
                    © 2026 My Shop. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;