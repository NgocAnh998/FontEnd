
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

function Error() {
    const error = useRouteError();

    let message = 'Đã xảy ra lỗi không xác định!';

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? 'Không tìm thấy trang bạn yêu cầu!' : error.statusText || message;
    } else if (error instanceof Error) {

    }

    return (
        <div className="container text-center py-5">
            <h1 className="display-1 text-danger">Oops!</h1>
            <h2>Có lỗi xảy ra</h2>
            <p className="text-muted">{message}</p>
            <Link to="/" className="btn btn-primary mt-3">Quay về trang chủ</Link>
        </div>
    );
}

export default Error;
