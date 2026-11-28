import React from 'react';

function EditUserModal() {
    return (
        <div className="modal fade" id="editModal" tabIndex={-1}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit User</h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        />
                    </div>

                    <div className="modal-body">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Full Name</label>
                                <input
                                    className="form-control"
                                    placeholder="Enter full name"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input
                                    className="form-control"
                                    placeholder="Enter email"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Phone</label>
                                <input
                                    className="form-control"
                                    placeholder="Enter phone"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Gender</label>
                                <select className="form-select">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="col-12">
                                <label className="form-label">Address</label>
                                <input
                                    className="form-control"
                                    placeholder="Enter address"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Role</label>
                                <select className="form-select">
                                    <option>Admin</option>
                                    <option>Customer</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Status</label>
                                <select className="form-select">
                                    <option>Active</option>
                                    <option>Locked</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditUserModal;