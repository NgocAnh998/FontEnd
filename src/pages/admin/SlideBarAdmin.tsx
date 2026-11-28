import { NavLink } from "react-router-dom";

function SlideBarAdmin() {
    return (
        <aside className="bg-dark text-white p-3 d-flex flex-column flex-shrink-0" style={{ width: "250px", minHeight: "100vh" }}>
            <h4 className="text-center mb-4">Admin Panel</h4>

            <hr className="text-secondary" />

            <nav className="nav nav-pills flex-column gap-2">
                <NavLink to="/admin" end className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-speedometer2 me-2"></i>
                    Dashboard
                </NavLink>

                <div className="text-secondary small mt-3 mb-1">
                    PRODUCT MANAGEMENT
                </div>

                <NavLink to="/admin/products" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-box-seam me-2"></i>
                    Products
                </NavLink>

                <NavLink to="/admin/categories" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-grid me-2"></i>
                    Categories
                </NavLink>

                <NavLink to="/admin/inventory" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-clipboard-data me-2"></i>
                    Inventory
                </NavLink>

                <NavLink to="/admin/promotions" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-ticket-perforated me-2"></i>
                    Promotions
                </NavLink>

                <div className="text-secondary small mt-3 mb-1">
                    ORDER MANAGEMENT
                </div>

                <NavLink to="/admin/orders" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-cart me-2"></i>
                    Orders
                </NavLink>

                <NavLink to="/admin/shipping" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}><i className="bi bi-truck me-2"></i>
                    Shipping
                </NavLink>

                <NavLink to="/admin/payments" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-credit-card me-2"></i>
                    Payments & Refunds
                </NavLink>

                <div className="text-secondary small mt-3 mb-1">
                    CUSTOMER MANAGEMENT
                </div>

                <NavLink to="/admin/users" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-people me-2"></i>
                    Users
                </NavLink>

                <NavLink to="/admin/reviews" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-star me-2"></i>
                    Product Reviews
                </NavLink>

                <NavLink to="/admin/support" className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                    <i className="bi bi-headset me-2"></i>
                    Customer Support
                </NavLink>
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