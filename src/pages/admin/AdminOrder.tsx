
function AdminOrder() {
    return (
        <div className="container-fluid">
            <div className="mb-4">
                <h2 className="fw-bold mb-1">Order Management</h2>
                <p className="text-muted mb-0">
                    Manage and track customer orders.
                </p>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Total Orders</h6>
                            <h3>85</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Pending</h6>
                            <h3 className="text-warning">15</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Completed</h6>
                            <h3 className="text-success">60</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Cancelled</h6>
                            <h3 className="text-danger">10</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-white py-3">
                    <h5 className="mb-0">Order List</h5>
                </div>

                <div className="card-body">
                    <div className="row g-3 mb-3">
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Search order ID or customer..."/>
                        </div>

                        <div className="col-md-4">
                            <select className="form-select" defaultValue="all">
                                <option value="all">All Statuses</option>
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle">
                            <thead className="table-dark">
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Order Date</th>
                                <th>Total</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>#ORD001</td>
                                <td>Nguyen Van An</td>
                                <td>18/11/2026</td>
                                <td>1.100.000đ</td>
                                <td>Credit Card</td>
                                <td>
                                        <span className="badge bg-warning text-dark">Pending</span>
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-sm">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td>#ORD002</td>
                                <td>Tran Thi Binh</td>
                                <td>19/11/2026</td>
                                <td>850.000đ</td>
                                <td>Cash</td>
                                <td>
                                        <span className="badge bg-info text-dark">Processing</span>
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-sm">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td>#ORD003</td>
                                <td>Le Van Cuong</td>
                                <td>19/11/2026</td>
                                <td>320.000đ</td>
                                <td>Bank Transfer</td>
                                <td>
                                        <span className="badge bg-success">Completed</span>
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-sm">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td>#ORD004</td>
                                <td>Pham Thi Dung</td>
                                <td>20/11/2026</td>
                                <td>150.000đ</td>
                                <td>Cash</td>
                                <td>
                                        <span className="badge bg-danger">Cancelled</span>
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-sm">View</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="text-muted small">Showing 4 orders</div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrder;
