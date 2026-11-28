import React from 'react';

function DeleteProductModal() {
    return (
        <div className="modal fade" id="deleteProductModal" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Product</h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        />
                    </div>

                    <div className="modal-body">
                        <p>
                            Are you sure you want to delete this product?
                        </p>

                        <div className="alert alert-warning mb-0">
                            <strong>Wireless Mouse</strong>
                            <br />
                            SKU: MS-001
                            <br />
                            Category: Electronics
                        </div>

                        <p className="text-danger mt-3 mb-0">
                            This action cannot be undone.
                        </p>
                    </div>

                    <div className="modal-footer">
                        <button
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                        >
                            Delete Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteProductModal;