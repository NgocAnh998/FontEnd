
import { useEffect, useState } from 'react'
import ProductCard from '../components/common/ProductCard'
import { products, type Product } from '../data/products'

type ProductsProps = {
    searchText: string
    onAddToCart: (product: Product) => void
}

function Products({ searchText, onAddToCart }: ProductsProps) {
    const [selectedCategory, setSelectedCategory] = useState('Tất cả')
    const [sortOrder, setSortOrder] = useState('default')

    // Lấy danh sách ID sản phẩm yêu thích từ localStorage
    const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
        const savedFavorites = localStorage.getItem('handmadeFavorites')

        if (!savedFavorites) {
            return []
        }

        try {
            return JSON.parse(savedFavorites) as string[]
        } catch {
            return []
        }
    })

    // Tự động lấy danh mục từ dữ liệu sản phẩm
    const categories = [
        'Tất cả',
        ...new Set(products.map((product) => product.category))
    ]

    // Lưu danh sách yêu thích vào localStorage
    useEffect(() => {
        localStorage.setItem(
            'handmadeFavorites',
            JSON.stringify(favoriteIds)
        )
    }, [favoriteIds])

    // Thêm hoặc xóa sản phẩm khỏi danh sách yêu thích
    const toggleFavorite = (productId: string) => {
        setFavoriteIds((currentIds) => {
            if (currentIds.includes(productId)) {
                return currentIds.filter((id) => id !== productId)
            }

            return [...currentIds, productId]
        })
    }

    // Chuẩn hóa nội dung tìm kiếm
    const normalizedSearch = searchText.trim().toLowerCase()

    // Lọc và sắp xếp sản phẩm
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

            <p className="favorites-summary">
                Bạn đã yêu thích {favoriteIds.length} sản phẩm
            </p>

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
                            isFavorite={favoriteIds.includes(product.id)}
                            onToggleFavorite={() => toggleFavorite(product.id)}
                            onAddToCart={() => onAddToCart(product)}
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
