
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function Layout() {
    return (
        <>

            <Header />

            <main className="container py-4">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default Layout;
