import React from 'react';

function AdminInventory() {
    return (
        <div className="container-fluid p-4">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Inventory Management</h3>
                <p className="text-muted mb-0">
                    Manage product stock and inventory.
                </p>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Total Products</h6>
                            <h3>120</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">In Stock</h6>
                            <h3 className="text-success">85</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Low Stock</h6>
                            <h3 className="text-warning">25</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Out of Stock</h6>
                            <h3 className="text-danger">10</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Inventory List</h5>

                    <button
                        className="btn btn-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#addInventoryModal"
                    >
                        + Add Inventory
                    </button>
                </div>

                <div className="card-body">
                    <div className="row g-2 mb-3">
                        <div className="col-md-4">
                            <input
                                className="form-control"
                                placeholder="Search product..."
                            />
                        </div>

                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Categories</option>
                                <option>Handmade Jewelry</option>
                                <option>Knitted Products</option>
                                <option>Home Decoration</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <select className="form-select">
                                <option>All Stock Status</option>
                                <option>In Stock</option>
                                <option>Low Stock</option>
                                <option>Out of Stock</option>
                            </select>
                        </div>

                        <div className="col-md-2">
                            <button className="btn btn-secondary w-100">
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle">
                            <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Product</th>
                                <th>SKU</th>
                                <th>Category</th>
                                <th>Stock</th>
                                <th>Minimum Stock</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Handmade Beaded Bracelet</td>
                                <td>HB-001</td>
                                <td>Handmade Jewelry</td>
                                <td>150</td>
                                <td>30</td>
                                <td>A1-01</td>
                                <td>
                                        <span className="badge bg-success">
                                            In Stock
                                        </span>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editInventoryModal"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Knitted Teddy Bear</td>
                                <td>KT-002</td>
                                <td>Knitted Products</td>
                                <td>12</td>
                                <td>20</td>
                                <td>A1-02</td>
                                <td>
                                        <span className="badge bg-warning text-dark">
                                            Low Stock
                                        </span>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editInventoryModal"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Handmade Scented Candle</td>
                                <td>SC-003</td>
                                <td>Home Decoration</td>
                                <td>0</td>
                                <td>15</td>
                                <td>B1-01</td>
                                <td>
                                        <span className="badge bg-danger">
                                            Out of Stock
                                        </span>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editInventoryModal"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Wooden Photo Frame</td>
                                <td>WF-004</td>
                                <td>Home Decoration</td>
                                <td>65</td>
                                <td>20</td>
                                <td>B1-02</td>
                                <td>
                                        <span className="badge bg-success">
                                            In Stock
                                        </span>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editInventoryModal"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="addInventoryModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Inventory</h5>
                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                            />
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Product</label>
                                    <select className="form-select">
                                        <option>Select Product</option>
                                        <option>Handmade Beaded Bracelet</option>
                                        <option>Knitted Teddy Bear</option>
                                        <option>Handmade Scented Candle</option>
                                        <option>Wooden Photo Frame</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">SKU</label>
                                    <input className="form-control" placeholder="Enter SKU" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Quantity</label>
                                    <input type="number" className="form-control" placeholder="Enter quantity" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Minimum Stock</label>
                                    <input type="number" className="form-control" placeholder="Enter minimum stock" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Storage Location</label>
                                    <input className="form-control" placeholder="Example: A1-01" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Inventory Status</label>
                                    <select className="form-select">
                                        <option>In Stock</option>
                                        <option>Low Stock</option>
                                        <option>Out of Stock</option>
                                    </select>
                                </div>

                                <div className="col-12 mb-3">
                                    <label className="form-label">Note</label>
                                    <textarea className="form-control" rows={3} placeholder="Enter note" />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                Add Inventory
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editInventoryModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Inventory</h5>
                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                            />
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Product</label>
                                    <input className="form-control" defaultValue="Handmade Beaded Bracelet" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">SKU</label>
                                    <input className="form-control" defaultValue="HB-001" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Quantity</label>
                                    <input type="number" className="form-control" defaultValue="150" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Minimum Stock</label>
                                    <input type="number" className="form-control" defaultValue="30" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Storage Location</label>
                                    <input className="form-control" defaultValue="A1-01" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Inventory Status</label>
                                    <select className="form-select" defaultValue="In Stock">
                                        <option>In Stock</option>
                                        <option>Low Stock</option>
                                        <option>Out of Stock</option>
                                    </select>
                                </div>

                                <div className="col-12 mb-3">
                                    <label className="form-label">Note</label>
                                    <textarea className="form-control" rows={3} defaultValue="Inventory sample note." />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminInventory;