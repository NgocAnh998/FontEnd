import React from 'react';

function DeleteUserModal() {
    return (
        <div className="modal fade" id="deleteModal" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Delete</h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        />
                    </div>

                    <div className="modal-body">
                        Are you sure you want to delete this user?
                    </div>

                    <div className="modal-footer">
                        <button
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteUserModal;