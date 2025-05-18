export function Card({ children }) {
  return <div className="shadow-lg rounded-lg bg-white">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}