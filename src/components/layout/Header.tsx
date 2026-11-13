import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <NavLink className="logo" to="/">Handmade</NavLink>
                <nav className="menu">
                    <NavLink to="/">Trang chủ</NavLink>
                    <NavLink to="/products">Sản phẩm</NavLink>
                    <NavLink to="/custom-order">Đặt hàng theo yêu cầu</NavLink>
                    <NavLink to="/about">Giới thiệu</NavLink>
                    <NavLink to="/contact">Liên hệ</NavLink>
                    <NavLink to="/faq">FAQ</NavLink>
                    <NavLink to="/policy">Chính sách</NavLink>
                </nav>

                <div className="header-right">
                    <a href="#footer">Liên hệ</a>
                    <a href="#cart">Giỏ hàng</a>
                </div>
            </div>
        </header>
    )
}

export default Header