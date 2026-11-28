import React from 'react';

function OrderDetailModal() {
    return (
        <div className="modal fade" id="viewOrderModal" tabIndex={-1}>
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            Order Details - #ORD001
                        </h5>

                        <button type="button" className="btn-close" data-bs-dismiss="modal"/>
                    </div>

                    <div className="modal-body">
                        <h6 className="fw-bold mb-3">
                            Order Information
                        </h6>

                        <div className="row mb-4">
                            <div className="col-md-4 mb-3">
                                <label className="text-muted small">
                                    Order ID
                                </label>

                                <div className="fw-bold">
                                    #ORD001
                                </div>
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

                        <h6 className="fw-bold mb-3">
                            Customer Information
                        </h6>

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
                                    123 Nguyen Trai, District 1, Ho Chi Minh City
                                </div>
                            </div>
                        </div>

                        <hr />

                        <h6 className="fw-bold mb-3">
                            Order Items
                        </h6>

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
                                    Payment Status:{' '}
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

                        <h6 className="fw-bold mb-3">
                            Shipping Information
                        </h6>

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
    );
}

export default OrderDetailModal;