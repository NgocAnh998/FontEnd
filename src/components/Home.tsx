import { products } from '../data/products';
import HeroBanner from './home/HeroBanner';
import CategorySection from './home/CategorySection';
import ProductSection from './home/ProductSection';

function Home() {
    const featuredProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    const newProducts = [...products].reverse().slice(0, 4);

    return (
        <div className="home-page">
            <HeroBanner />

            <CategorySection />

            <ProductSection
                title="Sản phẩm nổi bật"
                subtitle="Những sản phẩm được lựa chọn dành cho bạn"
                products={featuredProducts}
            />

            <ProductSection
                title="Sản phẩm mới"
                subtitle="Những sản phẩm mới nhất tại cửa hàng"
                products={newProducts}
            />
        </div>
    );
}

export default Home;