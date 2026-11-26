import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/Store';

function Header() {
    const wishlist = useSelector(
        (state: RootState) => state.wishlist.items
    );

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `nav-link px-3 ${isActive ? 'active fw-semibold' : ''}`;

    return (
        <nav className="navbar navbar-expand-md sticky-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <i className="bi bi-bag-heart-fill"></i>
                    <span>My Shop</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                    aria-controls="mainNav"
                    aria-expanded="false"
                    aria-label="Mở menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav ms-auto align-items-md-center">
                        <li className="nav-item">
                            <NavLink end className={linkClass} to="/">
                                Trang chủ
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={linkClass} to="/products">
                                Sản phẩm
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={linkClass} to="/wishlist">
                                <i className="bi bi-heart me-1"></i>
                                Yêu thích
                                <span className="badge rounded-pill text-bg-danger ms-2">
                                    {wishlist.length}
                                </span>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={linkClass} to="/login">
                                Đăng Nhập
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;