const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl p-4 shadow-sm ${className}`}>
        {children}
    </div>
);

const CardContent = ({ children, className = '' }) => (
    <div className={className}>{children}</div>
);

export default Card;
export { CardContent };
