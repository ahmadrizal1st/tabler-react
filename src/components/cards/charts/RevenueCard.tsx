// src/components/cards/charts/RevenueCard.tsx
import { Trending } from '../../ui/Trending'
import { Chart } from '../../ui/Chart'
import { DropdownDays } from '../../ui/DropdownDays'

interface RevenueCardProps {
  value?: string
  trendValue?: number
}

export function RevenueCard({ value = '$4,300', trendValue = 8 }: RevenueCardProps) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="subheader">Revenue</div>
          <div className="ms-auto lh-1">
            <DropdownDays />
          </div>
        </div>
        <div className="d-flex align-items-baseline">
          <div className="h1 mb-0 me-2">{value}</div>
          <div className="me-auto">
            <Trending value={trendValue} />
          </div>
        </div>
      </div>
      <Chart
        chartId="revenue-bg"
        chartData={{
          type: "area",
          sparkline: true,
          datetime: true,
          series: [{ name: 'Profits', data: [37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67] }],
          color: "primary"
        }}
        height={2.5}
        class="card-img-bottom"
      />
    </div>
  )
}