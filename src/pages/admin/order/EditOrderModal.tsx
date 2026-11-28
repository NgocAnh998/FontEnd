import React from 'react';

function EditOrderModal() {
    return (
        <div className="modal fade" id="editOrderModal" tabIndex={-1}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            Update Order - #ORD001
                        </h5>

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

                                <select
                                    className="form-select"
                                    defaultValue="Paid"
                                >
                                    <option>Unpaid</option>
                                    <option>Paid</option>
                                    <option>Refunded</option>
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Shipping Provider
                                </label>

                                <select
                                    className="form-select"
                                    defaultValue="Giao Hàng Nhanh"
                                >
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

                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="GHN20261118001"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Estimated Delivery
                                </label>

                                <input
                                    type="date"
                                    className="form-control"
                                    defaultValue="2026-11-22"
                                />
                            </div>

                            <div className="col-md-12 mb-3">
                                <label className="form-label">
                                    Admin Note
                                </label>

                                <textarea
                                    className="form-control"
                                    rows={3}
                                    defaultValue="Order is being processed."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditOrderModal;