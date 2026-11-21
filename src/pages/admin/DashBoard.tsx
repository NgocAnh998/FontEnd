function DashboardAdmin() {
    return (
        <div>
            <div className="mb-4">
                <h2 className="fw-bold">Admin Dashboard</h2>
                <p className="text-muted">Overview of your store activities.</p>
            </div>

            <div className="row g-4 mb-4">
                <div className="col-md-6 col-xl-3">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Total Products</h6>
                            <h3 className="fw-bold">120</h3>
                            <span className="text-success">Products in store</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-3">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Total Users</h6>
                            <h3 className="fw-bold">350</h3>
                            <span className="text-primary">Registered users</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-3">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Total Orders</h6>
                            <h3 className="fw-bold">85</h3>
                            <span className="text-warning">Orders received</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-3">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Revenue</h6>
                            <h3 className="fw-bold">25.000.000đ</h3>
                            <span className="text-success">Total revenue</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <h5 className="mb-0">Recent Activities</h5>
                </div>

                <div className="card-body">
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
                        <tr>
                            <td>1</td>
                            <td>New order received</td>
                            <td>20/11/2026</td>
                            <td>
                                    <span className="badge bg-success">
                                        Completed
                                    </span>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>New user registered</td>
                            <td>20/11/2026</td>
                            <td>
                                    <span className="badge bg-primary">
                                        New
                                    </span>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Product inventory updated</td>
                            <td>19/11/2026</td>
                            <td>
                                    <span className="badge bg-warning text-dark">
                                        Updated
                                    </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DashboardAdmin;