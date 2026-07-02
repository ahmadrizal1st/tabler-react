import AppRouter from './routes'
import people from './data/people.json'
import photos from './data/photos.json'
import activity from './data/activity.json'
import chats from './data/chats.json'
import mails from './data/mails.json'
import faq from './data/faq.json'
import jobs from './data/jobs.json'
import projects from './data/projects.json'
import commits from './data/commits.json'
import tasksData from './data/tasks.json'
import invoicesData from './data/invoices.json'
import { ThemeProvider } from './context/ThemeContext'
import { DataProvider } from './context/DataContext'
import { ThemeSettings } from './components/layout/ThemeSettings'

export default function App() {
  const data = {
    people,
    commits,
    tasksData,
    mails,
    chats,
    cryptoCurrencies: [],
    cryptoOrders: { sell_orders: [], buy_orders: [] },
    cryptoMarkets: [],
    photos,
    projects,
    activity,
    faq,
    jobs,
    invoicesData,
  }

  return (
    <ThemeProvider>
      <DataProvider value={data}>
        <AppRouter />
        <ThemeSettings />
      </DataProvider>
    </ThemeProvider>
  )
}