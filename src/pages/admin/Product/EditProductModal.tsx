import React from 'react';

function EditProductModal() {
    return (
        <div className="modal fade" id="editProductModal" tabIndex={-1}>
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Product</h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        />
                    </div>

                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Wireless Mouse"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">SKU</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="MS-001"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Category</label>
                                <select
                                    className="form-select"
                                    defaultValue="Electronics"
                                >
                                    <option>Electronics</option>
                                    <option>Clothing</option>
                                    <option>Accessories</option>
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Brand</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Logitech"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Cost Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    defaultValue="150000"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Regular Price
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    defaultValue="300000"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Sale Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    defaultValue="250000"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Stock Quantity
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    defaultValue="50"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Minimum Stock
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    defaultValue="10"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Product Status
                                </label>
                                <select
                                    className="form-select"
                                    defaultValue="Available"
                                >
                                    <option>Available</option>
                                    <option>Hidden</option>
                                    <option>Draft</option>
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Weight (Gram)
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    defaultValue="120"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Product Image URL
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="https://example.com/mouse.jpg"
                                />
                            </div>

                            <div className="col-md-12 mb-3">
                                <label className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    rows={3}
                                    defaultValue="Wireless gaming mouse with ergonomic design."
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="editFeatured"
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="editFeatured"
                                    >
                                        Featured Product
                                    </label>
                                </div>
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

export default EditProductModal;