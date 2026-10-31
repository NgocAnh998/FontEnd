import React, { useState, useEffect } from "react";

interface CustomRequest {
    id: number;
    customerName: string;
    phone: string;
    craftType: string;
    budget: string;
    note: string;
    createdAt: string;
}

export const CustomOrder: React.FC = () => {
    const [customerName, setCustomerName] = useState("");
    const [phone, setPhone] = useState("");
    const [craftType, setCraftType] = useState("Len móc thủ công");
    const [budget, setBudget] = useState("");
    const [note, setNote] = useState("");
    const [submittedOrders, setSubmittedOrders] = useState<CustomRequest[]>([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("custom_handmade_orders");
        if (saved) {
            try {
                setSubmittedOrders(JSON.parse(saved));
            } catch {
                setSubmittedOrders([]);
            }
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!customerName.trim() || !phone.trim() || !note.trim()) {
            setMessage("Vui lòng điền đầy đủ họ tên, số điện thoại và mô tả yêu cầu.");
            return;
        }

        const newOrder: CustomRequest = {
            id: Date.now(),
            customerName: customerName.trim(),
            phone: phone.trim(),
            craftType,
            budget: budget.trim() || "Thỏa thuận",
            note: note.trim(),
            createdAt: new Date().toLocaleDateString("vi-VN"),
        };

        const updated = [newOrder, ...submittedOrders];
        setSubmittedOrders(updated);
        localStorage.setItem("custom_handmade_orders", JSON.stringify(updated));

        setCustomerName("");
        setPhone("");
        setBudget("");
        setNote("");
        setMessage("Đã gửi yêu cầu đặt làm riêng thành công! Xưởng sẽ liên hệ sớm.");
    };

    return (
        <div className="custom-order-page">
            <div className="custom-order-header">
                <h2>Đặt Làm Đồ Handmade Theo Yêu Cầu</h2>
                <p>
                    Bạn muốn khắc tên riêng, phối màu theo sở thích hoặc đặt quà tặng thủ
                    công độc bản? Để lại thông tin bên dưới để nghệ nhân tư vấn.
                </p>
            </div>

            <div className="custom-order-grid">
                <form className="custom-order-form" onSubmit={handleSubmit}>
                    {message && <div className="order-alert">{message}</div>}

                    <div className="form-row">
                        <label>Họ và tên *</label>
                        <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="Nhập tên của bạn"
                        />
                    </div>

                    <div className="form-row">
                        <label>Số điện thoại / Zalo *</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Ví dụ: 0901234567"
                        />
                    </div>

                    <div className="form-row">
                        <label>Nhóm sản phẩm thủ công</label>
                        <select
                            value={craftType}
                            onChange={(e) => setCraftType(e.target.value)}
                        >
                            <option value="Len móc thủ công">Len móc thủ công</option>
                            <option value="Nến thơm & Sáp nghệ thuật">
                                Nến thơm & Sáp nghệ thuật
                            </option>
                            <option value="Gốm vẽ tay">Gốm vẽ tay</option>
                            <option value="Phụ kiện da khâu tay">Phụ kiện da khâu tay</option>
                            <option value="Thiệp & Scrapbook">Thiệp & Scrapbook</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <label>Ngân sách dự kiến (VNĐ)</label>
                        <input
                            type="text"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            placeholder="Ví dụ: 250.000đ"
                        />
                    </div>

                    <div className="form-row">
                        <label>Mô tả chi tiết (màu sắc, kích thước, chữ khắc...) *</label>
                        <textarea
                            rows={4}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Mô tả ý tưởng món đồ bạn muốn đặt làm..."
                        />
                    </div>

                    <button type="submit" className="btn-submit-custom">
                        Gửi yêu cầu đặt làm
                    </button>
                </form>

                <div className="custom-order-history">
                    <h3>Yêu cầu đã gửi gần đây</h3>
                    {submittedOrders.length === 0 ? (
                        <p className="empty-history">Bạn chưa có yêu cầu đặt làm nào.</p>
                    ) : (
                        <ul className="history-list">
                            {submittedOrders.map((item) => (
                                <li key={item.id} className="history-card">
                                    <div className="history-top">
                                        <strong>{item.craftType}</strong>
                                        <span>{item.createdAt}</span>
                                    </div>
                                    <p>{item.note}</p>
                                    <small>
                                        Khách: {item.customerName} - Ngân sách: {item.budget}
                                    </small>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};