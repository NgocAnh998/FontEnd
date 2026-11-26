import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();

    let message = 'Đã xảy ra lỗi không xác định!';

    if (isRouteErrorResponse(error)) {
        message =
            error.status === 404
                ? 'Không tìm thấy trang bạn yêu cầu!'
                : error.statusText || message;
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm text-center p-5">
                        <i className="bi bi-exclamation-triangle text-danger empty-state-icon"></i>

                        <h1 className="display-4 text-danger mt-3">Oops!</h1>
                        <h2 className="h4">Có lỗi xảy ra</h2>
                        <p className="text-muted-custom">{message}</p>

                        <div className="d-flex justify-content-center gap-2 mt-3">
                            <Link to="/" className="btn btn-primary">
                                <i className="bi bi-house me-2"></i>
                                Về trang chủ
                            </Link>

                            <Link to="/products" className="btn btn-outline-primary">
                                Xem sản phẩm
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;