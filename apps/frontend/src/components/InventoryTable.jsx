const rows = [
  { sku: 'BLU-POS-001', item: 'Bluetooth Scanner', stock: 124, location: 'WH-A' },
  { sku: 'BLU-POS-014', item: 'Receipt Printer', stock: 18, location: 'WH-B' },
  { sku: 'BLU-POS-031', item: 'POS Tablet 10"', stock: 57, location: 'Store-09' },
  { sku: 'BLU-POS-102', item: 'Cash Drawer', stock: 9, location: 'WH-A' }
];

export default function InventoryTable() {
  return (
    <article className="card table-card">
      <div className="title-row">
        <h2>Inventory Snapshot</h2>
        <button className="ghost">Sync Kafka Stream</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Item</th>
            <th>Stock</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.sku}>
              <td>{row.sku}</td>
              <td>{row.item}</td>
              <td>{row.stock}</td>
              <td>{row.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
