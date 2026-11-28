import { NavLink } from "react-router-dom";

const menuItems = [
    { title: "Thông tin cá nhân", path: "/profile", icon: "bi-person" },
    { title: "Đơn hàng", path: "/profile/orders", icon: "bi-receipt" },
    { title: "Voucher", path: "/profile/vouchers", icon: "bi-ticket-perforated" },
    { title: "Tin nhắn", path: "/profile/messages", icon: "bi-chat-dots" },
    { title: "Địa chỉ", path: "/profile/addresses", icon: "bi-geo-alt" }
];

function ProfileMenu() {
    return (
        <div className="card border-0 shadow-handmade p-3">
            <h5 className="fw-bold mb-3 px-2">Tài khoản của tôi</h5>

            <nav className="nav flex-column profile-menu">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/profile"}
                        className={({ isActive }) =>
                            `nav-link d-flex align-items-center gap-2 rounded-3 px-3 py-3 mb-1 ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        <i className={`bi ${item.icon}`}></i>
                        {item.title}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}

export default ProfileMenu;