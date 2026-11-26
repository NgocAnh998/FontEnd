export interface FilterState {
    search: string;
    category: string;
    minPrice: string;
    maxPrice: string;
    sort: string;
}

interface ProductFilterProps {
    filters: FilterState;
    categories: string[];
    onChange: (patch: Partial<FilterState>) => void;
    onReset: () => void;
}

function ProductFilter({ filters, categories, onChange, onReset }: ProductFilterProps) {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <div className="input-group mb-3">
                    <span className="input-group-text bg-white">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tìm kiếm sản phẩm..."
                        value={filters.search}
                        onChange={(e) => onChange({ search: e.target.value })}
                    />
                </div>

                <div className="row g-3">
                    <div className="col-12 col-md-3">
                        <label className="form-label small fw-semibold">Danh mục</label>
                        <select
                            className="form-select"
                            value={filters.category}
                            onChange={(e) => onChange({ category: e.target.value })}
                        >
                            {categories.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-6 col-md-2">
                        <label className="form-label small fw-semibold">Giá từ</label>
                        <input
                            type="number"
                            className="form-control"
                            min="0"
                            placeholder="Thấp nhất"
                            value={filters.minPrice}
                            onChange={(e) => onChange({ minPrice: e.target.value })}
                        />
                    </div>

                    <div className="col-6 col-md-2">
                        <label className="form-label small fw-semibold">Đến giá</label>
                        <input
                            type="number"
                            className="form-control"
                            min="0"
                            placeholder="Cao nhất"
                            value={filters.maxPrice}
                            onChange={(e) => onChange({ maxPrice: e.target.value })}
                        />
                    </div>

                    <div className="col-12 col-md-3">
                        <label className="form-label small fw-semibold">Sắp xếp</label>
                        <select
                            className="form-select"
                            value={filters.sort}
                            onChange={(e) => onChange({ sort: e.target.value })}
                        >
                            <option value="default">Mặc định</option>
                            <option value="price-asc">Giá tăng dần</option>
                            <option value="price-desc">Giá giảm dần</option>
                            <option value="rating">Đánh giá cao nhất</option>
                            <option value="sold">Bán chạy nhất</option>
                        </select>
                    </div>

                    <div className="col-12 col-md-2 d-flex align-items-end">
                        <button
                            type="button"
                            className="btn btn-outline-secondary w-100"
                            onClick={onReset}
                        >
                            <i className="bi bi-arrow-counterclockwise me-1"></i>
                            Xóa lọc
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductFilter;