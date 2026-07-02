export interface Person {
  id?: number | string
  full_name?: string
  first_name?: string
  last_name?: string
  job_title?: string
  photo?: string
  status?: string
  last_login?: string
  email?: string
  role?: string
  university?: string
  country?: string
  birth_date?: string
  city?: string
  country_code?: string
  time_zone?: string
  company?: string
  [key: string]: unknown
}

export interface ActivityItem {
  text: string
  icon?: string
}

export interface Commit {
  id?: string | number
  message?: string
  description?: string
  date?: string
  author?: string
  author_avatar?: string
  [key: string]: unknown
}

export interface Task {
  id?: string | number
  name?: string
  title?: string
  status?: string
  priority?: string
  due_date?: string
  assigned_to?: number
  description?: string
  color?: string
  favorite?: boolean
  starred?: boolean
  users?: number
  "users-offset"?: number
  comments?: number
  image?: string
  likes?: number
  subtasks?: Array<{ name: string; done?: boolean }>
  checked?: boolean
  [key: string]: unknown
}

export interface TasksColumn {
  name: string
  tasks: Task[]
}

export interface TasksData {
  columns: TasksColumn[]
}

export interface Invoice {
  id?: string | number
  invoice?: string
  name?: string
  country?: string
  client?: string
  'vat-no'?: string | number
  vatNo?: string
  date?: string
  status?: string
  'status-name'?: string
  statusName?: string
  price?: string
  [key: string]: unknown
}

export type InvoicesData = Invoice[]

export interface Mail {
  id: string | number
  subject?: string
  from?: string
  sender?: string
  date?: string
  preview?: string
  unread?: boolean
  [key: string]: unknown
}

export interface CryptoCurrency {
  id?: string | number
  name?: string
  symbol?: string
  price?: string
  change?: string
  [key: string]: unknown
}

export interface CryptoOrder {
  id?: string | number
  price?: string
  amount?: string
  total?: string
  type?: 'buy' | 'sell'
}

export interface Photo {
  id?: string | number
  url?: string
  path?: string
  file?: string
  title?: string
  src?: string
  tags?: string | string[]
  width?: number
  height?: number
  horizontal?: boolean
  author?: string
  liked?: boolean
  likes?: number
  views?: number
  [key: string]: unknown
}

export interface Project {
  id?: string | number
  name?: string
  title?: string
  client?: string
  status?: string
  progress?: number
  image?: string
  [key: string]: unknown
}

export interface FAQQuestion {
  question: string
}

export interface FAQCategory {
  name: string
  questions: FAQQuestion[]
}

export interface FAQItem {
  id: string | number
  question: string
  answer: string
}

export interface JobItem {
  id: string | number
  title?: string
  company: string
  location?: string
  type?: string
  salary?: string
  posted?: string
  image?: string
  tags?: string[]
  [key: string]: unknown
}

export interface NavItem {
  label: string
  href?: string
  icon?: string
  badge?: string
  badgeColor?: string
  active?: boolean
  dropdown?: boolean
  columns?: number
  items?: NavItem[]
  hideIcons?: boolean
  longTitles?: boolean
  disabled?: boolean
}

export interface ChatPerson {
  id: number | string
  full_name: string
  photo?: string
  avatar?: string
}

export interface ChatMessage {
  personId: number | string
  message?: string
  timestamp?: string
  loading?: boolean
  gif?: string
  'person-id'?: number | string
}
