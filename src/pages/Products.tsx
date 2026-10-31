import { useState } from 'react'
import ProductCard from '../components/common/ProductCard'
import { products } from '../data/products'

type ProductsProps = {
    searchText: string
}

function Products({ searchText }: ProductsProps) {
    const [selectedCategory, setSelectedCategory] = useState('Tất cả')
    const [sortOrder, setSortOrder] = useState('default')

    const categories = [
        'Tất cả',
        'Đồ len',
        'Phụ kiện',
        'Trang trí',
        'Trang sức',
        'Quà tặng'
    ]

    const normalizedSearch = searchText.trim().toLowerCase()

    const filteredProducts = products
        .filter((product) => {
            const matchesCategory =
                selectedCategory === 'Tất cả' ||
                product.category === selectedCategory

            const matchesSearch =
                product.name.toLowerCase().includes(normalizedSearch) ||
                product.category.toLowerCase().includes(normalizedSearch) ||
                product.description.toLowerCase().includes(normalizedSearch)

            return matchesCategory && matchesSearch
        })
        .sort((a, b) => {
            if (sortOrder === 'price-asc') {
                return a.price - b.price
            }

            if (sortOrder === 'price-desc') {
                return b.price - a.price
            }

            return 0
        })

    return (
        <div className="products-page" id="products">
            <div className="products-heading">
                <h1>Sản phẩm handmade</h1>
                <p>Khám phá những sản phẩm thủ công độc đáo</p>
            </div>

            <div className="products-controls">
                <div className="category-filter">
                    {categories.map((category) => (
                        <button
                            type="button"
                            key={category}
                            className={
                                selectedCategory === category ? 'active' : ''
                            }
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <label className="sort-control">
                    Sắp xếp giá
                    <select
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                    >
                        <option value="default">Mặc định</option>
                        <option value="price-asc">Giá tăng dần</option>
                        <option value="price-desc">Giá giảm dần</option>
                    </select>
                </label>
            </div>

            <div className="products-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                        />
                    ))
                ) : (
                    <p className="empty-products">
                        Không tìm thấy sản phẩm phù hợp.
                    </p>
                )}
            </div>
        </div>
    )
}

export default Products