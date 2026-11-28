import React from 'react';

function AddProductModal() {
    return (
        <div className="modal fade" id="addProductModal" tabIndex={-1}>
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New Product</h5>

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
                                    placeholder="Enter product name"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">SKU</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter product SKU"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Category</label>
                                <select className="form-select">
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
                                    placeholder="Enter brand"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Cost Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter cost price"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Regular Price
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter regular price"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Sale Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter sale price"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Stock Quantity
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter stock quantity"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Minimum Stock
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter minimum stock"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Product Status
                                </label>
                                <select className="form-select">
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
                                    placeholder="Enter product weight"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Product Image URL
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter image URL"
                                />
                            </div>

                            <div className="col-md-12 mb-3">
                                <label className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    rows={3}
                                    placeholder="Enter product description"
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="addFeatured"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="addFeatured"
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
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductModal;