interface StatCard {
    title: string;
    value: string;
    note: string;
    icon: string;
    color: 'primary' | 'success' | 'warning' | 'danger' | 'info';
}

function StatCard({ title, value, note, icon, color }: StatCard) {
    return (
        <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <h6 className="text-muted mb-1">{title}</h6>
                        <h3 className="fw-bold mb-1">{value}</h3>
                        <small className={`text-${color}`}>{note}</small>
                    </div>

                    <div
                        className={`rounded-3 d-flex align-items-center justify-content-center bg-${color}-subtle text-${color}`}
                        style={{ width: '56px', height: '56px' }}
                    >
                        <i className={`bi ${icon} fs-3`}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatCard;