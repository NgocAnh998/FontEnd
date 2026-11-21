import { useState } from "react";
import ProfileMenu from "./ProfileMenu";

function Profile() {
    const [fullName, setFullName] = useState("Nguyễn Văn An");
    const [email, setEmail] = useState("nguyenvanan@gmail.com");
    const [phone, setPhone] = useState("0912345678");

    const [avatar, setAvatar] = useState(
        "https://placehold.co/150x150?text=Avatar"
    );

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const isValidEmail = (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const changeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setError("Vui lòng chọn một file hình ảnh.");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setError("Ảnh đại diện không được vượt quá 2MB.");
            return;
        }

        setAvatar(URL.createObjectURL(file));
        setError("");

    };

    const submitProfile = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setMessage("");
        setError("");

        if (!fullName.trim()) {
            return;
        }

        if (!isValidEmail(email)) {
            setError("Email không đúng định dạng.");
            return;
        }

        if (!/^0\d{9}$/.test(phone)) {
            setError("Số điện thoại phải có 10 chữ số và bắt đầu bằng 0.");
            return;
        }

        setMessage("Cập nhật thông tin cá nhân thành công!");

    };


    return (
        <div className="row g-4">
            <div className="col-12 col-md-4 col-lg-3">
                <ProfileMenu />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
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
                                        <input type="file" id="avatar" className="d-none" accept="image/*" onChange={changeAvatar} />
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

                                    {message && ( <div className="alert alert-success"> {message} </div> )}
                                    {error && ( <div className="alert alert-danger"> {error} </div> )}

                                    <form onSubmit={submitProfile} noValidate>
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
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profile;