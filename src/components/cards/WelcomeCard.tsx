import { Trending } from '../ui/Trending';

interface WelcomeCardProps {
  name?: string;
  messages?: number;
  notifications?: number;
  todaySales?: string;
  salesTrend?: number;
  growthRate?: string;
  growthTrend?: number;
}

export function WelcomeCard({
  name = 'Paweł',
  messages = 5,
  notifications = 2,
  todaySales = '6,782',
  salesTrend = 7,
  growthRate = '78,4%',
  growthTrend = -1,
}: WelcomeCardProps) {
  return (
    <div className="card card-gradient">
      <div className="card-body">
        <div className="row gy-3">
          <div className="col-12 col-sm d-flex flex-column">
            <h3 className="h2">Welcome back, {name}</h3>
            <p className="text-secondary">
              You have {messages} new messages and {notifications} new notifications.
            </p>
            <div className="row g-5 mt-auto">
              <div className="col-auto">
                <div className="subheader">Today's Sales</div>
                <div className="d-flex align-items-baseline">
                  <div className="h3 me-2">{todaySales}</div>
                  <div className="me-auto">
                    <Trending value={salesTrend} />
                  </div>
                </div>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-success" style={{ width: '75%' }} />
                </div>
              </div>
              <div className="col-auto">
                <div className="subheader">Growth Rate</div>
                <div className="d-flex align-items-baseline">
                  <div className="h3 me-2">{growthRate}</div>
                  <div className="me-auto">
                    <Trending value={growthTrend} />
                  </div>
                </div>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-danger" style={{ width: '78%' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-auto d-flex justify-content-center">
            <a href="/illustrations">
              <img
                src="/tabler/static/illustrations/light/good-info.png"
                style={{ height: '200px', width: 'auto' }}
                alt="Good info illustration"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}