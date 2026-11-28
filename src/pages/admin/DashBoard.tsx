import StatCard from "./StatCard";

const stats = [
    { title: "Total Products", value: "120", note: "Products in store", icon: "bi-box-seam", color: "success" },
    { title: "Total Users", value: "350", note: "Registered users", icon: "bi-people", color: "primary" },
    { title: "Total Orders", value: "85", note: "Orders received", icon: "bi-cart-check", color: "warning" },
    { title: "Revenue", value: "25.000.000đ", note: "Total revenue", icon: "bi-cash-coin", color: "info" }
] as const;

const orderStatus = [
    { label: "Completed", percent: 60, color: "success" },
    { label: "Processing", percent: 25, color: "warning" },
    { label: "Cancelled", percent: 15, color: "danger" }
];

const activities = [
    { id: 1, text: "New order received", date: "20/11/2026", status: "Completed", badge: "text-bg-success" },
    { id: 2, text: "New user registered", date: "20/11/2026", status: "New", badge: "text-bg-primary" },
    { id: 3, text: "Product inventory updated", date: "19/11/2026", status: "Updated", badge: "text-bg-warning" }
];

function DashboardAdmin() {
    return (
        <div>
            <div className="mb-4">
                <h2 className="fw-bold">Admin Dashboard</h2>
                <p className="text-muted">Overview of your store activities.</p>
            </div>

            <div className="row g-4 mb-4">
                {stats.map((item) => (
                    <StatCard key={item.title} {...item} />
                ))}
            </div>

            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header bg-white py-3">
                            <h5 className="mb-0">Order Status</h5>
                        </div>

                        <div className="card-body">
                            {orderStatus.map((item) => (
                                <div className="mb-3" key={item.label}>
                                    <div className="d-flex justify-content-between small mb-1">
                                        <span>{item.label}</span>
                                        <span className="fw-semibold">{item.percent}%</span>
                                    </div>

                                    <div className="progress" style={{ height: "8px" }}>
                                        <div
                                            className={`progress-bar bg-${item.color}`}
                                            role="progressbar"
                                            style={{ width: `${item.percent}%` }}
                                            aria-valuenow={item.percent}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header bg-white py-3">
                            <h5 className="mb-0">Recent Activities</h5>
                        </div>

                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Activity</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {activities.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.text}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                    <span className={`badge ${item.badge}`}>
                                                        {item.status}
                                                    </span>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardAdmin;