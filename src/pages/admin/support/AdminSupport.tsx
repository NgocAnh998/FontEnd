import React from 'react';

function AdminSupport() {
    return (
        <div className="container-fluid p-4">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Customer Support</h3>
                <p className="text-muted mb-0">
                    Manage customer questions and support requests.
                </p>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Total Tickets</h6>
                    <h3>250</h3>
                </div></div></div>
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Open Tickets</h6>
                    <h3 className="text-danger">45</h3>
                </div></div></div>
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">In Progress</h6>
                    <h3 className="text-warning">60</h3>
                </div></div></div>
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Resolved</h6>
                    <h3 className="text-success">145</h3>
                </div></div></div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-white">
                    <h5 className="mb-0">Support Tickets</h5>
                </div>

                <div className="card-body">
                    <div className="row g-2 mb-3">
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Search ticket or customer..." />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Categories</option>
                                <option>Order Inquiry</option>
                                <option>Payment</option>
                                <option>Shipping</option>
                                <option>Product Quality</option>
                                <option>Return and Refund</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Statuses</option>
                                <option>Open</option>
                                <option>In Progress</option>
                                <option>Resolved</option>
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
                                <th>Ticket ID</th>
                                <th>Customer</th>
                                <th>Subject</th>
                                <th>Category</th>
                                <th>Created Date</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>TKT001</td>
                                <td>Nguyen Van An</td>
                                <td>Order delivery inquiry</td>
                                <td>Shipping</td>
                                <td>20/11/2026</td>
                                <td><span className="badge bg-danger">High</span></td>
                                <td><span className="badge bg-danger">Open</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#viewTicketModal">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td>TKT002</td>
                                <td>Tran Thi Binh</td>
                                <td>Payment confirmation</td>
                                <td>Payment</td>
                                <td>21/11/2026</td>
                                <td><span className="badge bg-warning text-dark">Medium</span></td>
                                <td><span className="badge bg-warning text-dark">In Progress</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#viewTicketModal">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td>TKT003</td>
                                <td>Le Van Cuong</td>
                                <td>Damaged handmade product</td>
                                <td>Product Quality</td>
                                <td>22/11/2026</td>
                                <td><span className="badge bg-danger">High</span></td>
                                <td><span className="badge bg-danger">Open</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#viewTicketModal">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td>TKT004</td>
                                <td>Pham Thi Dung</td>
                                <td>Return and refund request</td>
                                <td>Return and Refund</td>
                                <td>23/11/2026</td>
                                <td><span className="badge bg-secondary">Low</span></td>
                                <td><span className="badge bg-success">Resolved</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#viewTicketModal">View</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="viewTicketModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Support Ticket - TKT001</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Ticket ID</label>
                                    <p>TKT001</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Customer</label>
                                    <p>Nguyen Van An</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Category</label>
                                    <p>Shipping</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Priority</label>
                                    <p><span className="badge bg-danger">High</span></p>
                                </div>
                                <div className="col-12 mb-3">
                                    <label className="text-muted small">Subject</label>
                                    <p className="fw-bold">Order delivery inquiry</p>
                                </div>
                            </div>

                            <hr />

                            <h6 className="fw-bold mb-3">Conversation</h6>

                            <div className="border rounded p-3 mb-3">
                                <div className="d-flex justify-content-between">
                                    <strong>Nguyen Van An</strong>
                                    <small className="text-muted">20/11/2026 09:30</small>
                                </div>
                                <p className="mb-0 mt-2">
                                    Hello, I would like to know when my handmade order will arrive.
                                </p>
                            </div>

                            <div className="border rounded p-3 mb-3 bg-light">
                                <div className="d-flex justify-content-between">
                                    <strong>Support Team</strong>
                                    <small className="text-muted">20/11/2026 10:15</small>
                                </div>
                                <p className="mb-0 mt-2">
                                    Thank you for contacting us. We are checking the shipment information.
                                </p>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Reply to Customer</label>
                                <textarea className="form-control" rows={4} placeholder="Enter your reply..." />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Ticket Status</label>
                                <select className="form-select">
                                    <option>Open</option>
                                    <option>In Progress</option>
                                    <option>Resolved</option>
                                </select>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button className="btn btn-primary" data-bs-dismiss="modal">Send Reply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminSupport;