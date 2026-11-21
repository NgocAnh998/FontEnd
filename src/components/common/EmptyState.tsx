import { Link } from 'react-router-dom';

interface EmptyStateProps {
    icon: string;
    title: string;
    text: string;
    actionTo?: string;
    actionLabel?: string;
}

function EmptyState({ icon, title, text, actionTo, actionLabel }: EmptyStateProps) {
    return (
        <div className="col-12 text-center py-5">
            <i className={`bi ${icon} empty-state-icon`}></i>
            <h5 className="mt-3">{title}</h5>
            <p className="text-muted-custom">{text}</p>

            {actionTo && actionLabel && (
                <Link to={actionTo} className="btn btn-primary mt-2">
                    {actionLabel}
                </Link>
            )}
        </div>
    );
}

export default EmptyState;