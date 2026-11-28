
import { useState } from "react";
import "./Orders.css";
import ProfileMenu from "../../components/Profile/ProfileMenu.tsx";

const initialOrders = [
    {
        id: "HD202611001",
        date: "25/11/2026",
        status: "pending",
        total: 350000,
        items: [
            {
                name: "Túi tote handmade",
                image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300",
                price: 150000,
                quantity: 1,
            },
            {
                name: "Móc khóa len",
                image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300",
                price: 100000,
                quantity: 2,
            },
        ],
    },
    {
        id: "HD202611002",
        date: "23/11/2026",
        status: "shipping",
        total: 280000,
        items: [
            {
                name: "Hoa len handmade",
                image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=300",
                price: 280000,
                quantity: 1,
            },
        ],
    },
    {
        id: "HD202611003",
        date: "20/11/2026",
        status: "completed",
        total: 420000,
        items: [
            {
                name: "Gấu bông handmade",
                image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300",
                price: 420000,
                quantity: 1,
            },
        ],
    },
    {
        id: "HD202611004",
        date: "18/11/2026",
        status: "cancelled",
        total: 120000,
        items: [
            {
                name: "Vòng tay handmade",
                image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300",
                price: 120000,
                quantity: 1,
            },
        ],
    },
];

const statusInfo = {
    pending: {
        label: "Chờ xác nhận",
        className: "order-status-pending",
    },
    processing: {
        label: "Đang xử lý",
        className: "order-status-processing",
    },
    shipping: {
        label: "Đang giao hàng",
        className: "order-status-shipping",
    },
    completed: {
        label: "Đã giao hàng",
        className: "order-status-completed",
    },
    cancelled: {
        label: "Đã hủy",
        className: "order-status-cancelled",
    },
};

const filters = [
    { label: "Tất cả", value: "all" },
    { label: "Chờ xác nhận", value: "pending" },
    { label: "Đang xử lý", value: "processing" },
    { label: "Đang giao", value: "shipping" },
    { label: "Đã giao", value: "completed" },
    { label: "Đã hủy", value: "cancelled" },
];

function formatPrice(price) {
    return price.toLocaleString("vi-VN") + " ₫";
}

function Orders() {
    const [orders, setOrders] = useState(initialOrders);
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedOrder, setSelectedOrder] = useState(null);

    const filteredOrders = orders.filter((order) => {
        if (activeFilter === "all") return true;
        return order.status === activeFilter;
    });

    const handleCancelOrder = (orderId) => {
        const confirmCancel = window.confirm( "Bạn có chắc chắn muốn hủy đơn hàng này?" );

        if (!confirmCancel) return;

        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === orderId
                    ? { ...order, status: "cancelled" }
                    : order
            )
        );

        setSelectedOrder(null);
    };

    return (
        <div className="row g-4">
            <div className="col-12 col-md-4 col-lg-3">
                <ProfileMenu />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
                <div className="orders-page container py-4">
                    <div className="orders-header mb-4">
                        <h2 className="fw-bold">Đơn hàng của tôi</h2>
                        <p className="text-muted mb-0">
                            Theo dõi và quản lý các đơn hàng của bạn.
                        </p>
                    </div>

                    {/* Bộ lọc trạng thái */}
                    <div className="orders-filter mb-4">
                        {filters.map((filter) => (
                            <button
                                key={filter.value}
                                className={`orders-filter-btn ${
                                    activeFilter === filter.value ? "active" : ""
                                }`}
                                onClick={() => setActiveFilter(filter.value)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Danh sách đơn hàng */}
                    <div className="orders-list">
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order) => {
                                const status = statusInfo[order.status];

                                return (
                                    <div className="order-card mb-3" key={order.id}>
                                        <div className="order-card-header">
                                            <div>
                                                <span className="text-muted small">Mã đơn hàng</span>
                                                <h6 className="fw-bold mb-1">{order.id}</h6>
                                                <span className="text-muted small">Ngày đặt: {order.date} </span>
                                            </div>

                                            <span className={`order-status ${status.className}`}> {status.label} </span>
                                        </div>

                                        <div className="order-card-body">
                                            {order.items.map((item, index) => (
                                                <div className="order-product" key={index}>
                                                    <img  src={item.image} alt={item.name} className="order-product-image" />

                                                    <div className="order-product-info">
                                                        <h6>{item.name}</h6>
                                                        <p className="text-muted mb-1"> Số lượng: {item.quantity} </p>
                                                        <span>{formatPrice(item.price)}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="order-card-footer">
                                            <div>
                                                <span className="text-muted">Tổng tiền: </span>
                                                <span className="order-total"> {formatPrice(order.total)} </span>
                                            </div>

                                            <div className="order-actions">
                                                <button className="btn btn-outline-secondary btn-sm" onClick={() => setSelectedOrder(order)} > Xem chi tiết </button>

                                                {order.status === "pending" && ( <button className="btn btn-outline-danger btn-sm" onClick={() => handleCancelOrder(order.id)} > Hủy đơn </button>)}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="orders-empty text-center py-5">
                                <div className="orders-empty-icon">🛍️</div>
                                <h5>Không có đơn hàng nào</h5>
                                <p className="text-muted"> Bạn chưa có đơn hàng thuộc trạng thái này. </p>
                            </div>
                        )}
                    </div>

                    {/* Modal chi tiết đơn hàng */}
                    {selectedOrder && (
                        <div className="order-modal-overlay" onClick={() => setSelectedOrder(null)} >
                            <div className="order-modal" onClick={(e) => e.stopPropagation()} >
                                <div className="order-modal-header">
                                    <h5 className="fw-bold mb-0">Chi tiết đơn hàng</h5>

                                    <button className="order-modal-close" onClick={() => setSelectedOrder(null)} >
                                        ×
                                    </button>
                                </div>

                                <div className="order-modal-body">
                                    <div className="mb-3">
                                        <p className="mb-1">
                                            <strong>Mã đơn:</strong> {selectedOrder.id}
                                        </p>

                                        <p className="mb-1">
                                            <strong>Ngày đặt:</strong> {selectedOrder.date}
                                        </p>

                                        <p className="mb-0">
                                            <strong>Trạng thái:</strong>{" "}
                                            <span className={`order-status ${ statusInfo[selectedOrder.status].className }`} > {statusInfo[selectedOrder.status].label} </span>
                                        </p>
                                    </div>

                                    <hr />

                                    <h6 className="fw-bold mb-3">Sản phẩm</h6>

                                    {selectedOrder.items.map((item, index) => (
                                        <div className="order-detail-product" key={index}>
                                            <img src={item.image} alt={item.name} />

                                            <div className="flex-grow-1">
                                                <p className="mb-1 fw-semibold">{item.name}</p>
                                                <small className="text-muted">
                                                    x{item.quantity}
                                                </small>
                                            </div>

                                            <span>{formatPrice(item.price * item.quantity)}</span>
                                        </div>
                                    ))}

                                    <hr />

                                    <div className="d-flex justify-content-between">
                                        <span className="fw-bold">Tổng thanh toán</span>
                                        <span className="order-total"> {formatPrice(selectedOrder.total)}  </span>
                                    </div>
                                </div>

                                <div className="order-modal-footer"> {selectedOrder.status === "pending" && (  <button className="btn btn-outline-danger" onClick={() => handleCancelOrder(selectedOrder.id)} > Hủy đơn hàng </button>)}

                                    <button className="btn btn-secondary" onClick={() => setSelectedOrder(null)} > Đóng </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>


            );
}

export default Orders;
