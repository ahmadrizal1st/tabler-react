import { createContext, useContext, type ReactNode } from 'react'
import type {
  Person,
  Commit,
  Task,
  Photo,
  Project,
  FAQCategory,
  JobItem,
  Mail,
  CryptoCurrency,
  ActivityItem,
  TasksData,
  Invoice,
  ChatMessage,
} from '../types'

export interface DataContextValue {
  people: Person[]
  commits: Commit[]
  tasksData: TasksData
  mails: Mail[]
  chats: ChatMessage[]
  cryptoCurrencies: CryptoCurrency[]
  cryptoOrders: { sell_orders: unknown[]; buy_orders: unknown[] }
  cryptoMarkets: unknown[]
  photos: Photo[]
  projects: Project[]
  activity: ActivityItem[]
  faq: FAQCategory[]
  jobs: JobItem[]
  invoicesData: Invoice[]
}

const DataContext = createContext<DataContextValue | null>(null)

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be inside DataProvider')
  return ctx
}

interface DataProviderProps {
  children: ReactNode
  value: DataContextValue
}

export function DataProvider({ children, value }: DataProviderProps) {
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}
