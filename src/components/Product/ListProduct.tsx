import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import type { RootState } from '../../store/Store';
import EmptyState from '../common/EmptyState';
import ProductItem from './ProductItem';
import ProductFilter from './ProductFilter';
import type { FilterState } from './ProductFilter';

const defaultFilters: FilterState = {
    search: '',
    category: 'Tất cả',
    minPrice: '',
    maxPrice: '',
    sort: 'default'
};

export default function ListProduct() {
    const products = useSelector((state: RootState) => state.products);

    const [searchParams] = useSearchParams();

    const [filters, setFilters] = useState<FilterState>({
        ...defaultFilters,
        category: searchParams.get('category') || 'Tất cả'
    });

    const categories = [
        'Tất cả',
        ...new Set(products.map((product) => product.category))
    ];

    const handleChange = (patch: Partial<FilterState>) => {
        setFilters((prev) => ({ ...prev, ...patch }));
    };

    const handleReset = () => {
        setFilters(defaultFilters);
    };

    let filteredProducts = products.filter((product) => {
        const matchName = product.name
            .toLowerCase()
            .includes(filters.search.toLowerCase());

        const matchCategory =
            filters.category === 'Tất cả' || product.category === filters.category;

        const matchMinPrice =
            filters.minPrice === '' || product.price >= Number(filters.minPrice);

        const matchMaxPrice =
            filters.maxPrice === '' || product.price <= Number(filters.maxPrice);

        return matchName && matchCategory && matchMinPrice && matchMaxPrice;
    });

    if (filters.sort === 'price-asc') {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-desc') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'rating') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
    } else if (filters.sort === 'sold') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.soldCount - a.soldCount);
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="section-title mb-0">Danh sách sản phẩm</h2>
                <span className="badge badge-handmade rounded-pill px-3 py-2">
                    {filteredProducts.length} sản phẩm
                </span>
            </div>

            <ProductFilter
                filters={filters}
                categories={categories}
                onChange={handleChange}
                onReset={handleReset}
            />

            <div className="row g-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                ) : (
                    <EmptyState
                        icon="bi-search"
                        title="Không tìm thấy sản phẩm"
                        text="Hãy thử thay đổi từ khóa hoặc bộ lọc."
                    />
                )}
            </div>
        </div>
    );
}