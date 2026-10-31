export type Product = {
    id: number
    name: string
    price: number
    image: string
    category: string
    description: string
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Gấu bông handmade',
        price: 150000,
        image: '/images/teddy.jpg',
        category: 'Đồ len',
        description: 'Gấu bông len được làm thủ công.'
    },
    {
        id: 2,
        name: 'Túi tote handmade',
        price: 120000,
        image: '/images/tote.jpg',
        category: 'Phụ kiện',
        description: 'Túi vải phù hợp cho việc đi học và đi chơi.'
    },
    {
        id: 3,
        name: 'Hoa len handmade',
        price: 80000,
        image: '/images/flower.jpg',
        category: 'Đồ len',
        description: 'Bó hoa len nhỏ thích hợp làm quà tặng.'
    },
    {
        id: 4,
        name: 'Nến thơm handmade',
        price: 100000,
        image: '/images/candle.jpg',
        category: 'Trang trí',
        description: 'Nến trang trí cho không gian sống.'
    },
    {
        id: 5,
        name: 'Vòng tay thủ công',
        price: 65000,
        image: '/images/bracelet.jpg',
        category: 'Trang sức',
        description: 'Vòng tay đơn giản dành cho người yêu thích handmade.'
    },
    {
        id: 6,
        name: 'Móc khóa len',
        price: 45000,
        image: '/images/keychain.jpg',
        category: 'Phụ kiện',
        description: 'Móc khóa nhỏ có thể dùng để trang trí balo.'
    },
    {
        id: 7,
        name: 'Sổ tay trang trí',
        price: 75000,
        image: '/images/notebook.jpg',
        category: 'Quà tặng',
        description: 'Sổ tay thích hợp để ghi chép hằng ngày.'
    },
    {
        id: 8,
        name: 'Hộp quà handmade',
        price: 180000,
        image: '/images/giftbox.jpg',
        category: 'Quà tặng',
        description: 'Hộp quà dành cho những dịp đặc biệt.'
    }
]