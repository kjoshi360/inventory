import StatCard from './components/StatCard';
import InventoryTable from './components/InventoryTable';
import QuickActions from './components/QuickActions';

const stats = [
  { title: 'Today Sales', value: '$12,840', trend: '+14%' },
  { title: 'Open Orders', value: '46', trend: '+5%' },
  { title: 'Low Stock SKUs', value: '19', trend: '-3%' },
  { title: 'Active Warehouses', value: '4', trend: 'Stable' }
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">Modular Monolith Platform</p>
          <h1>BluePOS Advanced Inventory</h1>
          <p className="subtitle">Unified POS, procurement, stock movement, and analytics.</p>
        </div>
        <button className="primary">Create Sales Order</button>
      </header>

      <section className="stats-grid">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </section>

      <section className="content-grid">
        <InventoryTable />
        <QuickActions />
      </section>
    </div>
  );
}
