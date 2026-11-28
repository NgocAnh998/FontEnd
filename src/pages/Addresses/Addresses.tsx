import { useState } from "react";
import "./Addresses.css";
import ProfileMenu from "../../components/Profile/ProfileMenu.tsx";


const initialAddresses = [
    { id: 1, fullName: "Nguyễn Văn An", phone: "0901234567", province: "TP. Hồ Chí Minh", district: "Thủ Đức", ward: "Linh Trung", detail: "123 Đường Võ Văn Ngân", type: "Nhà riêng", isDefault: true },
    { id: 2, fullName: "Nguyễn Văn An", phone: "0901234567", province: "TP. Hồ Chí Minh", district: "Quận 1", ward: "Bến Nghé", detail: "45 Nguyễn Huệ", type: "Văn phòng", isDefault: false }
];

const emptyForm = { fullName: "", phone: "", province: "", district: "", ward: "", detail: "", type: "Nhà riêng", isDefault: false };

function Addresses() {
    const [addresses, setAddresses] = useState(initialAddresses);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState(emptyForm);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const openAddForm = () => {
        setForm(emptyForm);
        setEditingId(null);
        setShowForm(true);
    };

    const openEditForm = (address) => {
        setForm({ ...address });
        setEditingId(address.id);
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.fullName.trim() || !form.phone.trim() || !form.province.trim() || !form.district.trim() || !form.ward.trim() || !form.detail.trim()) {
            alert("Vui lòng nhập đầy đủ thông tin địa chỉ");
            return;
        }

        if (!/^(0|\+84)\d{9,10}$/.test(form.phone.trim())) {
            alert("Số điện thoại không hợp lệ");
            return;
        }

        if (editingId) {
            setAddresses(addresses.map((address) => address.id === editingId ? { ...form, id: editingId } : address));
        } else {
            setAddresses([...addresses, { ...form, id: Date.now(), isDefault: addresses.length === 0 || form.isDefault }]);
        }

        if (form.isDefault) {
            setAddresses((prev) => prev.map((address) => address.id === (editingId || addresses[addresses.length - 1]?.id) ? address : { ...address, isDefault: false }));
        }

        setShowForm(false);
        setEditingId(null);
        setForm(emptyForm);
    };

    const setDefaultAddress = (id) => {
        setAddresses(addresses.map((address) => ({ ...address, isDefault: address.id === id })));
    };

    const deleteAddress = (id) => {
        if (!window.confirm("Bạn có chắc muốn xóa địa chỉ này?")) return;

        const updatedAddresses = addresses.filter((address) => address.id !== id);

        if (addresses.find((address) => address.id === id)?.isDefault && updatedAddresses.length > 0) {
            updatedAddresses[0].isDefault = true;
        }

        setAddresses(updatedAddresses);
    };

    return (
        <div className="row g-4">
            <div className="col-12 col-md-4 col-lg-3">
                <ProfileMenu />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
        <div className="addresses-page container py-4">
            <div className="addresses-header">
                <div>
                    <h2>Địa chỉ của tôi</h2>
                    <p>Quản lý địa chỉ giao hàng của bạn.</p>
                </div>
                <button className="btn btn-dark" onClick={openAddForm}>+ Thêm địa chỉ mới</button>
            </div>

            <div className="addresses-list">
                {addresses.map((address) => (
                    <div className="address-card" key={address.id}>
                        <div className="address-card-header">
                            <div className="address-name">{address.fullName}</div>
                            <div className="address-type">{address.type}</div>
                        </div>
                        <div className="address-phone">{address.phone}</div>
                        <div className="address-detail">{address.detail}, {address.ward}, {address.district}, {address.province}</div>
                        {address.isDefault && <span className="address-default-badge">Địa chỉ mặc định</span>}
                        <div className="address-actions">
                            <button className="btn btn-outline-dark btn-sm" onClick={() => openEditForm(address)}>Chỉnh sửa</button>
                            <button className="btn btn-outline-danger btn-sm" onClick={() => deleteAddress(address.id)}>Xóa</button>
                            {!address.isDefault && <button className="btn btn-outline-secondary btn-sm" onClick={() => setDefaultAddress(address.id)}>Đặt mặc định</button>}
                        </div>
                    </div>
                ))}
            </div>

            {addresses.length === 0 && <div className="address-empty"><p>Bạn chưa có địa chỉ giao hàng nào.</p><button className="btn btn-dark" onClick={openAddForm}>Thêm địa chỉ</button></div>}

            {showForm && (
                <div className="address-modal-overlay" onClick={() => setShowForm(false)}>
                    <div className="address-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="address-modal-header">
                            <h4>{editingId ? "Chỉnh sửa địa chỉ" : "Thêm địa chỉ mới"}</h4>
                            <button className="address-close-btn" onClick={() => setShowForm(false)}>×</button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="address-form-grid">
                                <div className="mb-3"><label className="form-label">Họ và tên</label><input className="form-control" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Nhập họ và tên" /></div>
                                <div className="mb-3"><label className="form-label">Số điện thoại</label><input className="form-control" name="phone" value={form.phone} onChange={handleChange} placeholder="Nhập số điện thoại" /></div>
                                <div className="mb-3"><label className="form-label">Tỉnh / Thành phố</label><input className="form-control" name="province" value={form.province} onChange={handleChange} placeholder="Nhập tỉnh / thành phố" /></div>
                                <div className="mb-3"><label className="form-label">Quận / Huyện</label><input className="form-control" name="district" value={form.district} onChange={handleChange} placeholder="Nhập quận / huyện" /></div>
                                <div className="mb-3"><label className="form-label">Phường / Xã</label><input className="form-control" name="ward" value={form.ward} onChange={handleChange} placeholder="Nhập phường / xã" /></div>
                                <div className="mb-3"><label className="form-label">Loại địa chỉ</label><select className="form-select" name="type" value={form.type} onChange={handleChange}><option value="Nhà riêng">Nhà riêng</option><option value="Văn phòng">Văn phòng</option></select></div>
                                <div className="mb-3 address-form-full"><label className="form-label">Địa chỉ cụ thể</label><input className="form-control" name="detail" value={form.detail} onChange={handleChange} placeholder="Số nhà, tên đường..." /></div>
                            </div>

                            <div className="form-check mb-3"><input className="form-check-input" type="checkbox" name="isDefault" checked={form.isDefault} onChange={handleChange} id="defaultAddress" /><label className="form-check-label" htmlFor="defaultAddress">Đặt làm địa chỉ mặc định</label></div>
                            <div className="address-modal-actions"><button type="button" className="btn btn-outline-secondary" onClick={() => setShowForm(false)}>Hủy</button><button type="submit" className="btn btn-dark">Lưu địa chỉ</button></div>
                        </form>
                    </div>
                </div>
            )}
        </div>
            </div>
        </div>
    );
}

export default Addresses;