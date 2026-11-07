import React from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../../types/product'

interface ProductCardProps {
    product: Product
    isFavorite: boolean
    onToggleFavorite: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
                                                            product,
                                                            isFavorite,
                                                            onToggleFavorite
                                                        }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-200 flex flex-col">
            <div className="relative aspect-square bg-gray-50 overflow-hidden group">
                <Link to={`/products/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                </Link>
                <button
                    onClick={() => onToggleFavorite(product)}
                    className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition ${
                        isFavorite ? 'bg-red-50 text-red-500' : 'bg-white text-gray-400 hover:text-red-500'
                    }`}
                >
                    <svg className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs text-amber-600 font-medium mb-1">{product.category}</span>
                <Link to={`/products/${product.id}`} className="font-semibold text-gray-800 hover:text-amber-600 line-clamp-1 mb-2">
                    {product.name}
                </Link>
                <div className="flex items-center justify-between mt-auto">
                    <div>
                        <span className="text-lg font-bold text-gray-900">{product.price.toLocaleString()}đ</span>
                        {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through ml-2">{product.originalPrice.toLocaleString()}đ</span>
                        )}
                    </div>
                    <span className="text-xs text-gray-500">Đã bán {product.soldCount}</span>
                </div>
            </div>
        </div>
    )
}