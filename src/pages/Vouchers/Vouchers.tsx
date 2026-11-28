import { useState } from "react";
import "./Vouchers.css";
import ProfileMenu from "../../components/Profile/ProfileMenu.tsx";

const initialVouchers = [
    { id: 1, code: "HANDMADE10", title: "Giảm 10%", description: "Giảm 10% cho đơn hàng handmade", discount: "10%", minOrder: 100000, maxDiscount: 50000, expiry: "30/12/2026", status: "available", type: "percent" },
    { id: 2, code: "WELCOME50", title: "Giảm 50.000đ", description: "Ưu đãi dành cho khách hàng mới", discount: "50.000đ", minOrder: 200000, maxDiscount: 50000, expiry: "15/12/2026", status: "available", type: "money" },
    { id: 3, code: "FREESHIP", title: "Miễn phí vận chuyển", description: "Miễn phí vận chuyển cho đơn hàng", discount: "Free ship", minOrder: 150000, maxDiscount: 30000, expiry: "25/12/2026", status: "available", type: "shipping" },
    { id: 4, code: "CRAFT20", title: "Giảm 20%", description: "Giảm giá sản phẩm handmade", discount: "20%", minOrder: 300000, maxDiscount: 100000, expiry: "10/12/2026", status: "used", type: "percent" },
    { id: 5, code: "OLDDEAL", title: "Giảm 30.000đ", description: "Voucher khuyến mãi đã hết hạn", discount: "30.000đ", minOrder: 100000, maxDiscount: 30000, expiry: "01/11/2026", status: "expired", type: "money" }
];

const formatPrice = (price) => price.toLocaleString("vi-VN") + "đ";

function Vouchers() {
    const [vouchers, setVouchers] = useState(initialVouchers);
    const [activeFilter, setActiveFilter] = useState("all");
    const [voucherCode, setVoucherCode] = useState("");
    const [message, setMessage] = useState("");

    const filteredVouchers = vouchers.filter((voucher) => {
        if (activeFilter === "all") return true;
        return voucher.status === activeFilter;
    });

    const copyVoucher = async (code) => {
        try {
            await navigator.clipboard.writeText(code);
            setMessage(`Đã sao chép mã ${code}`);
            setTimeout(() => setMessage(""), 2000);
        } catch {
            setMessage("Không thể sao chép mã voucher");
        }
    };

    const addVoucher = () => {
        const code = voucherCode.trim().toUpperCase();

        if (!code) {
            setMessage("Vui lòng nhập mã voucher");
            return;
        }

        const existed = vouchers.some((voucher) => voucher.code === code);

        if (existed) {
            setMessage("Voucher này đã tồn tại");
            return;
        }

        setVouchers([...vouchers, { id: Date.now(), code, title: "Voucher của bạn", description: "Voucher được thêm vào", discount: "Ưu đãi", minOrder: 0, maxDiscount: 0, expiry: "Chưa xác định", status: "available", type: "money" }]);
        setVoucherCode("");
        setMessage("Thêm voucher thành công");
        setTimeout(() => setMessage(""), 2000);
    };

    return (
        <div className="row g-4">
            <div className="col-12 col-md-4 col-lg-3">
                <ProfileMenu />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
        <div className="voucher-page container py-4">
            <div className="voucher-header">
                <h2>Voucher của tôi</h2>
                <p>Khám phá và sử dụng những ưu đãi dành cho bạn.</p>
            </div>

            <div className="voucher-add-box">
                <h5>Nhập mã voucher</h5>
                <div className="voucher-input-group">
                    <input type="text" className="form-control" placeholder="Nhập mã giảm giá..." value={voucherCode} onChange={(e) => setVoucherCode(e.target.value)} />
                    <button className="btn btn-dark" onClick={addVoucher}>Thêm mã</button>
                </div>
                {message && <div className="voucher-message">{message}</div>}
            </div>

            <div className="voucher-filter">
                <button className={`voucher-filter-btn ${activeFilter === "all" ? "active" : ""}`} onClick={() => setActiveFilter("all")}>Tất cả</button>
                <button className={`voucher-filter-btn ${activeFilter === "available" ? "active" : ""}`} onClick={() => setActiveFilter("available")}>Chưa sử dụng</button>
                <button className={`voucher-filter-btn ${activeFilter === "used" ? "active" : ""}`} onClick={() => setActiveFilter("used")}>Đã sử dụng</button>
                <button className={`voucher-filter-btn ${activeFilter === "expired" ? "active" : ""}`} onClick={() => setActiveFilter("expired")}>Hết hạn</button>
            </div>

            <div className="voucher-list">
                {filteredVouchers.map((voucher) => (
                    <div className={`voucher-card ${voucher.status !== "available" ? "voucher-disabled" : ""}`} key={voucher.id}>
                        <div className="voucher-left">
                            <div className="voucher-icon">🎁</div>
                            <div className="voucher-discount">{voucher.discount}</div>
                            <div className="voucher-code">{voucher.code}</div>
                        </div>

                        <div className="voucher-content">
                            <h5>{voucher.title}</h5>
                            <p>{voucher.description}</p>
                            <div className="voucher-info">
                                <span>Đơn tối thiểu: {formatPrice(voucher.minOrder)}</span>
                                <span>Giảm tối đa: {voucher.maxDiscount > 0 ? formatPrice(voucher.maxDiscount) : "Không giới hạn"}</span>
                                <span>Hạn sử dụng: {voucher.expiry}</span>
                            </div>
                            <div className="voucher-status">
                                {voucher.status === "available" && <span className="badge bg-success">Có thể sử dụng</span>}
                                {voucher.status === "used" && <span className="badge bg-secondary">Đã sử dụng</span>}
                                {voucher.status === "expired" && <span className="badge bg-danger">Đã hết hạn</span>}
                            </div>
                        </div>

                        <div className="voucher-action">
                            {voucher.status === "available" ? <button className="btn btn-outline-dark" onClick={() => copyVoucher(voucher.code)}>Sao chép mã</button> : <button className="btn btn-outline-secondary" disabled>Không khả dụng</button>}
                        </div>
                    </div>
                ))}
            </div>

            {filteredVouchers.length === 0 && <div className="voucher-empty"><p>Không có voucher nào.</p></div>}
        </div>
            </div>
        </div>
    );
}

export default Vouchers;