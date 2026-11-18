import { Link } from 'react-router-dom';

interface SectionHeadingProps {
    title: string;
    subtitle: string;
    to?: string;
}

function SectionHeading({ title, subtitle, to = '/products' }: SectionHeadingProps) {
    return (
        <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
                <h2 className="section-title mb-1">{title}</h2>
                <p className="section-subtitle mb-0">{subtitle}</p>
            </div>

            <Link to={to} className="text-decoration-none fw-semibold text-accent">
                Xem tất cả <i className="bi bi-arrow-right"></i>
            </Link>
        </div>
    );
}

export default SectionHeading;