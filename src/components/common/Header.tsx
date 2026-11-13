import { Link } from 'react-router-dom';

function Header() {

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link className=" navbar-brand " to="/">My Shop</Link>
                    <div className="d-flex gap-3">
                        <Link className="nav-link mt-3" to="/">Home</Link>
                        <Link className="nav-link mt-3" to="/products">Products</Link>
                        <Link className="nav-link mt-3" to="/">Home</Link>
                        <Link className="nav-link mt-3" to="/products">Products</Link>
                        <Link className="nav-link mt-3" to="/">Home</Link>
                        <Link className="nav-link mt-3" to="/products">Products</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header