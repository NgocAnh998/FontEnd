import type { Product } from '../types/product'

export const PRODUCTS_DATA: Product[] = [
    {
        id: 'p1',
        name: 'Túi Xách Len Handmade Móc Tay Vintage',
        category: 'Phụ kiện',
        price: 350000,
        originalPrice: 420000,
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&auto=format&fit=crop&q=60',
        rating: 4.8,
        soldCount: 45,
        description: 'Túi xách làm từ sợi cotton tự nhiên, đan móc thủ công tỉ mỉ từng đường kim mũi chỉ, phù hợp phong cách vintage.',
        materials: ['Sợi cotton', 'Khóa nam châm da'],
        inStock: true
    },
    {
        id: 'p2',
        name: 'Gấu Bông Len Amigurumi Móc Khóa',
        category: 'Đồ chơi',
        price: 120000,
        image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60',
        rating: 4.9,
        soldCount: 120,
        description: 'Móc khóa gấu bông nhỏ xinh móc thủ công dùng làm quà tặng hoặc treo cặp sách.',
        materials: ['LenMilk Cotton', 'Bông gòn bi'],
        inStock: true
    },
    {
        id: 'p3',
        name: 'Cốc Gốm Sứ Thủ Công Vẽ Hoa Nổi',
        category: 'Đồ gốm',
        price: 220000,
        originalPrice: 250000,
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60',
        rating: 4.7,
        soldCount: 30,
        description: 'Cốc gốm nung nhiệt độ cao an toàn sức khỏe, họa tiết hoa vẽ tay hoàn toàn thủ công.',
        materials: ['Đất sét trắng', 'Men gốm tự nhiên'],
        inStock: true
    },
    {
        id: 'p4',
        name: 'Vòng Tay Macrame Đính Đá Phong Thủy',
        category: 'Trang sức',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1611591475754-d87214736f1b?w=500&auto=format&fit=crop&q=60',
        rating: 4.6,
        soldCount: 88,
        description: 'Vòng tay đan dây macrame kết hợp đá thạch anh tự nhiên mang lại bình an.',
        materials: ['Dây sáp', 'Đá thạch anh'],
        inStock: false
    },
    {
        id: 'p5',
        name: 'Nến Thơm Tinh Dầu Thiên Nhiên Hoa Hồng',
        category: 'Trang trí',
        price: 180000,
        image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop&q=60',
        rating: 5.0,
        soldCount: 64,
        description: 'Nến làm từ sáp đậu nành an toàn, hương thơm tinh dầu hoa hồng dịu nhẹ giúp thư giãn.',
        materials: ['Sáp đậu nành', 'Tinh dầu thiên nhiên', 'Bấc gỗ'],
        inStock: true
    },
    {
        id: 'p6',
        name: 'Khăn Choàng Cổ Len Dệt Kim Tay',
        category: 'Phụ kiện',
        price: 290000,
        originalPrice: 350000,
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&auto=format&fit=crop&q=60',
        rating: 4.8,
        soldCount: 19,
        description: 'Khăn choàng dày dặn, ấm áp, chất liệu len mềm mại không gây kích ứng da.',
        materials: ['Len lông cừu tổng hợp'],
        inStock: true
    }
]