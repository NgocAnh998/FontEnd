
import { NavLink } from "react-router-dom";

function ProfileMenu() {
    const menuItems = [
        { title: "Thông tin cá nhân", path: "/profile" },
        { title: "Đơn hàng", path: "/profile/orders" },
        { title: "Voucher", path: "/profile/vouchers" },
        { title: "Tin nhắn", path: "/profile/messages" },
        { title: "Địa chỉ", path: "/profile/addresses" },
    ];

    return (
        <div className="card border-0 shadow-handmade p-3">
            <h5 className="fw-bold mb-3 px-2">Tài khoản của tôi</h5>
            <nav className="nav flex-column profile-menu">
                {menuItems.map((item) => (
                    <NavLink key={item.path} to={item.path} end={item.path === "/profile"} className={({ isActive }) => `nav-link rounded-3 px-3 py-3 mb-1 ${isActive ? "active" : ""}`}>
                        {item.title}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}

export default ProfileMenu;
