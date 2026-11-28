import React from 'react';

function AdminPromotion() {
    return (
        <div className="container-fluid p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold mb-1">Promotion Management</h3>
                    <p className="text-muted mb-0">
                        Manage discount codes and promotional campaigns.
                    </p>
                </div>

                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addPromotionModal">
                    + Create Promotion
                </button>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Total Promotions</h6>
                    <h3>25</h3>
                </div></div></div>
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Active Promotions</h6>
                    <h3 className="text-success">12</h3>
                </div></div></div>
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Expired Promotions</h6>
                    <h3 className="text-danger">8</h3>
                </div></div></div>
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Coupons Used</h6>
                    <h3 className="text-primary">1,250</h3>
                </div></div></div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-white">
                    <h5 className="mb-0">Promotion List</h5>
                </div>

                <div className="card-body">
                    <div className="row g-2 mb-3">
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Search promotion code..." />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Promotion Types</option>
                                <option>Percentage Discount</option>
                                <option>Fixed Amount</option>
                                <option>Free Shipping</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Statuses</option>
                                <option>Active</option>
                                <option>Scheduled</option>
                                <option>Expired</option>
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
                                <th>ID</th>
                                <th>Promotion Name</th>
                                <th>Coupon Code</th>
                                <th>Discount Type</th>
                                <th>Discount Value</th>
                                <th>Minimum Order</th>
                                <th>Usage</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Welcome Discount</td>
                                <td><strong>WELCOME10</strong></td>
                                <td>Percentage</td>
                                <td>10%</td>
                                <td>100.000đ</td>
                                <td>250 / 500</td>
                                <td>01/11/2026</td>
                                <td>30/11/2026</td>
                                <td><span className="badge bg-success">Active</span></td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#editPromotionModal">Edit</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#deletePromotionModal">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Handmade Special</td>
                                <td><strong>HANDMADE20</strong></td>
                                <td>Percentage</td>
                                <td>20%</td>
                                <td>200.000đ</td>
                                <td>100 / 200</td>
                                <td>15/11/2026</td>
                                <td>15/12/2026</td>
                                <td><span className="badge bg-success">Active</span></td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#editPromotionModal">Edit</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#deletePromotionModal">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Free Shipping</td>
                                <td><strong>FREESHIP</strong></td>
                                <td>Free Shipping</td>
                                <td>30.000đ</td>
                                <td>150.000đ</td>
                                <td>400 / 400</td>
                                <td>01/10/2026</td>
                                <td>31/10/2026</td>
                                <td><span className="badge bg-danger">Expired</span></td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#editPromotionModal">Edit</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#deletePromotionModal">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>New Year Sale</td>
                                <td><strong>NEWYEAR15</strong></td>
                                <td>Fixed Amount</td>
                                <td>50.000đ</td>
                                <td>300.000đ</td>
                                <td>0 / 300</td>
                                <td>01/12/2026</td>
                                <td>31/12/2026</td>
                                <td><span className="badge bg-warning text-dark">Scheduled</span></td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#editPromotionModal">Edit</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#deletePromotionModal">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="addPromotionModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Promotion</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Promotion Name</label>
                                    <input className="form-control" placeholder="Enter promotion name" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Coupon Code</label>
                                    <input className="form-control" placeholder="Enter coupon code" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Discount Type</label>
                                    <select className="form-select">
                                        <option>Percentage Discount</option>
                                        <option>Fixed Amount</option>
                                        <option>Free Shipping</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Discount Value</label>
                                    <input type="number" className="form-control" placeholder="Enter discount value" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Minimum Order Value</label>
                                    <input type="number" className="form-control" placeholder="Enter minimum order" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Usage Limit</label>
                                    <input type="number" className="form-control" placeholder="Enter usage limit" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Start Date</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">End Date</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Status</label>
                                    <select className="form-select">
                                        <option>Active</option>
                                        <option>Scheduled</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Description</label>
                                    <input className="form-control" placeholder="Enter description" />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary" data-bs-dismiss="modal">Create Promotion</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editPromotionModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Promotion</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Promotion Name</label>
                                    <input className="form-control" defaultValue="Welcome Discount" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Coupon Code</label>
                                    <input className="form-control" defaultValue="WELCOME10" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Discount Type</label>
                                    <select className="form-select" defaultValue="Percentage Discount">
                                        <option>Percentage Discount</option>
                                        <option>Fixed Amount</option>
                                        <option>Free Shipping</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Discount Value</label>
                                    <input type="number" className="form-control" defaultValue="10" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Minimum Order Value</label>
                                    <input type="number" className="form-control" defaultValue="100000" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Usage Limit</label>
                                    <input type="number" className="form-control" defaultValue="500" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Start Date</label>
                                    <input type="date" className="form-control" defaultValue="2026-11-01" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">End Date</label>
                                    <input type="date" className="form-control" defaultValue="2026-11-30" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Status</label>
                                    <select className="form-select" defaultValue="Active">
                                        <option>Active</option>
                                        <option>Scheduled</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deletePromotionModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Promotion</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <p>Are you sure you want to delete this promotion?</p>
                            <div className="alert alert-warning mb-0">
                                <strong>Welcome Discount</strong>
                                <br />
                                Coupon Code: WELCOME10
                                <br />
                                Discount: 10%
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-danger" data-bs-dismiss="modal">Delete Promotion</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPromotion;