import React from 'react';

function AdminShipping() {
    return (
        <div className="container-fluid p-4">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Shipping Management</h3>
                <p className="text-muted mb-0">
                    Manage shipments and track deliveries.
                </p>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-3">
                    <div className="card shadow-sm"><div className="card-body">
                        <h6 className="text-muted">Total Shipments</h6>
                        <h3>320</h3>
                    </div></div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm"><div className="card-body">
                        <h6 className="text-muted">Preparing</h6>
                        <h3 className="text-warning">45</h3>
                    </div></div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm"><div className="card-body">
                        <h6 className="text-muted">In Transit</h6>
                        <h3 className="text-primary">110</h3>
                    </div></div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm"><div className="card-body">
                        <h6 className="text-muted">Delivered</h6>
                        <h3 className="text-success">165</h3>
                    </div></div>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-white">
                    <h5 className="mb-0">Shipment List</h5>
                </div>

                <div className="card-body">
                    <div className="row g-2 mb-3">
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Search order or tracking number..." />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Shipping Providers</option>
                                <option>Giao Hàng Nhanh</option>
                                <option>Viettel Post</option>
                                <option>Giao Hàng Tiết Kiệm</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Shipping Statuses</option>
                                <option>Preparing</option>
                                <option>In Transit</option>
                                <option>Delivered</option>
                                <option>Failed</option>
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
                                <th>Shipment ID</th>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Shipping Provider</th>
                                <th>Tracking Number</th>
                                <th>Shipping Fee</th>
                                <th>Expected Delivery</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>SHP001</td>
                                <td>#ORD001</td>
                                <td>Nguyen Van An</td>
                                <td>Giao Hàng Nhanh</td>
                                <td>GHN2026001</td>
                                <td>25.000đ</td>
                                <td>25/11/2026</td>
                                <td><span className="badge bg-primary">In Transit</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#shipmentDetailsModal">Details</button>
                                    <button className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#updateShipmentModal">Update</button>
                                </td>
                            </tr>

                            <tr>
                                <td>SHP002</td>
                                <td>#ORD002</td>
                                <td>Tran Thi Binh</td>
                                <td>Viettel Post</td>
                                <td>VTP2026002</td>
                                <td>30.000đ</td>
                                <td>26/11/2026</td>
                                <td><span className="badge bg-warning text-dark">Preparing</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#shipmentDetailsModal">Details</button>
                                    <button className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#updateShipmentModal">Update</button>
                                </td>
                            </tr>

                            <tr>
                                <td>SHP003</td>
                                <td>#ORD003</td>
                                <td>Le Van Cuong</td>
                                <td>Giao Hàng Tiết Kiệm</td>
                                <td>GHTK2026003</td>
                                <td>20.000đ</td>
                                <td>23/11/2026</td>
                                <td><span className="badge bg-success">Delivered</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#shipmentDetailsModal">Details</button>
                                    <button className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#updateShipmentModal">Update</button>
                                </td>
                            </tr>

                            <tr>
                                <td>SHP004</td>
                                <td>#ORD004</td>
                                <td>Pham Thi Dung</td>
                                <td>Viettel Post</td>
                                <td>VTP2026004</td>
                                <td>35.000đ</td>
                                <td>27/11/2026</td>
                                <td><span className="badge bg-danger">Failed</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#shipmentDetailsModal">Details</button>
                                    <button className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#updateShipmentModal">Update</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="shipmentDetailsModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Shipment Details - SHP001</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <h6 className="fw-bold mb-3">Order Information</h6>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Shipment ID</label>
                                    <p>SHP001</p>
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
                                    <label className="text-muted small">Phone</label>
                                    <p>0901234567</p>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className="text-muted small">Delivery Address</label>
                                    <p>123 Nguyen Trai, District 1, Ho Chi Minh City</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Shipping Provider</label>
                                    <p>Giao Hàng Nhanh</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Tracking Number</label>
                                    <p>GHN2026001</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Shipping Fee</label>
                                    <p>25.000đ</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Expected Delivery</label>
                                    <p>25/11/2026</p>
                                </div>
                                <div className="col-md-12">
                                    <label className="text-muted small">Shipping Status</label>
                                    <p><span className="badge bg-primary">In Transit</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="updateShipmentModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Update Shipment</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Shipment ID</label>
                                <input className="form-control" defaultValue="SHP001" readOnly />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Shipping Provider</label>
                                <select className="form-select" defaultValue="Giao Hàng Nhanh">
                                    <option>Giao Hàng Nhanh</option>
                                    <option>Viettel Post</option>
                                    <option>Giao Hàng Tiết Kiệm</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Tracking Number</label>
                                <input className="form-control" defaultValue="GHN2026001" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Shipping Status</label>
                                <select className="form-select" defaultValue="In Transit">
                                    <option>Preparing</option>
                                    <option>In Transit</option>
                                    <option>Delivered</option>
                                    <option>Failed</option>
                                    <option>Returned</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Expected Delivery</label>
                                <input type="date" className="form-control" defaultValue="2026-11-25" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Note</label>
                                <textarea className="form-control" rows={3} placeholder="Enter note" />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminShipping;