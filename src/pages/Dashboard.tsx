import BaseLayout from '../layouts/BaseLayout'
import { DashboardContent, dashboardHeaderActions } from '../components/parts/DashboardContent'

export default function Dashboard() {
  return (
    <BaseLayout pageTitle="Dashboard" pagePretitle="Overview" pageActions={dashboardHeaderActions}>
      <DashboardContent />
    </BaseLayout>
  )
}