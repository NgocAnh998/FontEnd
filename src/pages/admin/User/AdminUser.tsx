import React from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

import 'datatables.net-buttons-dt';
import 'datatables.net-buttons-dt/css/buttons.dataTables.min.css';

import AddUserModal from './AddUserModal';
import EditUserModal from './EditUserModal';
import DeleteUserModal from './DeleteUserModal';

DataTable.use(DT);

function AdminUser() {
    const tableData = [
        ['1', 'Nguyen Van An', 'an@gmail.com', '0901234567', 'Male', 'District 1, HCMC', 'Admin', '12', '15,000,000đ', '10/01/2026', '20/11/2026', 'Verified', 'Active',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['2', 'Tran Thi Binh', 'binh@gmail.com', '0912345678', 'Female', 'District 3, HCMC', 'Customer', '8', '8,500,000đ', '15/02/2026', '20/11/2026', 'Verified', 'Active',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['4', 'Pham Thi Dung', 'dung@gmail.com', '0934567890', 'Female', 'Binh Thanh, HCMC', 'Customer', '15', '22,000,000đ', '05/04/2026', '21/11/2026', 'Verified', 'Active',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>'],

        ['3', 'Le Van Cuong', 'cuong@gmail.com', '0923456789', 'Male', 'Thu Duc, HCMC', 'Customer', '3', '3,200,000đ', '20/03/2026', '15/10/2026', 'Unverified', 'Locked',
            '<button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button><button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>']
    ];

    return (
        <div className="container-fluid p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold mb-1">
                        Admin User Management
                    </h3>

                    <p className="text-muted mb-0">
                        Manage accounts, roles and permissions.
                    </p>
                </div>

                <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addUserModal"
                >
                    + Add User
                </button>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Total Users</h6>
                            <h3>120</h3>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Active Users</h6>
                            <h3 className="text-success">100</h3>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Locked Users</h6>
                            <h3 className="text-danger">20</h3>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Verified Accounts</h6>
                            <h3 className="text-primary">95</h3>
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
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Role</th>
                    <th>Orders</th>
                    <th>Total Spent</th>
                    <th>Register Date</th>
                    <th>Last Login</th>
                    <th>Email Verified</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
            </DataTable>

            <AddUserModal />
            <EditUserModal />
            <DeleteUserModal />
        </div>
    );
}

export default AdminUser;