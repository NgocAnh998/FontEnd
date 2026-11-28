import React from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

import 'datatables.net-buttons-dt';
import 'datatables.net-buttons-dt/css/buttons.dataTables.min.css';

import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';
import DeleteProductModal from './DeleteProductModal';

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
                    <p className="text-muted mb-0">
                        Manage your store products.
                    </p>
                </div>

                <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addProductModal"
                >
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

            <AddProductModal />
            <EditProductModal />
            <DeleteProductModal />
        </div>
    );
}

export default AdminProduct;