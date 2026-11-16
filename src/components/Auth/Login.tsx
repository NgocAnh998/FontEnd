
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Kiểm tra dữ liệu nhập
        if (!email || !password) {
            setError("Vui lòng nhập đầy đủ email và mật khẩu.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Email không đúng định dạng.");
            return;
        }

        setError("");
        alert("Đăng nhập thành công! (Đây là chức năng mô phỏng)");
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-5">

                    <div className="card shadow-handmade border-0 p-4 p-md-5">
                        <div className="text-center mb-4">
                            <h2 className="section-title mb-2"> Chào mừng trở lại! </h2>
                            <p className="text-muted-custom"> Đăng nhập để tiếp tục mua sắm cùng chúng tôi. </p>
                        </div>

                        {/* Form đăng nhập */}
                        <form onSubmit={submitLogin}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Email</label>

                                <input type="email" className="form-control py-2" placeholder="Nhập email của bạn" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="mb-3"> <label className="form-label fw-semibold"> Mật khẩu </label>

                                <input type="password" className="form-control py-2" placeholder="Nhập mật khẩu" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="text-end mb-3">
                                <Link to="/forgot-password" className="text-accent small" > Quên mật khẩu? </Link>
                            </div>

                            {/* Thông báo lỗi */}
                            {error && (
                                <div className="alert alert-danger py-2"> {error} </div>
                            )}

                            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold" > Đăng nhập </button>
                        </form>

                        {/* Đăng ký */}
                        <div className="text-center mt-4">
                            <span className="text-muted-custom"> Bạn chưa có tài khoản? </span>{" "}
                            <Link to="/register" className="text-accent fw-semibold" > Đăng ký ngay </Link>
                        </div>

                        <div className="text-center mt-3">
                            <Link to="/" className="text-muted-custom small"> Quay lại trang chủ </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
