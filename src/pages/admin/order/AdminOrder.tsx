import React from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

import 'datatables.net-buttons-dt';
import 'datatables.net-buttons-dt/css/buttons.dataTables.min.css';

import OrderDetailModal from './OrderDetailModal';
import EditOrderModal from './EditOrderModal';
import CancelOrderModal from './CancelOrderModal';

DataTable.use(DT);

function AdminOrder() {
    const tableData = [
        ['<strong>#ORD001</strong>', 'Nguyen Van An', 'an@gmail.com<br /><small class="text-muted">0901234567</small>', '18/11/2026', '3', '1.200.000đ', '100.000đ', '0đ', '<strong class="text-primary">1.100.000đ</strong>', 'Credit Card', '<span class="badge bg-success">Paid</span>', '<span class="badge bg-warning text-dark">Pending</span>', 'Giao Hàng Nhanh', '<button class="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#viewOrderModal">View</button><button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editOrderModal">Edit</button><button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#cancelOrderModal">Cancel</button>'],
        ['<strong>#ORD002</strong>', 'Tran Thi Binh', 'binh@gmail.com<br /><small class="text-muted">0912345678</small>', '19/11/2026', '2', '900.000đ', '50.000đ', '0đ', '<strong class="text-primary">850.000đ</strong>', 'Cash', '<span class="badge bg-warning text-dark">Unpaid</span>', '<span class="badge bg-info text-dark">Processing</span>', 'Viettel Post', '<button class="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#viewOrderModal">View</button><button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editOrderModal">Edit</button><button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#cancelOrderModal">Cancel</button>'],
        ['<strong>#ORD003</strong>', 'Le Van Cuong', 'cuong@gmail.com<br /><small class="text-muted">0923456789</small>', '19/11/2026', '1', '350.000đ', '30.000đ', '0đ', '<strong class="text-primary">320.000đ</strong>', 'Bank Transfer', '<span class="badge bg-success">Paid</span>', '<span class="badge bg-success">Completed</span>', 'Giao Hàng Tiết Kiệm', '<button class="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#viewOrderModal">View</button><button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editOrderModal">Edit</button><button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#cancelOrderModal">Cancel</button>'],
        ['<strong>#ORD004</strong>', 'Pham Thi Dung', 'dung@gmail.com<br /><small class="text-muted">0934567890</small>', '20/11/2026', '1', '200.000đ', '50.000đ', '0đ', '<strong class="text-primary">150.000đ</strong>', 'Cash', '<span class="badge bg-danger">Refunded</span>', '<span class="badge bg-danger">Cancelled</span>', '-', '<button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#viewOrderModal">View</button>']
    ];

    return (
        <div className="container-fluid p-4">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Order Management</h3>
                <p className="text-muted mb-0">Manage and track customer orders.</p>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Total Orders</h6>
                            <h3>85</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Pending Orders</h6>
                            <h3 className="text-warning">15</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Completed Orders</h6>
                            <h3 className="text-success">60</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Cancelled Orders</h6>
                            <h3 className="text-danger">10</h3>
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
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Contact</th>
                    <th>Order Date</th>
                    <th>Items</th>
                    <th>Subtotal</th>
                    <th>Discount</th>
                    <th>Shipping Fee</th>
                    <th>Total</th>
                    <th>Payment Method</th>
                    <th>Payment Status</th>
                    <th>Order Status</th>
                    <th>Shipping Provider</th>
                    <th>Action</th>
                </tr>
                </thead>
            </DataTable>

            <OrderDetailModal />
            <EditOrderModal />
            <CancelOrderModal />
        </div>
    );
}

export default AdminOrder;