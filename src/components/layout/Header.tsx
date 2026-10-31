function Header() {
    return (
        <header className="header">
            <div className="header-container">

                <h2 className="logo">Handmade</h2>

                <nav className="menu">
                    <a href="#">Trang chủ</a>
                    <a href="#">Sản phẩm</a>
                    <a href="#">Danh mục</a>
                    <a href="#">Giới thiệu</a>
                </nav>

                <div className="header-right">
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                    <a href="#">Đăng nhập</a>
                    <a href="#">Giỏ hàng</a>
                </div>

            </div>
        </header>
    )
}

export default Header