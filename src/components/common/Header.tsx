
function Header() {

    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/">My Shop</a>

                    <div className="d-flex gap-3">
                        <a className="text-white text-decoration-none" href="/">Trang chủ</a>
                        <a className="text-white text-decoration-none" href="/products">Sản phẩm</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header