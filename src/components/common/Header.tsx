import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/Store';

function Header() {
    const wishlist = useSelector(
        (state: RootState) => state.wishlist.items
    );

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        My Shop
                    </Link>

                    <div className="d-flex gap-3">
                        <Link className="nav-link mt-3" to="/">
                            Home
                        </Link>

                        <Link className="nav-link mt-3" to="/products">
                            Products
                        </Link>

                        <Link className="nav-link mt-3" to="/wishlist">
                            Wishlist ({wishlist.length})
                        </Link>
                        <Link className="nav-link mt-3" to="/profile">
                            Hồ sơ cá nhân
                        </Link>

                        {/*/login*/}
                        {/*/register*/}
                        {/*/forgot-password*/}
                        {/*/reset-password*/}
                        {/*/addresses*/}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;