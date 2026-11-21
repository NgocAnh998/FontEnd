
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

                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Total Orders</h6>
                            <h3>85</h3>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Pending Orders</h6>
                            <h3 className="text-warning">15</h3>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Completed Orders</h6>
                            <h3 className="text-success">60</h3>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Cancelled Orders</h6>
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

                        <div className="col-lg-5 col-md-12">
                            <input type="text" className="form-control" placeholder="Search order ID, customer, email..."/>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <select className="form-select" defaultValue="all">
                                <option value="all">All Statuses</option>
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="shipped">Shipped</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <select className="form-select" defaultValue="all">
                                <option value="all">All Payments</option>
                                <option value="paid">Paid</option>
                                <option value="unpaid">Unpaid</option>
                                <option value="refunded">Refunded</option>
                            </select>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <select className="form-select" defaultValue="newest">
                                <option value="newest">Newest Orders</option>
                                <option value="oldest">Oldest Orders</option>
                                <option value="price-asc">Total: Low to High</option>
                                <option value="price-desc">Total: High to Low</option>
                            </select>
                        </div>

                    </div>


                    <div className="table-responsive">

                        <table className="table table-bordered table-hover align-middle">

                            <thead className="table-dark">
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Contact</th>
                                <th>Order Date</th>
                                <th>Items</th>
                                <th>Subtotal</th>
                                <th>Discount</th>
                                <th>Shipping Fee</th>
                                <th>Total</th>
                                <th>Payment Method</th>
                                <th>Payment Status</th>
                                <th>Order Status</th>
                                <th>Shipping Provider</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>

                            <tr>
                                <td>
                                    <strong>#ORD001</strong>
                                </td>
                                <td>Nguyen Van An</td>
                                <td>
                                    an@gmail.com
                                    <br />
                                    <small className="text-muted">
                                        0901234567
                                    </small>
                                </td>
                                <td>18/11/2026</td>
                                <td>3</td>
                                <td>1.200.000đ</td>
                                <td>100.000đ</td>
                                <td>0đ</td>
                                <td>
                                    <strong className="text-primary">
                                        1.100.000đ
                                    </strong>
                                </td>
                                <td>Credit Card</td>
                                <td>
                                        <span className="badge bg-success">
                                            Paid
                                        </span>
                                </td>
                                <td>
                                        <span className="badge bg-warning text-dark">
                                            Pending
                                        </span>
                                </td>
                                <td>Giao Hàng Nhanh</td>
                                <td className="text-nowrap">
                                    <button className="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#viewOrderModal">
                                        View
                                    </button>

                                    <button className="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editOrderModal">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#cancelOrderModal">
                                        Cancel
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>#ORD002</strong>
                                </td>
                                <td>Tran Thi Binh</td>
                                <td>
                                    binh@gmail.com
                                    <br />
                                    <small className="text-muted">
                                        0912345678
                                    </small>
                                </td>
                                <td>19/11/2026</td>
                                <td>2</td>
                                <td>900.000đ</td>
                                <td>50.000đ</td>
                                <td>0đ</td>
                                <td>
                                    <strong className="text-primary">
                                        850.000đ
                                    </strong>
                                </td>
                                <td>Cash</td>
                                <td>
                                        <span className="badge bg-warning text-dark">
                                            Unpaid
                                        </span>
                                </td>
                                <td>
                                        <span className="badge bg-info text-dark">
                                            Processing
                                        </span>
                                </td>
                                <td>Viettel Post</td>
                                <td className="text-nowrap">
                                    <button className="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#viewOrderModal">
                                        View
                                    </button>

                                    <button className="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editOrderModal">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#cancelOrderModal">
                                        Cancel
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>#ORD003</strong>
                                </td>
                                <td>Le Van Cuong</td>
                                <td>
                                    cuong@gmail.com
                                    <br />
                                    <small className="text-muted">
                                        0923456789
                                    </small>
                                </td>
                                <td>19/11/2026</td>
                                <td>1</td>
                                <td>350.000đ</td>
                                <td>30.000đ</td>
                                <td>0đ</td>
                                <td>
                                    <strong className="text-primary">
                                        320.000đ
                                    </strong>
                                </td>
                                <td>Bank Transfer</td>
                                <td>
                                        <span className="badge bg-success">
                                            Paid
                                        </span>
                                </td>
                                <td>
                                        <span className="badge bg-success">
                                            Completed
                                        </span>
                                </td>
                                <td>Giao Hàng Tiết Kiệm</td>
                                <td className="text-nowrap">
                                    <button className="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#viewOrderModal">
                                        View
                                    </button>

                                    <button className="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editOrderModal">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#cancelOrderModal">
                                        Cancel
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>#ORD004</strong>
                                </td>
                                <td>Pham Thi Dung</td>
                                <td>
                                    dung@gmail.com
                                    <br />
                                    <small className="text-muted">
                                        0934567890
                                    </small>
                                </td>
                                <td>20/11/2026</td>
                                <td>1</td>
                                <td>200.000đ</td>
                                <td>50.000đ</td>
                                <td>0đ</td>
                                <td>
                                    <strong className="text-primary">
                                        150.000đ
                                    </strong>
                                </td>
                                <td>Cash</td>
                                <td>
                                        <span className="badge bg-danger">
                                            Refunded
                                        </span>
                                </td>
                                <td>
                                        <span className="badge bg-danger">
                                            Cancelled
                                        </span>
                                </td>
                                <td>-</td>
                                <td className="text-nowrap">
                                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#viewOrderModal">
                                        View
                                    </button>
                                </td>
                            </tr>

                            </tbody>

                        </table>

                    </div>

                    <div className="text-muted small">
                        Showing 4 orders
                    </div>

                </div>
            </div>

            <div className="modal fade" id="viewOrderModal" tabIndex={-1}>
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Order Details - #ORD001</h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal"/>
                        </div>

                        <div className="modal-body">

                            <h6 className="fw-bold mb-3">Order Information</h6>

                            <div className="row mb-4">

                                <div className="col-md-4 mb-3">
                                    <label className="text-muted small">
                                        Order ID
                                    </label>
                                    <div className="fw-bold">#ORD001</div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="text-muted small">
                                        Order Date
                                    </label>
                                    <div>18/11/2026 14:30</div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="text-muted small">
                                        Order Status
                                    </label>
                                    <div>
                                        <span className="badge bg-warning text-dark">
                                            Pending
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <hr />

                            <h6 className="fw-bold mb-3">Customer Information</h6>

                            <div className="row mb-4">

                                <div className="col-md-4 mb-3">
                                    <label className="text-muted small">
                                        Full Name
                                    </label>
                                    <div>Nguyen Van An</div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="text-muted small">
                                        Email
                                    </label>
                                    <div>an@gmail.com</div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="text-muted small">
                                        Phone Number
                                    </label>
                                    <div>0901234567</div>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label className="text-muted small">
                                        Shipping Address
                                    </label>
                                    <div>
                                        123 Nguyen Trai, District 1,
                                        Ho Chi Minh City
                                    </div>
                                </div>

                            </div>

                            <hr />

                            <h6 className="fw-bold mb-3">Order Items</h6>

                            <div className="table-responsive mb-4">

                                <table className="table table-bordered align-middle">

                                    <thead className="table-light">
                                    <tr>
                                        <th>Product</th>
                                        <th>SKU</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                    </tr>
                                    </thead>

                                    <tbody>

                                    <tr>
                                        <td>Wireless Mouse</td>
                                        <td>MS-001</td>
                                        <td>250.000đ</td>
                                        <td>2</td>
                                        <td>500.000đ</td>
                                    </tr>

                                    <tr>
                                        <td>Mechanical Keyboard</td>
                                        <td>KB-002</td>
                                        <td>700.000đ</td>
                                        <td>1</td>
                                        <td>700.000đ</td>
                                    </tr>

                                    </tbody>

                                </table>

                            </div>

                            <div className="row">

                                <div className="col-md-6 mb-4">
                                    <h6 className="fw-bold mb-3">
                                        Payment Information
                                    </h6>

                                    <div className="mb-2">
                                        Payment Method: Credit Card
                                    </div>

                                    <div className="mb-2">
                                        Payment Status:{" "}
                                        <span className="badge bg-success">
                                            Paid
                                        </span>
                                    </div>

                                    <div className="mb-2">
                                        Transaction ID: TXN20261118001
                                    </div>

                                </div>

                                <div className="col-md-6 mb-4">

                                    <h6 className="fw-bold mb-3">
                                        Order Summary
                                    </h6>

                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Subtotal</span>
                                        <span>1.200.000đ</span>
                                    </div>

                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Discount</span>
                                        <span>100.000đ</span>
                                    </div>

                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Shipping Fee</span>
                                        <span>0đ</span>
                                    </div>

                                    <hr />

                                    <div className="d-flex justify-content-between fw-bold">
                                        <span>Total</span>
                                        <span className="text-primary">
                                            1.100.000đ
                                        </span>
                                    </div>

                                </div>

                            </div>
                            <hr />

                            <h6 className="fw-bold mb-3">Shipping Information</h6>

                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <label className="text-muted small">
                                        Shipping Provider
                                    </label>
                                    <div>Giao Hàng Nhanh</div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="text-muted small">
                                        Tracking Number
                                    </label>
                                    <div>GHN20261118001</div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="text-muted small">
                                        Estimated Delivery
                                    </label>
                                    <div>22/11/2026</div>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label className="text-muted small">
                                        Customer Note
                                    </label>
                                    <div>Please call before delivery.</div>
                                </div>

                            </div>

                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="modal fade" id="editOrderModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Update Order - #ORD001</h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal"/>
                        </div>

                        <div className="modal-body">

                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Order ID
                                    </label>
                                    <input type="text" className="form-control" defaultValue="#ORD001" readOnly/>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Customer
                                    </label>
                                    <input type="text" className="form-control" defaultValue="Nguyen Van An" readOnly/>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Order Status
                                    </label>
                                    <select className="form-select" defaultValue="Pending">
                                        <option>Pending</option>
                                        <option>Processing</option>
                                        <option>Shipped</option>
                                        <option>Completed</option>
                                        <option>Cancelled</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Payment Status
                                    </label>
                                    <select className="form-select" defaultValue="Paid">
                                        <option>Unpaid</option>
                                        <option>Paid</option>
                                        <option>Refunded</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Shipping Provider
                                    </label>
                                    <select className="form-select" defaultValue="Giao Hàng Nhanh">
                                        <option>Giao Hàng Nhanh</option>
                                        <option>Viettel Post</option>
                                        <option>Giao Hàng Tiết Kiệm</option>
                                        <option>VNPost</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Tracking Number
                                    </label>
                                    <input type="text" className="form-control" defaultValue="GHN20261118001"/>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Estimated Delivery
                                    </label>
                                    <input type="date" className="form-control" defaultValue="2026-11-22"/>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label className="form-label">
                                        Admin Note
                                    </label>
                                    <textarea className="form-control" rows={3} defaultValue="Order is being processed."/>
                                </div>

                            </div>

                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>

                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                Save Changes
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="modal fade" id="cancelOrderModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">
                                Cancel Order
                            </h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal"/>
                        </div>

                        <div className="modal-body">

                            <p>
                                Are you sure you want to cancel this order?
                            </p>

                            <div className="alert alert-warning mb-3">
                                <strong>Order ID: #ORD001</strong>
                                <br />
                                Customer: Nguyen Van An
                                <br />
                                Total: 1.100.000đ
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Cancellation Reason
                                </label>

                                <select className="form-select">
                                    <option>Customer requested cancellation</option>
                                    <option>Payment failed</option>
                                    <option>Out of stock</option>
                                    <option>Incorrect order information</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Additional Note
                                </label>

                                <textarea className="form-control" rows={2} placeholder="Enter cancellation note..."/>
                            </div>

                            <p className="text-danger mb-0">
                                Please confirm before cancelling this order.
                            </p>

                        </div>

                        <div className="modal-footer">

                            <button className="btn btn-secondary" data-bs-dismiss="modal">
                                Back
                            </button>

                            <button className="btn btn-danger" data-bs-dismiss="modal">
                                Confirm Cancel
                            </button>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminOrder;
