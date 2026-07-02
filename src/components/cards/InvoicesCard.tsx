// src/components/cards/InvoicesCard.tsx
import { useState } from 'react'
import { Icon } from '../ui/Icon'
import { Flag } from '../ui/Flag'
import { DropdownMenu } from '../ui/DropdownMenu'
import { Pagination as UIPagination } from '../ui/Pagination'
import type { Invoice } from '../../types'

function ActionsDropdown() {
  return <DropdownMenu right />
}

interface InvoicesCardProps {
  invoices?: Invoice[]
  limit?: number
}

export function InvoicesCard({ invoices = [], limit: initialLimit = 8 }: InvoicesCardProps) {
  const [showCount, setShowCount] = useState(initialLimit.toString())
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filteredInvoices = invoices.filter(
    (inv) =>
      (inv.name?.toLowerCase() || '').includes(search.toLowerCase()) ||
      (inv.client?.toLowerCase() || '').includes(search.toLowerCase())
  )

  const limitNum = parseInt(showCount) || 8
  const totalPages = Math.ceil(filteredInvoices.length / limitNum)
  const displayInvoices = filteredInvoices.slice((page - 1) * limitNum, page * limitNum)

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Invoices</h3>
      </div>

      <div className="card-body border-bottom py-3">
        <div className="d-flex">
          <div className="text-secondary">
            Show
            <div className="mx-2 d-inline-block">
              <input
                type="text"
                className="form-control form-control-sm"
                value={showCount}
                onChange={(e) => {
                  setShowCount(e.target.value)
                  setPage(1)
                }}
                size={3}
                aria-label="Invoices count"
              />
            </div>
            entries
          </div>
          <div className="ms-auto text-secondary">
            Search:
            <div className="ms-2 d-inline-block">
              <input
                type="text"
                className="form-control form-control-sm"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setPage(1)
                }}
                aria-label="Search invoice"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-selectable card-table table-vcenter text-nowrap datatable">
          <thead>
            <tr>
              <th className="w-1">
                <input
                  className="form-check-input m-0 align-middle"
                  type="checkbox"
                  aria-label="Select all invoices"
                />
              </th>
              <th className="w-1">
                No. <Icon icon="chevron-up" className="icon-sm icon-thick" />
              </th>
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
            {displayInvoices.map((invoice, index) => {
              const displayIndex = (page - 1) * limitNum + index
              return (
                <tr key={displayIndex}>
                  <td>
                    <input
                      className="form-check-input m-0 align-middle table-selectable-check"
                      type="checkbox"
                      aria-label="Select invoice"
                    />
                  </td>
                  <td>
                    <span className="text-secondary">{invoice.invoice || `00${displayIndex + 1401}`}</span>
                  </td>
                  <td>
                    <a href="invoice.html" className="text-reset" tabIndex={-1}>
                      {invoice.name}
                    </a>
                  </td>
                  <td>
                    <Flag flag={invoice.country} size="xs" className="me-2" />
                    {invoice.client}
                  </td>
                  <td>{invoice['vat-no'] || invoice.vatNo}</td>
                  <td>{invoice.date}</td>
                  <td>
                    <span className={`badge bg-${invoice.status} me-1`}></span>
                    {invoice['status-name'] || invoice.statusName}
                  </td>
                  <td>{invoice.price}</td>
                  <td className="text-end">
                    <ActionsDropdown />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="card-footer">
        <div className="row g-2 justify-content-center justify-content-sm-between">
          <div className="col-auto d-flex align-items-center">
            <p className="m-0 text-secondary">
              Showing <strong>{(page - 1) * limitNum + 1} to {Math.min(page * limitNum, filteredInvoices.length)}</strong> of <strong>{filteredInvoices.length}</strong> entries
            </p>
          </div>
          <div className="col-auto">
            <UIPagination
              count={totalPages}
              activeItem={page}
              onPageChange={(p) => setPage(p)}
              className="m-0 ms-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
