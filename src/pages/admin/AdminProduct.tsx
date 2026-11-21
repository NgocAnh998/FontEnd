
function AdminProduct() {
    return (
        <div className="container-fluid">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Product Management</h2>
                    <p className="text-muted mb-0">
                        Manage your store products.
                    </p>
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

            <div className="card shadow-sm">

                <div className="card-header bg-white py-3">
                    <h5 className="mb-0">Product List</h5>
                </div>

                <div className="card-body">

                    <div className="row g-3 mb-3">

                        <div className="col-lg-5 col-md-12">
                            <input type="text" className="form-control" placeholder="Search product name, SKU, brand..."/>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <select className="form-select" defaultValue="all">
                                <option value="all">All Categories</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <select className="form-select" defaultValue="all">
                                <option value="all">All Status</option>
                                <option value="available">Available</option>
                                <option value="out">Out of Stock</option>
                                <option value="hidden">Hidden</option>
                                <option value="draft">Draft</option>
                            </select>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <select className="form-select" defaultValue="newest">
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                            </select>
                        </div>

                    </div>

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover align-middle">

                            <thead className="table-dark">
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

                            <tbody>

                            <tr>
                                <td>1</td>
                                <td>
                                    <strong>Wireless Mouse</strong>
                                    <br />
                                    <small className="text-muted">
                                        Wireless gaming mouse
                                    </small>
                                </td>
                                <td>MS-001</td>
                                <td>Logitech</td>
                                <td>Electronics</td>
                                <td>150.000đ</td>
                                <td>
                                    <strong className="text-primary">
                                        250.000đ
                                    </strong>
                                </td>
                                <td>50</td>
                                <td>120</td>
                                <td>4.8 / 5</td>
                                <td>
                                        <span className="badge bg-warning text-dark">
                                            Yes
                                        </span>
                                </td>
                                <td>
                                        <span className="badge bg-success">
                                            Available
                                        </span>
                                </td>
                                <td>10/01/2026</td>
                                <td className="text-nowrap">
                                    <button className="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editProductModal">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteProductModal">
                                        Delete
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>
                                    <strong>Mechanical Keyboard</strong>
                                    <br />
                                    <small className="text-muted">
                                        RGB mechanical keyboard
                                    </small>
                                </td>
                                <td>KB-002</td>
                                <td>Keychron</td>
                                <td>Electronics</td>
                                <td>600.000đ</td>
                                <td>
                                    <strong className="text-primary">
                                        850.000đ
                                    </strong>
                                </td>
                                <td>25</td>
                                <td>85</td>
                                <td>4.9 / 5</td>
                                <td>
                                        <span className="badge bg-warning text-dark">
                                            Yes
                                        </span>
                                </td>
                                <td>
                                        <span className="badge bg-success">
                                            Available
                                        </span>
                                </td>
                                <td>15/02/2026</td>
                                <td className="text-nowrap">
                                    <button className="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editProductModal">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteProductModal">
                                        Delete
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>
                                    <strong>Basic T-Shirt</strong>
                                    <br />
                                    <small className="text-muted">
                                        Cotton basic T-shirt
                                    </small>
                                </td>
                                <td>TS-003</td>
                                <td>Local Brand</td>
                                <td>Clothing</td>
                                <td>80.000đ</td>
                                <td>
                                    <strong className="text-primary">
                                        150.000đ
                                    </strong>
                                </td>
                                <td>0</td>
                                <td>200</td>
                                <td>4.5 / 5</td>
                                <td>
                                        <span className="badge bg-secondary">
                                            No
                                        </span>
                                </td>
                                <td>
                                        <span className="badge bg-danger">
                                            Out of Stock
                                        </span>
                                </td>
                                <td>20/03/2026</td>
                                <td className="text-nowrap">
                                    <button className="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editProductModal">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteProductModal">
                                        Delete
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>
                                    <strong>Leather Wallet</strong>
                                    <br />
                                    <small className="text-muted">
                                        Genuine leather wallet
                                    </small>
                                </td>
                                <td>WL-004</td>
                                <td>Leather House</td>
                                <td>Accessories</td>
                                <td>200.000đ</td>
                                <td>
                                    <strong className="text-primary">
                                        320.000đ
                                    </strong>
                                </td>
                                <td>18</td>
                                <td>45</td>
                                <td>4.6 / 5</td>
                                <td>
                                        <span className="badge bg-secondary">
                                            No
                                        </span>
                                </td>
                                <td>
                                        <span className="badge bg-success">
                                            Available
                                        </span>
                                </td>
                                <td>05/04/2026</td>
                                <td className="text-nowrap">
                                    <button className="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editProductModal">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteProductModal">
                                        Delete
                                    </button>
                                </td>
                            </tr>

                            </tbody>

                        </table>

                    </div>

                    <div className="text-muted small">
                        Showing 4 products
                    </div>

                </div>
            </div>

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
                                        <label className="form-check-label" htmlFor="addFeatured">
                                            Featured Product
                                        </label>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>

                            <button className="btn btn-primary">
                                Add Product
                            </button>
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
                                        <label className="form-check-label" htmlFor="editFeatured">
                                            Featured Product
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button className="btn btn-primary">
                                Save Changes
                            </button>
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
                            <button className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>

                            <button className="btn btn-danger" data-bs-dismiss="modal">
                                Delete Product
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminProduct;
