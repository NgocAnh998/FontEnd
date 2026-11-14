import ProductItem from './ProductItem';
import { useSelector } from "react-redux";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { RootState } from "../../store/Store";

export default function ListProduct() {
    const products = useSelector((state: RootState) => state.products);

    const [searchParams] = useSearchParams();

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState(
        searchParams.get("category") || "Tất cả"
    );
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sort, setSort] = useState("default");

    const categories = [
        "Tất cả",
        ...new Set(products.map((product) => product.category))
    ];

    let filteredProducts = products.filter((product) => {
        const matchName = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory =
            category === "Tất cả" || product.category === category;

        const matchMinPrice =
            minPrice === "" || product.price >= Number(minPrice);

        const matchMaxPrice =
            maxPrice === "" || product.price <= Number(maxPrice);

        return matchName && matchCategory && matchMinPrice && matchMaxPrice;
    });

    if (sort === "price-asc") {
        filteredProducts = [...filteredProducts].sort(
            (a, b) => a.price - b.price
        );
    } else if (sort === "price-desc") {
        filteredProducts = [...filteredProducts].sort(
            (a, b) => b.price - a.price
        );
    } else if (sort === "rating") {
        filteredProducts = [...filteredProducts].sort(
            (a, b) => b.rating - a.rating
        );
    } else if (sort === "sold") {
        filteredProducts = [...filteredProducts].sort(
            (a, b) => b.soldCount - a.soldCount
        );
    }

    return (
        <div className="container py-4">
            <h2 className="mb-4">Danh sách sản phẩm</h2>

            {/* Tìm kiếm */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Bộ lọc */}
            <div className="row g-3 mb-4">
                <div className="col-md-3">
                    <label className="form-label">Danh mục</label>
                    <select
                        className="form-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-2">
                    <label className="form-label">Giá từ</label>
                    <input
                        type="number"
                        className="form-control"
                        min="0"
                        placeholder="Giá thấp nhất"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </div>

                <div className="col-md-2">
                    <label className="form-label">Đến giá</label>
                    <input
                        type="number"
                        className="form-control"
                        min="0"
                        placeholder="Giá cao nhất"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>

                <div className="col-md-3">
                    <label className="form-label">Sắp xếp</label>
                    <select
                        className="form-select"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="default">Mặc định</option>
                        <option value="price-asc">Giá tăng dần</option>
                        <option value="price-desc">Giá giảm dần</option>
                        <option value="rating">Đánh giá cao nhất</option>
                        <option value="sold">Bán chạy nhất</option>
                    </select>
                </div>

                <div className="col-md-2 d-flex align-items-end">
                    <button
                        className="btn btn-secondary w-100"
                        onClick={() => {
                            setSearch("");
                            setCategory("Tất cả");
                            setMinPrice("");
                            setMaxPrice("");
                            setSort("default");
                        }}
                    >
                        Xóa lọc
                    </button>
                </div>
            </div>

            <p className="text-muted">
                Tìm thấy {filteredProducts.length} sản phẩm
            </p>

            {/* Danh sách sản phẩm */}
            <div className="row g-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                    ))
                ) : (
                    <div className="col-12 text-center py-5">
                        <h5>Không tìm thấy sản phẩm</h5>
                        <p className="text-muted">
                            Hãy thử thay đổi từ khóa hoặc bộ lọc.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}