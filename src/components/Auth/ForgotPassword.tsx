
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim()) {
            setError("Vui lòng nhập email của bạn.");
            setSuccess(false);
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Email không đúng định dạng.");
            setSuccess(false);
            return;
        }

        setError("");
        setSuccess(true);
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-5">
                    <div className="card shadow-handmade border-0 p-4 p-md-5 text-start">
                        <div className="text-center mb-4">
                            <div className="mb-3">
                                <i className="bi bi-key fs-1 text-accent"></i>
                            </div>
                            <h2 className="section-title mb-2">Quên mật khẩu?</h2>
                            <p className="text-muted-custom">Đừng lo lắng! Hãy nhập email đã đăng ký, chúng tôi sẽ hỗ trợ bạn đặt lại mật khẩu.</p>
                        </div>

                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Email đăng ký</label>
                                <input type="email" className="form-control py-2" placeholder="Nhập email của bạn" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            {error && <div className="alert alert-danger py-2">{error}</div>}
                            {success && <div className="alert alert-success py-2">Yêu cầu đã được ghi nhận! Đây là chức năng mô phỏng, chưa gửi email thực tế.</div>}

                            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Gửi yêu cầu đặt lại mật khẩu</button>
                        </form>

                        <div className="text-center mt-4">
                            <Link to="/login" className="text-accent fw-semibold">← Quay lại đăng nhập</Link>
                        </div>

                        <div className="text-center mt-3">
                            <Link to="/" className="text-muted-custom small">Quay lại trang chủ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
