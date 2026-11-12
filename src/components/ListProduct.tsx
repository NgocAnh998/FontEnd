
function ListProduct() {

    return (
        <>
            <div className="container py-4">
                <h2 className="mb-4">Danh sách sản phẩm</h2>

                <div className="row g-4">

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="card h-100 shadow-sm">
                            <img src="https://placehold.co/400x300?text=Product+1"
                                 className="card-img-top" alt="Áo thun"/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Áo thun nam</h5>
                                <p className="card-text text-muted">Áo thun cotton thoáng mát</p>
                                <h5 className="text-danger">199.000đ</h5>
                                <button className="btn btn-primary mt-auto">
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="card h-100 shadow-sm">
                            <img src="https://placehold.co/400x300?text=Product+2"
                                 className="card-img-top" alt="Giày thể thao"/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Giày thể thao</h5>
                                <p className="card-text text-muted">Thiết kế trẻ trung, năng động</p>
                                <h5 className="text-danger">599.000đ</h5>
                                <button className="btn btn-primary mt-auto">
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="card h-100 shadow-sm">
                            <img src="https://placehold.co/400x300?text=Product+3"
                                 className="card-img-top" alt="Ba lô"/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Ba lô thời trang</h5>
                                <p className="card-text text-muted">Nhiều ngăn, tiện lợi khi đi học</p>
                                <h5 className="text-danger">349.000đ</h5>
                                <button className="btn btn-primary mt-auto">
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="card h-100 shadow-sm">
                            <img src="https://placehold.co/400x300?text=Product+4"
                                 className="card-img-top" alt="Đồng hồ"/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Đồng hồ nam</h5>
                                <p className="card-text text-muted">Phong cách hiện đại, sang trọng</p>
                                <h5 className="text-danger">899.000đ</h5>
                                <button className="btn btn-primary mt-auto">
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ListProduct