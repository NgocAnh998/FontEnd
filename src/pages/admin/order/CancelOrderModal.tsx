import React from 'react';

function CancelOrderModal() {
    return (
        <div className="modal fade" id="cancelOrderModal" >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            Cancel Order
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        />
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
                                <option>
                                    Customer requested cancellation
                                </option>

                                <option>Payment failed</option>

                                <option>Out of stock</option>

                                <option>
                                    Incorrect order information
                                </option>

                                <option>Other</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Additional Note
                            </label>

                            <textarea
                                className="form-control"
                                rows={2}
                                placeholder="Enter cancellation note..."
                            />
                        </div>

                        <p className="text-danger mb-0">
                            Please confirm before cancelling this order.
                        </p>
                    </div>

                    <div className="modal-footer">
                        <button
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Back
                        </button>

                        <button
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                        >
                            Confirm Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CancelOrderModal;