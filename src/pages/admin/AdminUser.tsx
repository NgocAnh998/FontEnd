
function AdminUser() {
    return (
        <div className="container-fluid">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>User Management</h2>

                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">
                    + Add User
                </button>
            </div>


            <div className="row mb-4">

                <div className="col-md-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h6>Total Users</h6>
                            <h3>120</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h6>Customers</h6>
                            <h3>105</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h6>Active Users</h6>
                            <h3 className="text-success">100</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h6>Locked Users</h6>
                            <h3 className="text-danger">20</h3>
                        </div>
                    </div>
                </div>

            </div>


            <div className="card">

                <div className="card-header bg-white">
                    <h5 className="mb-0">User List</h5>
                </div>

                <div className="card-body">

                    <div className="row mb-3">

                        <div className="col-md-5 mb-2">
                            <input type="text" className="form-control" placeholder="Search name, email, phone..."/>
                        </div>

                        <div className="col-md-3 mb-2">
                            <select className="form-select">
                                <option>All Roles</option>
                                <option>Admin</option>
                                <option>Staff</option>
                                <option>Customer</option>
                            </select>
                        </div>

                        <div className="col-md-3 mb-2">
                            <select className="form-select">
                                <option>All Status</option>
                                <option>Active</option>
                                <option>Locked</option>
                            </select>
                        </div>

                    </div>

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover align-middle">

                            <thead className="table-dark">
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

                            <tbody>

                            <tr>
                                <td>1</td>
                                <td>Nguyen Van An</td>
                                <td>an@gmail.com</td>
                                <td>0901234567</td>
                                <td>Male</td>
                                <td>District 1, HCMC</td>
                                <td>
                                    <span className="badge bg-danger">Admin</span>
                                </td>
                                <td>12</td>
                                <td>15,000,000đ</td>
                                <td>10/01/2026</td>
                                <td>20/11/2026</td>
                                <td>
                                    <span className="badge bg-success">Verified</span>
                                </td>
                                <td>
                                    <span className="badge bg-success">Active</span>
                                </td>
                                <td className="text-nowrap">
                                    <button className="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editUserModal">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteUserModal">
                                        Delete
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Tran Thi Binh</td>
                                <td>binh@gmail.com</td>
                                <td>0912345678</td>
                                <td>Female</td>
                                <td>District 3, HCMC</td>
                                <td>
                                    <span className="badge bg-secondary">Customer</span>
                                </td>
                                <td>8</td>
                                <td>8,500,000đ</td>
                                <td>15/02/2026</td>
                                <td>20/11/2026</td>
                                <td>
                                    <span className="badge bg-success">Verified</span>
                                </td>
                                <td>
                                    <span className="badge bg-success">Active</span>
                                </td>
                                <td className="text-nowrap">
                                    <button className="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editUserModal">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteUserModal">
                                        Delete
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Le Van Cuong</td>
                                <td>cuong@gmail.com</td>
                                <td>0923456789</td>
                                <td>Male</td>
                                <td>Thu Duc, HCMC</td>
                                <td>
                                    <span className="badge bg-secondary">Customer</span>
                                </td>
                                <td>3</td>
                                <td>3,200,000đ</td>
                                <td>20/03/2026</td>
                                <td>15/10/2026</td>
                                <td>
                                    <span className="badge bg-warning text-dark">Unverified</span>
                                </td>
                                <td>
                                    <span className="badge bg-danger">Locked</span>
                                </td>
                                <td className="text-nowrap">
                                    <button className="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editUserModal">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteUserModal">
                                        Delete
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Pham Thi Dung</td>
                                <td>dung@gmail.com</td>
                                <td>0934567890</td>
                                <td>Female</td>
                                <td>Binh Thanh, HCMC</td>
                                <td>
                                    <span className="badge bg-secondary">Customer</span>
                                </td>
                                <td>15</td>
                                <td>22,000,000đ</td>
                                <td>05/04/2026</td>
                                <td>21/11/2026</td>
                                <td>
                                    <span className="badge bg-success">Verified</span>
                                </td>
                                <td>
                                    <span className="badge bg-success">Active</span>
                                </td>
                                <td className="text-nowrap">
                                    <button className="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#editUserModal">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteUserModal">
                                        Delete
                                    </button>
                                </td>
                            </tr>

                            </tbody>

                        </table>

                    </div>

                </div>
            </div>


            <div className="modal fade" id="addUserModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Add New User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"/>
                        </div>

                        <div className="modal-body">
                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter full name" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control" placeholder="Enter phone number" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Gender</label>
                                    <select className="form-select">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Role</label>
                                    <select className="form-select">
                                        <option>Customer</option>
                                        <option>Staff</option>
                                        <option>Admin</option>
                                    </select>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Address</label>
                                    <textarea className="form-control" rows={2} placeholder="Enter address" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Account Status</label>
                                    <select className="form-select">
                                        <option>Active</option>
                                        <option>Locked</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Email Verified</label>
                                    <select className="form-select">
                                        <option>Verified</option>
                                        <option>Unverified</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button className="btn btn-primary">
                                Add User
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="modal fade" id="editUserModal" tabIndex={-1}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Edit User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"/>
                        </div>

                        <div className="modal-body">
                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" defaultValue="Nguyen Van An" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" defaultValue="an@gmail.com" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control" defaultValue="0901234567" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Gender</label>
                                    <select className="form-select" defaultValue="Male">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" defaultValue="1998-05-12" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Role</label>
                                    <select className="form-select" defaultValue="Admin">
                                        <option>Admin</option>
                                        <option>Staff</option>
                                        <option>Customer</option>
                                    </select>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Address</label>
                                    <textarea className="form-control" rows={2} defaultValue="District 1, Ho Chi Minh City" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Account Status</label>
                                    <select className="form-select" defaultValue="Active">
                                        <option>Active</option>
                                        <option>Locked</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Email Verified</label>
                                    <select className="form-select" defaultValue="Verified">
                                        <option>Verified</option>
                                        <option>Unverified</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button className="btn btn-primary">
                                Save Changes
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteUserModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Delete User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"/>
                        </div>

                        <div className="modal-body">
                            <p>Are you sure you want to delete this user?</p>

                            <div className="alert alert-warning mb-0">
                                <strong>Nguyen Van An</strong>
                                <br />
                                an@gmail.com
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>

                            <button className="btn btn-danger" data-bs-dismiss="modal">
                                Delete
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminUser;
