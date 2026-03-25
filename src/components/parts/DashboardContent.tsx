// src/components/parts/DashboardContent.tsx
import { Button } from '../ui/Button'
import { Modal, ModalHeader, ModalFooter } from '../ui/Modal'

import { WelcomeCard } from '../cards/WelcomeCard'
import { TotalUsersCard } from '../cards/charts/TotalUsersCard'
import { ActiveUsersCard, ActiveUsersCard2 } from '../cards/charts/ActiveUsersCard'
import { SalesCard } from '../cards/charts/SalesCard'
import { RevenueCard } from '../cards/charts/RevenueCard'
import { NewClientsCard } from '../cards/charts/NewClientsCard'

import { SmallStatsCard } from '../cards/SmallStatsCard'

import { TrafficSummaryCard } from '../cards/TrafficSummaryCard'
import { MapVectorCard } from '../cards/MapVectorCard'
import { StorageUsageCard } from '../cards/StorageUsageCard'
import { ActivityCard } from '../cards/ActivityCard'
import { DevelopmentActivityCard } from '../cards/DevelopmentActivityCard'
import { IconsBannerCard } from '../cards/IconsBannerCard'
import { MostVisitedPagesCard } from '../cards/MostVisitedPagesCard'
import { SponsorCard } from '../cards/SponsorCard'
import { SocialTrafficCard } from '../cards/SocialTrafficCard'
import { TasksCard } from '../cards/TasksCard'
import { InvoicesCard } from '../cards/InvoicesCard'

import activityData from '../../data/activity.json'
import invoicesData from '../../data/invoices.json'
import commitsData from '../../data/commits.json'
import tasksData from '../../data/tasks.json'
import peopleData from '../../data/people.json'

export const dashboardHeaderActions = (
  <div className="btn-list">
    <span className="d-none d-sm-inline">
      <Button text="New view" color="white" />
    </span>
    <Button
      icon="plus"
      text="Create new report"
      color="primary"
      className="d-none d-sm-inline-block"
      modalId="report"
    />
    <Button
      icon="plus"
      iconOnly
      color="primary"
      className="d-sm-none"
      text="Create new report"
      modalId="report"
    />
  </div>
)

export function DashboardContent() {
  const allTasks: any = ((tasksData as any).columns.flatMap((c: any) => c.tasks) as any[]).map((t: any) => ({ ...t, checked: t.status === 'success' }))

  return (
    <>
      <div className="row row-deck row-cards">
        <div className="col-sm-12 col-lg-6">
          <WelcomeCard />
        </div>
        <div className="col-sm-6 col-lg-3">
          <TotalUsersCard />
        </div>
        <div className="col-sm-6 col-lg-3">
          <ActiveUsersCard2 />
        </div>

        <div className="col-sm-6 col-lg-3">
          <SalesCard />
        </div>
        <div className="col-sm-6 col-lg-3">
          <RevenueCard />
        </div>
        <div className="col-sm-6 col-lg-3">
          <NewClientsCard />
        </div>
        <div className="col-sm-6 col-lg-3">
          <ActiveUsersCard />
        </div>

        <div className="col-12">
          <div className="row row-cards">
            <div className="col-sm-6 col-lg-3">
              <SmallStatsCard color="primary" icon="currency-dollar" title="132 Sales" description="12 waiting payments" />
            </div>
            <div className="col-sm-6 col-lg-3">
              <SmallStatsCard color="green" icon="shopping-cart" title="78 Orders" description="32 shipped" />
            </div>
            <div className="col-sm-6 col-lg-3">
              <SmallStatsCard color="x" icon="brand-x" title="623 Shares" description="16 today" />
            </div>
            <div className="col-sm-6 col-lg-3">
              <SmallStatsCard color="facebook" icon="brand-facebook" title="132 Likes" description="21 today" />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <TrafficSummaryCard />
        </div>
        <div className="col-lg-6">
          <MapVectorCard title="Locations" />
        </div>

        <div className="col-lg-6">
          <div className="row row-cards">
            <div className="col-12">
              <StorageUsageCard />
            </div>
            <div className="col-12">
              <ActivityCard activity={activityData} people={peopleData} />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <DevelopmentActivityCard commits={commitsData as any} people={peopleData as any} />
        </div>

        <div className="col-12">
          <IconsBannerCard />
        </div>

        <div className="col-md-12 col-lg-8">
          <MostVisitedPagesCard />
        </div>
        <div className="col-md-6 col-lg-4">
          <SponsorCard />
        </div>

        <div className="col-md-6 col-lg-4">
          <SocialTrafficCard />
        </div>
        <div className="col-md-12 col-lg-8">
          <TasksCard tasks={allTasks as any[]} people={peopleData as any} />
        </div>

        <div className="col-12">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <InvoicesCard invoices={invoicesData as any} />
        </div>
      </div>

      <Modal id="modal-report" size="lg" top>
        <ModalHeader title="New Report" />
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="example-text-input" placeholder="Your report name" />
          </div>
          <label className="form-label">Report type</label>
          <div className="form-selectgroup-boxes row mb-3">
            <div className="col-lg-6">
              <label className="form-selectgroup-item">
                <input type="radio" name="report-type" value="1" className="form-selectgroup-input" defaultChecked />
                <span className="form-selectgroup-label d-flex align-items-center p-3">
                  <span className="me-3">
                    <span className="form-selectgroup-check"></span>
                  </span>
                  <span className="form-selectgroup-label-content">
                    <span className="form-selectgroup-title strong mb-1">Simple</span>
                    <span className="d-block text-secondary">Provide only basic data needed for the report</span>
                  </span>
                </span>
              </label>
            </div>
            <div className="col-lg-6">
              <label className="form-selectgroup-item">
                <input type="radio" name="report-type" value="1" className="form-selectgroup-input" />
                <span className="form-selectgroup-label d-flex align-items-center p-3">
                  <span className="me-3">
                    <span className="form-selectgroup-check"></span>
                  </span>
                  <span className="form-selectgroup-label-content">
                    <span className="form-selectgroup-title strong mb-1">Advanced</span>
                    <span className="d-block text-secondary">Full control over all report settings</span>
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-3">
                <label className="form-label">Report url</label>
                <div className="input-group input-group-flat">
                  <span className="input-group-text">
                    https://tabler.io/reports/
                  </span>
                  <input type="text" className="form-control ps-0" defaultValue="report-01" autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Visibility</label>
                <select className="form-select" defaultValue="1">
                  <option value="1">Private</option>
                  <option value="2">Public</option>
                  <option value="3">Hidden</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label">Client name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label">Reporting period</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-lg-12">
              <div>
                <label className="form-label">Additional information</label>
                <textarea className="form-control" rows={3}></textarea>
              </div>
            </div>
          </div>
        </div>
        <ModalFooter submitLabel="Create new report" />
      </Modal>
    </>
  )
}
