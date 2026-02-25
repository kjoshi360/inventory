const actions = ['Receive Purchase Order', 'Run Cycle Count', 'Transfer Stock', 'Publish Daily Report'];

export default function QuickActions() {
  return (
    <article className="card actions-card">
      <h2>Operations</h2>
      <ul>
        {actions.map((action) => (
          <li key={action}>
            <button>{action}</button>
          </li>
        ))}
      </ul>
    </article>
  );
}
