
function AdminUser() {
    return (
        <div className="container-fluid">
            <h2 className="mb-4">User Management</h2>

            <div className="row mb-4">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5>Total Users</h5>
                            <h3>120</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5>Active Users</h5>
                            <h3 className="text-success">100</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5>Locked Users</h5>
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
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Search users..."/>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle">
                            <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nguyen Van An</td>
                                <td>an@gmail.com</td>
                                <td>Admin</td>
                                <td>
                                        <span className="badge bg-success">
                                            Active
                                        </span>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm">
                                        Lock
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Tran Thi Binh</td>
                                <td>binh@gmail.com</td>
                                <td>Customer</td>
                                <td>
                                        <span className="badge bg-success">
                                            Active
                                        </span>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm">
                                        Lock
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Le Van Cuong</td>
                                <td>cuong@gmail.com</td>
                                <td>Customer</td>
                                <td>
                                        <span className="badge bg-danger">
                                            Locked
                                        </span>
                                </td>
                                <td>
                                    <button className="btn btn-success btn-sm">
                                        Unlock
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Pham Thi Dung</td>
                                <td>dung@gmail.com</td>
                                <td>Customer</td>
                                <td>
                                        <span className="badge bg-success">
                                            Active
                                        </span>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm">
                                        Lock
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminUser;
