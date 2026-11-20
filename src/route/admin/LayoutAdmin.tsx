import { Outlet } from "react-router-dom";
import SlideBarAdmin from "../../pages/admin/SlideBarAdmin";

function LayoutAdmin() {
    return (
        <div className="d-flex min-vh-100">
            <SlideBarAdmin />

            <main className="flex-grow-1 p-4 bg-light" style={{ minWidth: 0 }}>
                <Outlet />
            </main>
        </div>
    );
}

export default LayoutAdmin;