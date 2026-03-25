// src/components/cards/charts/ActiveUsersCard.tsx
import { Trending } from '../../ui/Trending'
import { Chart } from '../../ui/Chart'
import { DropdownDays } from '../../ui/DropdownDays'

interface ActiveUsersCardProps {
  value?: string
  trendValue?: number
  description?: string
}

export function ActiveUsersCard2({ value = '25,782', trendValue = -1 }: ActiveUsersCardProps) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="subheader">Active Users</div>
        <div className="d-flex align-items-baseline mb-2">
          <div className="h1 mb-0 me-2">{value}</div>
          <div className="me-auto">
            <Trending value={trendValue} />
          </div>
        </div>
        <Chart
          chartId="active-users-2"
          chartData={{
            type: "radialBar",
            sparkline: true,
            lineCap: 'butt',
            series: [{ name: 'Active', data: [78], color: 'primary' }]
          }}
          height={14}
        />
      </div>
    </div>
  )
}

export function ActiveUsersCard({ value = '2,986', trendValue = 4 }: ActiveUsersCardProps) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="subheader">Active subscriptions</div>
          <div className="ms-auto lh-1">
            <DropdownDays id="active-users" label="Select time range for active users" />
          </div>
        </div>
        <div className="d-flex align-items-baseline">
          <div className="h1 mb-3 me-2">{value}</div>
          <div className="me-auto">
            <Trending value={trendValue} />
          </div>
        </div>
        <Chart
          chartId="active-users"
          chartData={{
            type: "bar",
            sparkline: true,
            datetime: true,
            series: [{ name: 'Profits', data: [37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67] }],
            color: "primary"
          }}
          size="sm"
        />
      </div>
    </div>
  )
}