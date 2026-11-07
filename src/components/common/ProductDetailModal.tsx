import React, { useState } from "react";
import { initialReviews, type ReviewItem } from "../../data/reviews";

interface ProductInfo {
    id: number;
    name: string;
    price: number;
    image?: string;
    category?: string;
    description?: string;
}

interface ProductDetailModalProps {
    product: ProductInfo | null;
    onClose: () => void;
    onAddToCart?: (product: ProductInfo, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
                                                                          product,
                                                                          onClose,
                                                                          onAddToCart,
                                                                      }) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews);
    const [userName, setUserName] = useState<string>("");
    const [rating, setRating] = useState<number>(5);
    const [content, setContent] = useState<string>("");

    if (!product) return null;

    const productReviews = reviews.filter((item) => item.productId === product.id);

    const handleAddReview = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userName.trim() || !content.trim()) return;

        const newReview: ReviewItem = {
            id: Date.now(),
            productId: product.id,
            userName: userName.trim(),
            rating,
            content: content.trim(),
            date: new Date().toLocaleDateString("vi-VN"),
        };

        setReviews([newReview, ...reviews]);
        setUserName("");
        setContent("");
        setRating(5);
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    ×
                </button>

                <div className="modal-product-main">
                    <div className="modal-product-img">
                        {product.image ? (
                            <img src={product.image} alt={product.name} />
                        ) : (
                            <div className="img-placeholder">Handmade</div>
                        )}
                    </div>

                    <div className="modal-product-info">
            <span className="modal-category">
              {product.category || "Đồ thủ công"}
            </span>
                        <h2>{product.name}</h2>
                        <p className="modal-price">
                            {product.price.toLocaleString("vi-VN")} đ
                        </p>
                        <p className="modal-desc">
                            {product.description ||
                                "Sản phẩm được chế tác thủ công 100% từ nguyên liệu tự nhiên, an toàn và thân thiện với môi trường."}
                        </p>

                        <div className="handmade-specs">
                            <div>
                                <strong>Tình trạng:</strong> Còn hàng (làm thủ công từng chiếc)
                            </div>
                            <div>
                                <strong>Thời gian chuẩn bị:</strong> 1 - 2 ngày
                            </div>
                            <div>
                                <strong>Bảo quản:</strong> Nơi khô ráo, tránh ẩm ướt
                            </div>
                        </div>

                        <div className="modal-actions">
                            <div className="qty-control">
                                <button
                                    type="button"
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                >
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button
                                    type="button"
                                    onClick={() => setQuantity((q) => q + 1)}
                                >
                                    +
                                </button>
                            </div>

                            {onAddToCart && (
                                <button
                                    type="button"
                                    className="btn-buy-modal"
                                    onClick={() => {
                                        onAddToCart(product, quantity);
                                        onClose();
                                    }}
                                >
                                    Thêm vào giỏ
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="modal-reviews-section">
                    <h3>Đánh giá từ khách hàng ({productReviews.length})</h3>

                    <form className="review-form" onSubmit={handleAddReview}>
                        <input
                            type="text"
                            placeholder="Tên của bạn"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <select
                            value={rating}
                            onChange={(e) => setRating(Number(e.target.value))}
                        >
                            <option value={5}>5 sao</option>
                            <option value={4}>4 sao</option>
                            <option value={3}>3 sao</option>
                            <option value={2}>2 sao</option>
                            <option value={1}>1 sao</option>
                        </select>
                        <textarea
                            placeholder="Chia sẻ cảm nhận về món đồ handmade này..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={2}
                        />
                        <button type="submit">Gửi đánh giá</button>
                    </form>

                    <div className="review-list">
                        {productReviews.length === 0 ? (
                            <p className="no-review">Chưa có đánh giá nào cho sản phẩm này.</p>
                        ) : (
                            productReviews.map((rev) => (
                                <div key={rev.id} className="review-item">
                                    <div className="review-header">
                                        <strong>{rev.userName}</strong>
                                        <span>{"★".repeat(rev.rating)}</span>
                                        <small>{rev.date}</small>
                                    </div>
                                    <p>{rev.content}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};