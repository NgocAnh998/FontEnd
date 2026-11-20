
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

                <button className="btn btn-primary">
                    + Add Product
                </button>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Total Products</h6>
                            <h3>120</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Available Products</h6>
                            <h3 className="text-success">100</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Out of Stock</h6>
                            <h3 className="text-danger">20</h3>
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
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search product name..."
                            />
                        </div>

                        <div className="col-md-4">
                            <select className="form-select" defaultValue="all">
                                <option value="all">All Categories</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle">
                            <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Wireless Mouse</td>
                                <td>Electronics</td>
                                <td>250.000đ</td>
                                <td>50</td>
                                <td>
                                        <span className="badge bg-success">Available</span>
                                </td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Mechanical Keyboard</td>
                                <td>Electronics</td>
                                <td>850.000đ</td>
                                <td>25</td>
                                <td>
                                        <span className="badge bg-success">Available</span>
                                </td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Basic T-Shirt</td>
                                <td>Clothing</td>
                                <td>150.000đ</td>
                                <td>0</td>
                                <td>
                                        <span className="badge bg-danger">Out of Stock</span>
                                </td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Leather Wallet</td>
                                <td>Accessories</td>
                                <td>320.000đ</td>
                                <td>18</td>
                                <td>
                                        <span className="badge bg-success">Available</span>
                                </td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
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
        </div>
    );
}

export default AdminProduct;
