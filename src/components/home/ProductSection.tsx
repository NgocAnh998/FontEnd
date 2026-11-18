import type { Product } from '../../types/product';
import ProductItem from '../Product/ProductItem';
import SectionHeading from './SectionHeading';

interface ProductSectionProps {
    title: string;
    subtitle: string;
    products: Product[];
}

function ProductSection({ title, subtitle, products }: ProductSectionProps) {
    return (
        <section className="home-section">
            <SectionHeading title={title} subtitle={subtitle} />

            <div className="row g-4">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductSection;