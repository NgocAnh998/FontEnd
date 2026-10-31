import { useState } from 'react'
import ProductCard from '../components/common/ProductCard'
import { products } from '../data/products'

function Products() {
    const [selectedCategory, setSelectedCategory] = useState('Tất cả')

    const categories = [
        'Tất cả',
        'Đồ len',
        'Phụ kiện',
        'Trang trí',
        'Trang sức',
        'Quà tặng'
    ]

    const filteredProducts =
        selectedCategory === 'Tất cả'
            ? products
            : products.filter(
                (product) => product.category === selectedCategory
            )

    return (
        <div className="products-page" id="products">
            <div className="products-heading">
                <h1>Sản phẩm handmade</h1>
                <p>Khám phá những sản phẩm thủ công độc đáo</p>
            </div>

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

            <div className="products-list">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products