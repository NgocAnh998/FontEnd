import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/Store';

const accountLinks = [
    { to: '/profile', label: 'Hồ sơ cá nhân', icon: 'bi-person' },
    { to: '/profile/orders', label: 'Đơn hàng', icon: 'bi-receipt' },
    { to: '/profile/vouchers', label: 'Voucher', icon: 'bi-ticket-perforated' },
    { to: '/profile/messages', label: 'Tin nhắn', icon: 'bi-chat-dots' },
    { to: '/profile/addresses', label: 'Địa chỉ', icon: 'bi-geo-alt' }
];

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

                        <li className="nav-item dropdown">
                            <button
                                type="button"
                                className="nav-link dropdown-toggle px-3"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-person-circle me-1"></i>
                                Tài khoản
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                                <li>
                                    <Link className="dropdown-item" to="/login">
                                        <i className="bi bi-box-arrow-in-right me-2"></i>
                                        Đăng nhập
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/register">
                                        <i className="bi bi-person-plus me-2"></i>
                                        Đăng ký
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                {accountLinks.map((item) => (
                                    <li key={item.to}>
                                        <Link className="dropdown-item" to={item.to}>
                                            <i className={`bi ${item.icon} me-2`}></i>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;