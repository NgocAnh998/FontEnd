
function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h2 className="logo">Handmade</h2>

                <nav className="menu">
                    <a href="#">Trang chủ</a>
                    <a href="#products">Sản phẩm</a>
                    <a href="#products">Danh mục</a>
                    <a href="#footer">Giới thiệu</a>
                </nav>

                <div className="header-right">
                    <a href="#">Đăng nhập</a>
                    <a href="#cart">Giỏ hàng </a>
                </div>
            </div>
        </header>
    )
}

export default Header