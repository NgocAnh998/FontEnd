import { Link } from 'react-router-dom';

interface BreadcrumbItem {
    label: string;
    to?: string;
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li
                            key={item.label}
                            className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                            aria-current={isLast ? 'page' : undefined}
                        >
                            {item.to && !isLast ? (
                                <Link to={item.to} className="text-decoration-none">
                                    {item.label}
                                </Link>
                            ) : (
                                item.label
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;