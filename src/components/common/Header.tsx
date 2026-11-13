import { Link } from 'react-router-dom';

function Header() {

    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">My Shop</Link>
                    <div className="d-flex gap-3">
                        <Link className="text-white text-decoration-none" to="/">Home</Link>
                        <Link className="text-white text-decoration-none" to="/products">Products</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header