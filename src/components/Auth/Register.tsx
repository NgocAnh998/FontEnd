
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const submitRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!fullName.trim() || !email.trim() || !phone.trim() || !password || !confirmPassword) {
            setError("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Email không đúng định dạng.");
            return;
        }

        if (!/^[0-9]{10,11}$/.test(phone)) {
            setError("Số điện thoại phải có 10 hoặc 11 chữ số.");
            return;
        }

        if (password.length < 6) {
            setError("Mật khẩu phải có ít nhất 6 ký tự.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Mật khẩu xác nhận không khớp.");
            return;
        }

        setError("");
        alert("Đăng ký thành công! (Đây là chức năng mô phỏng)");
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-9 col-lg-6">
                    <div className="card shadow-handmade border-0 p-4 p-md-5 text-start">
                        <div className="text-center mb-4">
                            <h2 className="section-title mb-2">Tạo tài khoản</h2>
                            <p className="text-muted-custom">Đăng ký để khám phá những sản phẩm handmade độc đáo.</p>
                        </div>

                        <form onSubmit={submitRegister}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Họ và tên</label>
                                <input type="text" className="form-control py-2" placeholder="Nhập họ và tên" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Email</label>
                                <input type="email" className="form-control py-2" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Số điện thoại</label>
                                <input type="tel" className="form-control py-2" placeholder="Nhập số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Mật khẩu</label>
                                <input type="password" className="form-control py-2" placeholder="Tối thiểu 6 ký tự" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Xác nhận mật khẩu</label>
                                <input type="password" className="form-control py-2" placeholder="Nhập lại mật khẩu" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>

                            {error && <div className="alert alert-danger py-2">{error}</div>}

                            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Đăng ký</button>
                        </form>

                        <div className="text-center mt-4">
                            <span className="text-muted-custom">Bạn đã có tài khoản?</span>{" "}
                            <Link to="/login" className="text-accent fw-semibold">Đăng nhập</Link>
                        </div>

                        <div className="text-center mt-3">
                            <Link to="/" className="text-muted-custom small">← Quay lại trang chủ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
