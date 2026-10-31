import SearchBar from '../common/SearchBar'

type HeaderProps = {
    searchText: string
    onSearchChange: (value: string) => void
    cartCount: number
}

function Header({
                    searchText,
                    onSearchChange,
                    cartCount
                }: HeaderProps) {
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
                    <SearchBar
                        value={searchText}
                        onChange={onSearchChange}
                    />
                    <a href="#">Đăng nhập</a>
                    <a href="#cart">Giỏ hàng ({cartCount})</a>
                </div>
            </div>
        </header>
    )
}

export default Header