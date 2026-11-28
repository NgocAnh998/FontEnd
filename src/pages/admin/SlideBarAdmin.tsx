import { NavLink } from "react-router-dom";

interface SlideBarAdminProps {
    open: boolean;
    onNavigate: () => void;
}

const groups = [
    {
        title: "",
        items: [
            { to: "/admin", label: "Dashboard", icon: "bi-speedometer2", end: true }
        ]
    },
    {
        title: "PRODUCT MANAGEMENT",
        items: [
            { to: "/admin/products", label: "Products", icon: "bi-box-seam" },
            { to: "/admin/categories", label: "Categories", icon: "bi-grid" },
            { to: "/admin/inventory", label: "Inventory", icon: "bi-clipboard-data" },
            { to: "/admin/promotions", label: "Promotions", icon: "bi-ticket-perforated" }
        ]
    },
    {
        title: "ORDER MANAGEMENT",
        items: [
            { to: "/admin/orders", label: "Orders", icon: "bi-cart" },
            { to: "/admin/shipping", label: "Shipping", icon: "bi-truck" },
            { to: "/admin/payments", label: "Payments & Refunds", icon: "bi-credit-card" }
        ]
    },
    {
        title: "CUSTOMER MANAGEMENT",
        items: [
            { to: "/admin/users", label: "Users", icon: "bi-people" },
            { to: "/admin/reviews", label: "Product Reviews", icon: "bi-star" },
            { to: "/admin/support", label: "Customer Support", icon: "bi-headset" }
        ]
    }
];

function SlideBarAdmin({ open, onNavigate }: SlideBarAdminProps) {
    return (
        <aside
            className={`admin-sidebar bg-dark text-white p-3 flex-column flex-shrink-0 d-md-flex ${
                open ? "d-flex" : "d-none"
            }`}
        >
            <h4 className="text-center mb-4 d-none d-md-block">Admin Panel</h4>

            <hr className="text-secondary d-none d-md-block" />

            <nav className="nav nav-pills flex-column gap-1">
                {groups.map((group) => (
                    <div key={group.title || "main"} className="d-flex flex-column gap-1">
                        {group.title && (
                            <div className="text-secondary small mt-3 mb-1">
                                {group.title}
                            </div>
                        )}

                        {group.items.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={"end" in item ? item.end : false}
                                onClick={onNavigate}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : "text-white"}`
                                }
                            >
                                <i className={`bi ${item.icon} me-2`}></i>
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                ))}
            </nav>

            <div className="mt-auto pt-4">
                <hr className="text-secondary" />
                <span className="text-secondary small">Admin Management</span>
            </div>
        </aside>
    );
}

export default SlideBarAdmin;