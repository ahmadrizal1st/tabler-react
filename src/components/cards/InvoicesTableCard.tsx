import { useState } from 'react';

interface InvoiceRow {
  id?: string;
  subject: string;
  client: string;
  vatNo?: string;
  date?: string;
  status: string;
  statusColor?: string;
  price: string;
}

interface InvoicesTableCardProps {
  invoices?: InvoiceRow[];
}

export function InvoicesTableCard({
  invoices = [
    { id: '001401', subject: 'Logo creation', client: 'Acme Corp', vatNo: 'GB123', date: '2024-01-10', status: 'Paid', statusColor: 'success', price: '$1,800' },
    { id: '001402', subject: 'Web design', client: 'Globe Inc', vatNo: 'US456', date: '2024-01-14', status: 'Pending', statusColor: 'warning', price: '$20,000' },
    { id: '001403', subject: 'App design', client: 'Tech Ltd', vatNo: 'FR789', date: '2024-01-18', status: 'Overdue', statusColor: 'danger', price: '$3,200' },
  ],
}: InvoicesTableCardProps) {
  const [perPage, setPerPage] = useState('8');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const filtered = invoices.filter(inv =>
    !search || inv.subject.toLowerCase().includes(search.toLowerCase()) || inv.client.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Invoices</h3>
      </div>
      <div className="card-body border-bottom py-3">
        <div className="d-flex">
          <div className="text-secondary">
            Show <div className="mx-2 d-inline-block">
              <input type="text" className="form-control form-control-sm" value={perPage}
                onChange={e => setPerPage(e.target.value)} size={3} />
            </div> entries
          </div>
          <div className="ms-auto text-secondary">
            Search: <div className="ms-2 d-inline-block">
              <input type="text" className="form-control form-control-sm"
                value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-selectable card-table table-vcenter text-nowrap">
          <thead>
            <tr>
              <th className="w-1"><input className="form-check-input m-0" type="checkbox" /></th>
              <th className="w-1">No. ↑</th>
              <th>Invoice Subject</th>
              <th>Client</th>
              <th>VAT No.</th>
              <th>Created</th>
              <th>Status</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.slice(0, Number(perPage) || 8).map((inv, i) => (
              <tr key={i}>
                <td>
                  <input className="form-check-input m-0" type="checkbox"
                    checked={selected.has(i)}
                    onChange={() => {
                      const next = new Set(selected);
                      next.has(i) ? next.delete(i) : next.add(i);
                      setSelected(next);
                    }} />
                </td>
                <td><span className="text-secondary">{inv.id}</span></td>
                <td><a href="#" className="text-reset">{inv.subject}</a></td>
                <td>{inv.client}</td>
                <td>{inv.vatNo}</td>
                <td>{inv.date}</td>
                <td><span className={`badge bg-${inv.statusColor} me-1`} />{inv.status}</td>
                <td>{inv.price}</td>
                <td className="text-end">
                  <button className="btn btn-sm">Actions</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer">
        <div className="row g-2 justify-content-between">
          <div className="col-auto d-flex align-items-center">
            <p className="m-0 text-secondary">
              Showing <strong>1 to {Math.min(filtered.length, Number(perPage) || 8)}</strong> of <strong>{filtered.length} entries</strong>
            </p>
          </div>
          <div className="col-auto">
            <nav>
              <ul className="pagination m-0">
                <li className="page-item disabled"><a className="page-link" href="#">«</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">»</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
