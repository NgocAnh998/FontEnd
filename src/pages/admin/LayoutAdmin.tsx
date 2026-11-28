import { useState } from "react";
import { Outlet } from "react-router-dom";
import SlideBarAdmin from "../../pages/admin/SlideBarAdmin";

function LayoutAdmin() {
    const [open, setOpen] = useState(false);

    return (
        <div className="d-flex flex-column flex-md-row min-vh-100">
            <div className="bg-dark text-white d-flex d-md-none align-items-center justify-content-between px-3 py-2">
                <span className="fw-bold">Admin Panel</span>

                <button
                    type="button"
                    className="btn btn-outline-light btn-sm"
                    onClick={() => setOpen(!open)}
                    aria-label="Mở menu"
                >
                    <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
                </button>
            </div>

            <SlideBarAdmin open={open} onNavigate={() => setOpen(false)} />

            <main className="flex-grow-1 p-3 p-md-4 bg-light" style={{ minWidth: 0 }}>
                <Outlet />
            </main>
        </div>
    );
}

export default LayoutAdmin;