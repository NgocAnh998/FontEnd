import React from 'react';

function AdminPayment() {
    return (
        <div className="container-fluid p-4">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Payment Management</h3>
                <p className="text-muted mb-0">
                    Manage payments, transactions and refunds.
                </p>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-3">
                    <div className="card shadow-sm"><div className="card-body">
                        <h6 className="text-muted">Total Transactions</h6>
                        <h3>850</h3>
                    </div></div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm"><div className="card-body">
                        <h6 className="text-muted">Successful Payments</h6>
                        <h3 className="text-success">720</h3>
                    </div></div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm"><div className="card-body">
                        <h6 className="text-muted">Pending Payments</h6>
                        <h3 className="text-warning">80</h3>
                    </div></div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm"><div className="card-body">
                        <h6 className="text-muted">Refund Requests</h6>
                        <h3 className="text-danger">50</h3>
                    </div></div>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-white">
                    <h5 className="mb-0">Payment Transactions</h5>
                </div>

                <div className="card-body">
                    <div className="row g-2 mb-3">
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Search transaction or order..." />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Payment Methods</option>
                                <option>Bank Transfer</option>
                                <option>Cash on Delivery</option>
                                <option>E-wallet</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Statuses</option>
                                <option>Paid</option>
                                <option>Pending</option>
                                <option>Failed</option>
                                <option>Refunded</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-secondary w-100">Search</button>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle">
                            <thead className="table-light">
                            <tr>
                                <th>Transaction ID</th>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Payment Method</th>
                                <th>Amount</th>
                                <th>Payment Date</th>
                                <th>Payment Status</th>
                                <th>Refund Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>TXN001</td>
                                <td>#ORD001</td>
                                <td>Nguyen Van An</td>
                                <td>Bank Transfer</td>
                                <td>550.000đ</td>
                                <td>20/11/2026</td>
                                <td><span className="badge bg-success">Paid</span></td>
                                <td><span className="badge bg-secondary">None</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#paymentDetailsModal">
                                        Details
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>TXN002</td>
                                <td>#ORD002</td>
                                <td>Tran Thi Binh</td>
                                <td>E-wallet</td>
                                <td>320.000đ</td>
                                <td>21/11/2026</td>
                                <td><span className="badge bg-warning text-dark">Pending</span></td>
                                <td><span className="badge bg-secondary">None</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#paymentDetailsModal">
                                        Details
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>TXN003</td>
                                <td>#ORD003</td>
                                <td>Le Van Cuong</td>
                                <td>Cash on Delivery</td>
                                <td>750.000đ</td>
                                <td>22/11/2026</td>
                                <td><span className="badge bg-success">Paid</span></td>
                                <td><span className="badge bg-warning text-dark">Requested</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#paymentDetailsModal">
                                        Details
                                    </button>
                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#refundPaymentModal">
                                        Refund
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>TXN004</td>
                                <td>#ORD004</td>
                                <td>Pham Thi Dung</td>
                                <td>Bank Transfer</td>
                                <td>180.000đ</td>
                                <td>23/11/2026</td>
                                <td><span className="badge bg-danger">Failed</span></td>
                                <td><span className="badge bg-secondary">None</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#paymentDetailsModal">
                                        Details
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="paymentDetailsModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Payment Details - TXN001</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <h6 className="fw-bold">Transaction Information</h6>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Transaction ID</label>
                                    <p>TXN001</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Order ID</label>
                                    <p>#ORD001</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Customer</label>
                                    <p>Nguyen Van An</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Payment Method</label>
                                    <p>Bank Transfer</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Amount</label>
                                    <p className="fw-bold text-primary">550.000đ</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Payment Date</label>
                                    <p>20/11/2026</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Status</label>
                                    <p><span className="badge bg-success">Paid</span></p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Reference Number</label>
                                    <p>REF2026001</p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="refundPaymentModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Refund</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <p>Are you sure you want to refund this payment?</p>

                            <div className="alert alert-warning">
                                <strong>Transaction:</strong> TXN003
                                <br />
                                <strong>Order:</strong> #ORD003
                                <br />
                                <strong>Customer:</strong> Le Van Cuong
                                <br />
                                <strong>Refund Amount:</strong> 750.000đ
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Refund Reason</label>
                                <select className="form-select">
                                    <option>Customer requested refund</option>
                                    <option>Product damaged</option>
                                    <option>Order cancelled</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Additional Note</label>
                                <textarea className="form-control" rows={3} placeholder="Enter note" />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-danger" data-bs-dismiss="modal">Confirm Refund</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPayment;