import React from 'react';

function AdminReview() {
    return (
        <div className="container-fluid p-4">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Product Review Management</h3>
                <p className="text-muted mb-0">
                    Manage customer ratings and product reviews.
                </p>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Total Reviews</h6>
                    <h3>1,250</h3>
                </div></div></div>
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Published</h6>
                    <h3 className="text-success">1,100</h3>
                </div></div></div>
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Pending Review</h6>
                    <h3 className="text-warning">100</h3>
                </div></div></div>
                <div className="col-md-3"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Reported Reviews</h6>
                    <h3 className="text-danger">50</h3>
                </div></div></div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-white">
                    <h5 className="mb-0">Customer Reviews</h5>
                </div>

                <div className="card-body">
                    <div className="row g-2 mb-3">
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Search customer or product..." />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Ratings</option>
                                <option>5 Stars</option>
                                <option>4 Stars</option>
                                <option>3 Stars</option>
                                <option>2 Stars</option>
                                <option>1 Star</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Statuses</option>
                                <option>Published</option>
                                <option>Pending</option>
                                <option>Reported</option>
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
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Rating</th>
                                <th>Comment</th>
                                <th>Review Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>RV001</td>
                                <td>Nguyen Van An</td>
                                <td>Handmade Bracelet</td>
                                <td className="text-warning">★★★★★</td>
                                <td>Beautiful product and good quality.</td>
                                <td>20/11/2026</td>
                                <td><span className="badge bg-success">Published</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#viewReviewModal">View</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#hideReviewModal">Hide</button>
                                </td>
                            </tr>

                            <tr>
                                <td>RV002</td>
                                <td>Tran Thi Binh</td>
                                <td>Knitted Teddy Bear</td>
                                <td className="text-warning">★★★★☆</td>
                                <td>Very cute and carefully made.</td>
                                <td>21/11/2026</td>
                                <td><span className="badge bg-warning text-dark">Pending</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#viewReviewModal">View</button>
                                    <button className="btn btn-success btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#approveReviewModal">Approve</button>
                                </td>
                            </tr>

                            <tr>
                                <td>RV003</td>
                                <td>Le Van Cuong</td>
                                <td>Scented Candle</td>
                                <td className="text-warning">★★☆☆☆</td>
                                <td>Product arrived later than expected.</td>
                                <td>22/11/2026</td>
                                <td><span className="badge bg-danger">Reported</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#viewReviewModal">View</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#hideReviewModal">Hide</button>
                                </td>
                            </tr>

                            <tr>
                                <td>RV004</td>
                                <td>Pham Thi Dung</td>
                                <td>Wooden Photo Frame</td>
                                <td className="text-warning">★★★★★</td>
                                <td>Excellent handmade craftsmanship.</td>
                                <td>23/11/2026</td>
                                <td><span className="badge bg-success">Published</span></td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#viewReviewModal">View</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#hideReviewModal">Hide</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="viewReviewModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Review Details - RV001</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Customer</label>
                                    <p>Nguyen Van An</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Product</label>
                                    <p>Handmade Bracelet</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Rating</label>
                                    <p className="text-warning">★★★★★ (5/5)</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="text-muted small">Review Date</label>
                                    <p>20/11/2026</p>
                                </div>
                                <div className="col-12 mb-3">
                                    <label className="text-muted small">Comment</label>
                                    <div className="border rounded p-3">
                                        Beautiful product and good quality. The handmade details are excellent.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="text-muted small">Review Status</label>
                                    <p><span className="badge bg-success">Published</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="approveReviewModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Approve Review</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <p>Are you sure you want to approve this review?</p>
                            <div className="alert alert-warning mb-0">
                                <strong>Review ID:</strong> RV002
                                <br />
                                <strong>Customer:</strong> Tran Thi Binh
                                <br />
                                <strong>Product:</strong> Knitted Teddy Bear
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-success" data-bs-dismiss="modal">Approve</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="hideReviewModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Hide Review</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <p>Are you sure you want to hide this review?</p>
                            <div className="alert alert-warning mb-0">
                                <strong>Review ID:</strong> RV001
                                <br />
                                <strong>Customer:</strong> Nguyen Van An
                                <br />
                                <strong>Product:</strong> Handmade Bracelet
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-danger" data-bs-dismiss="modal">Hide Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminReview;