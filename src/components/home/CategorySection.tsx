import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';

const categories = [
    { id: 1, name: 'Phụ kiện', icon: 'bi-handbag' },
    { id: 2, name: 'Đồ chơi', icon: 'bi-emoji-smile' },
    { id: 3, name: 'Đồ gốm', icon: 'bi-cup-hot' },
    { id: 4, name: 'Trang sức', icon: 'bi-gem' },
    { id: 5, name: 'Trang trí', icon: 'bi-flower1' }
];

function CategorySection() {
    return (
        <section className="home-section">
            <SectionHeading
                title="Danh mục sản phẩm"
                subtitle="Khám phá các danh mục của chúng tôi"
            />

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
                {categories.map((category) => (
                    <div className="col" key={category.id}>
                        <Link
                            to={`/products?category=${category.name}`}
                            className="card category-item h-100 text-decoration-none"
                        >
                            <div className="category-icon">
                                <i className={`bi ${category.icon}`}></i>
                            </div>

                            <h6 className="mb-0 fw-semibold">{category.name}</h6>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CategorySection;