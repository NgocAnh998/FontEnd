import type { PriceRangeKey, Product, ProductFilter } from '../types/product'

export const ALL_CATEGORY = 'Tất cả'


export const PRICE_RANGES: {
    key: PriceRangeKey
    label: string
    min: number
    max: number
}[] = [
    { key: 'all', label: 'Tất cả mức giá', min: 0, max: Infinity },
    { key: 'under-100', label: 'Dưới 100.000đ', min: 0, max: 100000 },
    { key: '100-300', label: 'Từ 100.000đ đến dưới 300.000đ', min: 100000, max: 300000 },
    { key: 'over-300', label: 'Từ 300.000đ trở lên', min: 300000, max: Infinity },
]


export const normalizeText = (text: string): string =>
    text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'd')
        .toLowerCase()
        .trim()

export const filterProducts = (
    products: Product[],
    filter: ProductFilter
): Product[] => {
    const keyword = normalizeText(filter.keyword)
    const range =
        PRICE_RANGES.find((r) => r.key === filter.priceRange) ?? PRICE_RANGES[0]

    const result = products.filter((p) => {
        const matchCategory =
            filter.category === ALL_CATEGORY || p.category === filter.category
        const matchPrice = p.price >= range.min && p.price < range.max
        const matchKeyword =
            !keyword ||
            normalizeText(p.name).includes(keyword) ||
            normalizeText(p.category).includes(keyword) ||
            normalizeText(p.description).includes(keyword)

        return matchCategory && matchPrice && matchKeyword
    })

    switch (filter.sortBy) {
        case 'price-asc':
            return result.sort((a, b) => a.price - b.price)
        case 'price-desc':
            return result.sort((a, b) => b.price - a.price)
        case 'name-asc':
            return result.sort((a, b) => a.name.localeCompare(b.name, 'vi'))
        case 'rating-desc':
            return result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
        default:
            return result
    }
}


export const getRelatedProducts = (
    products: Product[],
    current: Product,
    limit = 4
): Product[] => {
    const others = products.filter((p) => p.id !== current.id)
    const sameCategory = others.filter((p) => p.category === current.category)
    const rest = others.filter((p) => p.category !== current.category)
    return [...sameCategory, ...rest].slice(0, limit)
}
