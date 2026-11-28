import React from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

import 'datatables.net-buttons-dt';
import 'datatables.net-buttons-dt/css/buttons.dataTables.min.css';

DataTable.use(DT);

function AdminProduct() {
    const tableData = [
        ['1', '<strong>Wireless Mouse</strong><br /><small class="text-muted">Wireless gaming mouse</small>', 'MS-001', 'Logitech', 'Electronics', '150.000đ', '<strong class="text-primary">250.000đ</strong>', '50', '120', '4.8 / 5', '<span class="badge bg-warning text-dark">Yes</span>', '<span class="badge bg-success">Available</span>', '10/01/2026', '<button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editProductModal">Edit</button><button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteProductModal">Delete</button>'],
        ['2', '<strong>Mechanical Keyboard</strong><br /><small class="text-muted">RGB mechanical keyboard</small>', 'KB-002', 'Keychron', 'Electronics', '600.000đ', '<strong class="text-primary">850.000đ</strong>', '25', '85', '4.9 / 5', '<span class="badge bg-warning text-dark">Yes</span>', '<span class="badge bg-success">Available</span>', '15/02/2026', '<button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editProductModal">Edit</button><button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteProductModal">Delete</button>'],
        ['3', '<strong>Basic T-Shirt</strong><br /><small class="text-muted">Cotton basic T-shirt</small>', 'TS-003', 'Local Brand', 'Clothing', '80.000đ', '<strong class="text-primary">150.000đ</strong>', '0', '200', '4.5 / 5', '<span class="badge bg-secondary">No</span>', '<span class="badge bg-danger">Out of Stock</span>', '20/03/2026', '<button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editProductModal">Edit</button><button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteProductModal">Delete</button>'],
        ['4', '<strong>Leather Wallet</strong><br /><small class="text-muted">Genuine leather wallet</small>', 'WL-004', 'Leather House', 'Accessories', '200.000đ', '<strong class="text-primary">320.000đ</strong>', '18', '45', '4.6 / 5', '<span class="badge bg-secondary">No</span>', '<span class="badge bg-success">Available</span>', '05/04/2026', '<button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editProductModal">Edit</button><button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteProductModal">Delete</button>']
    ];

    return (
        <div className="container-fluid p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold mb-1">Product Management</h3>
                    <p className="text-muted mb-0">Manage your store products.</p>
                </div>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
                    + Add Product
                </button>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Total Products</h6>
                            <h3>120</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Available Products</h6>
                            <h3 className="text-success">100</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Out of Stock</h6>
                            <h3 className="text-danger">20</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Total Sold</h6>
                            <h3 className="text-primary">2,450</h3>
                        </div>
                    </div>
                </div>
            </div>

            <DataTable
                data={tableData}
                className="display"
                options={{
                    paging: true,
                    searching: true,
                    ordering: true,
                    columnDefs: [
                        {
                            targets: 13,
                            orderable: false,
                            searchable: false
                        }
                    ],
                    layout: {
                        topStart: {
                            buttons: ['copy', 'csv', 'print']
                        }
                    },
                    language: {
                        search: 'Tìm kiếm:',
                        lengthMenu: 'Hiển thị _MENU_ dòng',
                        info: 'Đang xem _START_ đến _END_ trong tổng _TOTAL_ mục',
                        paginate: {
                            next: 'Sau',
                            previous: 'Trước'
                        }
                    }
                }}
            >
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>SKU</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Cost Price</th>
                    <th>Sale Price</th>
                    <th>Stock</th>
                    <th>Sold</th>
                    <th>Rating</th>
                    <th>Featured</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Action</th>
                </tr>
                </thead>
            </DataTable>

            <div className="modal fade" id="addProductModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"/>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Product Name</label>
                                    <input type="text" className="form-control" placeholder="Enter product name"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">SKU</label>
                                    <input type="text" className="form-control" placeholder="Enter product SKU"/>
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
                                    <input type="text" className="form-control" placeholder="Enter brand"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Cost Price</label>
                                    <input type="number" className="form-control" placeholder="Enter cost price"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Regular Price</label>
                                    <input type="number" className="form-control" placeholder="Enter regular price"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Sale Price</label>
                                    <input type="number" className="form-control" placeholder="Enter sale price"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Stock Quantity</label>
                                    <input type="number" className="form-control" placeholder="Enter stock quantity"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Minimum Stock</label>
                                    <input type="number" className="form-control" placeholder="Enter minimum stock"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Product Status</label>
                                    <select className="form-select">
                                        <option>Available</option>
                                        <option>Hidden</option>
                                        <option>Draft</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Weight (Gram)</label>
                                    <input type="number" className="form-control" placeholder="Enter product weight"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Product Image URL</label>
                                    <input type="text" className="form-control" placeholder="Enter image URL"/>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" rows={3} placeholder="Enter product description"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="addFeatured"/>
                                        <label className="form-check-label" htmlFor="addFeatured">Featured Product</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editProductModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"/>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Product Name</label>
                                    <input type="text" className="form-control" defaultValue="Wireless Mouse"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">SKU</label>
                                    <input type="text" className="form-control" defaultValue="MS-001"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Category</label>
                                    <select className="form-select" defaultValue="Electronics">
                                        <option>Electronics</option>
                                        <option>Clothing</option>
                                        <option>Accessories</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Brand</label>
                                    <input type="text" className="form-control" defaultValue="Logitech"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Cost Price</label>
                                    <input type="number" className="form-control" defaultValue="150000"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Regular Price</label>
                                    <input type="number" className="form-control" defaultValue="300000"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Sale Price</label>
                                    <input type="number" className="form-control" defaultValue="250000"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Stock Quantity</label>
                                    <input type="number" className="form-control" defaultValue="50"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Minimum Stock</label>
                                    <input type="number" className="form-control" defaultValue="10"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Product Status</label>
                                    <select className="form-select" defaultValue="Available">
                                        <option>Available</option>
                                        <option>Hidden</option>
                                        <option>Draft</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Weight (Gram)</label>
                                    <input type="number" className="form-control" defaultValue="120"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Product Image URL</label>
                                    <input type="text" className="form-control" defaultValue="https://example.com/mouse.jpg"/>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" rows={3} defaultValue="Wireless gaming mouse with ergonomic design."/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="editFeatured" defaultChecked/>
                                        <label className="form-check-label" htmlFor="editFeatured">Featured Product</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteProductModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"/>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this product?</p>
                            <div className="alert alert-warning mb-0">
                                <strong>Wireless Mouse</strong>
                                <br />
                                SKU: MS-001
                                <br />
                                Category: Electronics
                            </div>
                            <p className="text-danger mt-3 mb-0">This action cannot be undone.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-danger" data-bs-dismiss="modal">Delete Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProduct;