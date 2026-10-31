import React from "react";

interface PriceFilterProps {
    selectedRange: string;
    sortBy: string;
    onRangeChange: (range: string) => void;
    onSortChange: (sort: string) => void;
}

export const PriceFilter: React.FC<PriceFilterProps> = ({
                                                            selectedRange,
                                                            sortBy,
                                                            onRangeChange,
                                                            onSortChange,
                                                        }) => {
    return (
        <div className="price-filter-bar">
            <div className="filter-group">
                <label>Mức giá:</label>
                <select
                    value={selectedRange}
                    onChange={(e) => onRangeChange(e.target.value)}
                >
                    <option value="all">Tất cả mức giá</option>
                    <option value="under-100">Dưới 100.000đ</option>
                    <option value="100-300">100.000đ - 300.000đ</option>
                    <option value="over-300">Trên 300.000đ</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Sắp xếp:</label>
                <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                    <option value="default">Mặc định</option>
                    <option value="price-asc">Giá thấp đến cao</option>
                    <option value="price-desc">Giá cao đến thấp</option>
                    <option value="name-asc">Tên A - Z</option>
                </select>
            </div>
        </div>
    );
};