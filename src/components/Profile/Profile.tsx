import { useState } from "react";

function Profile() {
    const [fullName, setFullName] = useState("Nguyễn Văn An");
    const [email, setEmail] = useState("nguyenvanan@gmail.com");
    const [phone, setPhone] = useState("0912345678");

    const [avatar, setAvatar] = useState(
        "https://placehold.co/150x150?text=Avatar"
    );

    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;
        setAvatar(URL.createObjectURL(file));

    };

    return (
        <div className="container py-4">
            <div className="mb-4">
                <h2 className="fw-bold">Hồ sơ cá nhân</h2>
                <p className="text-muted"> Quản lý thông tin tài khoản của bạn</p>
            </div>

            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body text-center p-4">
                            <h5 className="fw-bold mb-4">Ảnh đại diện </h5>
                            <img src={avatar} alt="Ảnh đại diện" className="rounded-circle mb-3 border" style={{width: "150px",height: "150px", objectFit: "cover"}}/>
                            <div>
                                <label htmlFor="avatar" className="btn btn-outline-secondary btn-sm" > Chọn ảnh </label>
                                <input type="file" id="avatar" className="d-none" accept="image/*" onChange={handleAvatarChange} />
                            </div>
                            <hr />

                            <h6 className="fw-bold">{fullName}</h6>
                            <p className="text-muted small">{email}</p>
                        </div>
                    </div>
                </div>

                {/* Form thông tin */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h5 className="fw-bold mb-4">Thông tin tài khoản</h5>

                                {/* Họ tên */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold"> Họ và tên</label>

                                    <input  type="text" className="form-control" placeholder="Nhập họ và tên" value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Email</label>

                                    <input type="email" className="form-control" placeholder="example@gmail.com" value={email}
                                        onChange={(e) => setEmail(e.target.value) } />

                                    <div className="form-text"> Email phải hợp lệ và chưa được tài khoản khác sử dụng. </div>
                                </div>

                                {/* Số điện thoại */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold"> Số điện thoại </label>

                                    <input type="tel" className="form-control"  placeholder="Nhập số điện thoại" value={phone}
                                        onChange={(e) => setPhone(e.target.value) } />
                                </div>

                                <div className="d-flex justify-content-end gap-2">
                                    <button type="button" className="btn btn-light"
                                        onClick={() => { setFullName("Nguyễn Văn An"); setEmail("nguyenvanan@gmail.com"); setPhone("0912345678");setAvatar("https://placehold.co/150x150?text=Avatar");}}>Đặt lại
                                    </button>

                                    <button type="submit" className="btn btn-success px-4" > Lưu thay đổi </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;