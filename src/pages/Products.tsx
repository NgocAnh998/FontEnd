// Nguồn duy nhất cho kiểu dữ liệu sản phẩm
export interface Product {
    id: string
    name: string
    category: string
    price: number
    originalPrice?: number
    image: string
    rating?: number
    soldCount?: number
    description: string
    materials?: string[]
    inStock: boolean
}

export type SortOption =
    | 'default'
    | 'price-asc'
    | 'price-desc'
    | 'name-asc'
    | 'rating-desc'

export type PriceRangeKey = 'all' | 'under-100' | '100-300' | 'over-300'

export interface ProductFilter {
    keyword: string
    category: string
    priceRange: PriceRangeKey
    sortBy: SortOption
}
