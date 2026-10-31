import { useState } from 'react'
import ProductCard from '../components/common/ProductCard'

function Products() {
    const [selectedCategory, setSelectedCategory] = useState('Tất cả')
    const products = [
        {
            id: 1,
            name: 'Gấu bông handmade',
            price: '150.000đ',
            image: '/images/teddy.jpg',
            category: 'Đồ len'
        },
        {
            id: 2,
            name: 'Túi tote handmade',
            price: '120.000đ',
            image: '/images/tote.jpg',
            category: 'Phụ kiện'
        },
        {
            id: 3,
            name: 'Hoa len handmade',
            price: '80.000đ',
            image: '/images/flower.jpg',
            category: 'Đồ len'
        },
        {
            id: 4,
            name: 'Nến thơm handmade',
            price: '100.000đ',
            image: '/images/candle.jpg',
            category: 'Trang trí'
        }
    ]
    const categories = ['Tất cả', 'Đồ len', 'Phụ kiện', 'Trang trí']

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
                        key={category}
                        className={selectedCategory === category ? 'active' : ''}
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