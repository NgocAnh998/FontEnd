export interface Product {
    id: string
    name: string
    category: string
    price: number
    originalPrice?: number
    image: string
    rating: number
    soldCount: number
    description: string
    materials: string[]
    inStock: boolean
}