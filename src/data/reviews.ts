export interface ReviewItem {
    id: number;
    productId: number;
    userName: string;
    rating: number;
    content: string;
    date: string;
}

export const initialReviews: ReviewItem[] = [
    {
        id: 1,
        productId: 1,
        userName: "Minh Anh",
        rating: 5,
        content: "Sản phẩm làm rất tỉ mỉ, đóng gói cẩn thận, mùi hương dễ chịu.",
        date: "12/10/2026"
    },
    {
        id: 2,
        productId: 1,
        userName: "Hoàng Nam",
        rating: 4,
        content: "Giao hàng hơi lâu một chút nhưng chất lượng đồ handmade rất xứng đáng.",
        date: "15/10/2026"
    },
    {
        id: 3,
        productId: 2,
        userName: "Thu Hà",
        rating: 5,
        content: "Màu sắc bên ngoài đẹp hơn trong ảnh, sẽ ủng hộ shop tiếp.",
        date: "20/10/2026"
    }
];