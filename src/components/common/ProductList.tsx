import React from 'react'
import type { Product } from '../../types/product'
import { ProductCard } from './ProductCard'

interface ProductListProps {
    products: Product[]
    favoriteIds: string[]
    onToggleFavorite: (product: Product) => void
}

export const ProductList: React.FC<ProductListProps> = ({
                                                            products,
                                                            favoriteIds,
                                                            onToggleFavorite
                                                        }) => {
    if (products.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500">
                Không tìm thấy sản phẩm nào phù hợp.
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    isFavorite={favoriteIds.includes(product.id)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    )
}