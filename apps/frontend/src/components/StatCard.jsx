export default function StatCard({ title, value, trend }) {
  return (
    <article className="card stat-card">
      <p>{title}</p>
      <h3>{value}</h3>
      <span>{trend}</span>
    </article>
  );
}
