import { NavLink } from "react-router-dom";

function SlideBarAdmin() {
    return (
        <aside
            className="bg-dark text-white p-3 d-flex flex-column flex-shrink-0"
            style={{ width: "250px", minHeight: "100vh" }}>
            <h4 className="text-center mb-4">Admin Panel</h4>

            <hr className="text-secondary" />

            <nav className="nav nav-pills flex-column gap-2">
                <NavLink to="/admin" end className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-speedometer2 me-2"></i>
                    Dashboard
                </NavLink>

                <NavLink to="/admin/products" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-box-seam me-2"></i>
                    Products
                </NavLink>

                <NavLink to="/admin/users" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-people me-2"></i>
                    Users
                </NavLink>

                <NavLink to="/admin/orders" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-cart me-2"></i>Orders</NavLink>
            </nav>

            <div className="mt-auto pt-4">
                <hr className="text-secondary" />
                <span className="text-secondary small">
                    Admin Management
                </span>
            </div>
        </aside>
    );
}

export default SlideBarAdmin;