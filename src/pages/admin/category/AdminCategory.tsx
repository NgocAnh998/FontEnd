import React from 'react';

function AdminCategory() {
    return (
        <div className="container-fluid p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold mb-1">Category Management</h3>
                    <p className="text-muted mb-0">
                        Manage handmade product categories.
                    </p>
                </div>

                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCategoryModal">
                    + Add Category
                </button>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-4"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Total Categories</h6>
                    <h3>12</h3>
                </div></div></div>
                <div className="col-md-4"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Active Categories</h6>
                    <h3 className="text-success">10</h3>
                </div></div></div>
                <div className="col-md-4"><div className="card shadow-sm"><div className="card-body">
                    <h6 className="text-muted">Hidden Categories</h6>
                    <h3 className="text-danger">2</h3>
                </div></div></div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-white">
                    <h5 className="mb-0">Product Categories</h5>
                </div>

                <div className="card-body">
                    <div className="row g-2 mb-3">
                        <div className="col-md-5">
                            <input className="form-control" placeholder="Search category..." />
                        </div>
                        <div className="col-md-4">
                            <select className="form-select">
                                <option>All Statuses</option>
                                <option>Active</option>
                                <option>Hidden</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-secondary w-100">Search</button>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle">
                            <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Category Name</th>
                                <th>Description</th>
                                <th>Total Products</th>
                                <th>Created Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>CAT001</td>
                                <td>Handmade Jewelry</td>
                                <td>Bracelets, necklaces and handmade accessories.</td>
                                <td>35</td>
                                <td>10/01/2026</td>
                                <td><span className="badge bg-success">Active</span></td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#editCategoryModal">Edit</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>CAT002</td>
                                <td>Knitted Products</td>
                                <td>Knitted dolls, bags and handmade clothes.</td>
                                <td>28</td>
                                <td>15/02/2026</td>
                                <td><span className="badge bg-success">Active</span></td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#editCategoryModal">Edit</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>CAT003</td>
                                <td>Home Decoration</td>
                                <td>Handmade candles, frames and ornaments.</td>
                                <td>42</td>
                                <td>20/03/2026</td>
                                <td><span className="badge bg-success">Active</span></td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#editCategoryModal">Edit</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>CAT004</td>
                                <td>Handmade Pottery</td>
                                <td>Handmade ceramic cups, bowls and vases.</td>
                                <td>15</td>
                                <td>05/04/2026</td>
                                <td><span className="badge bg-secondary">Hidden</span></td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#editCategoryModal">Edit</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>CAT005</td>
                                <td>Handmade Bags</td>
                                <td>Handcrafted fabric bags and accessories.</td>
                                <td>20</td>
                                <td>12/05/2026</td>
                                <td><span className="badge bg-success">Active</span></td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-1 mb-1" data-bs-toggle="modal" data-bs-target="#editCategoryModal">Edit</button>
                                    <button className="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="addCategoryModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Category</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Category Name</label>
                                <input className="form-control" placeholder="Enter category name" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Parent Category</label>
                                <select className="form-select">
                                    <option>No Parent Category</option>
                                    <option>Handmade Jewelry</option>
                                    <option>Knitted Products</option>
                                    <option>Home Decoration</option>
                                    <option>Handmade Pottery</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" rows={3} placeholder="Enter category description" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Status</label>
                                <select className="form-select">
                                    <option>Active</option>
                                    <option>Hidden</option>
                                </select>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary" data-bs-dismiss="modal">Add Category</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editCategoryModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Category</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Category ID</label>
                                <input className="form-control" defaultValue="CAT001" readOnly />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Category Name</label>
                                <input className="form-control" defaultValue="Handmade Jewelry" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Parent Category</label>
                                <select className="form-select" defaultValue="No Parent Category">
                                    <option>No Parent Category</option>
                                    <option>Handmade Jewelry</option>
                                    <option>Knitted Products</option>
                                    <option>Home Decoration</option>
                                    <option>Handmade Pottery</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" rows={3} defaultValue="Bracelets, necklaces and handmade accessories." />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Status</label>
                                <select className="form-select" defaultValue="Active">
                                    <option>Active</option>
                                    <option>Hidden</option>
                                </select>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteCategoryModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Category</h5>
                            <button className="btn-close" data-bs-dismiss="modal" />
                        </div>

                        <div className="modal-body">
                            <p>Are you sure you want to delete this category?</p>
                            <div className="alert alert-warning mb-0">
                                <strong>Handmade Jewelry</strong>
                                <br />
                                Category ID: CAT001
                                <br />
                                Total Products: 35
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-danger" data-bs-dismiss="modal">Delete Category</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCategory;